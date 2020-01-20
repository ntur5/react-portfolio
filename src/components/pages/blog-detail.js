import React, { Component } from 'react';
import axios from "axios"
import ReactHtmlParse from "react-html-parser"

import BlogFeaturedImage from "../blog/blog-featured-image"
import BlogForm from '../blog/blog-form';

export default class BlogDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        }

        this.handleEditClick = this.handleEditClick.bind(this)
    }

    handleEditClick() {
        console.log("handle edit clicked")
        this.setState({ editMode: true })
    }

    getBlogItem() {
        axios.get(`https://nathanstorrrs.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
        ).then(response => {
            // console.log("response", response)
            this.setState({
                blogItem: response.data.portfolio_blog
            })
        }).catch(error => {
            console.log("getBlogItem error", error)
        })

    }

    componentDidMount() {
        this.getBlogItem()
    }

    render() {
        // console.log("currentId", this.state.currentId)
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem

        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm editMode={this.state.editMode} blog={this.state.blogItem}/>
            } else {
                return (
                    <div className="content-container">
                        <h1 onClick={this.handleEditClick}>{title}</h1>

                        <BlogFeaturedImage img={featured_image_url} />

                        <div className="content">
                            {ReactHtmlParse(content)}
                        </div>
                        
                    </div>
                )
            }
        }

        return (
            <div className="blog-container">
                {contentManager()}
            </div>
        )
    }
}