import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list"
import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';

export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfioItems: []
        }
    }

    getPortfolioItems() {
        axios.get("https://nathanstorrrs.devcamp.space/portfolio/portfolio_items", {withCredentials: true})
            .then(response => {
                this.setState({
                    portfioItems: [...response.data.portfolio_items]
                })
            })
            .catch(error => {
                console.log('error in getPortfolioItems', error)
            })
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>PortfolioManager</h1>
                </div>
                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfioItems} />
                </div>
            </div>
        )
    }
}