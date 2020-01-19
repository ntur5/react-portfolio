import React, { Component } from 'react';
import { EditorState, convertToRaw } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"

export default class RichTextEditor extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            ediotrState: EditorState.createEmpty()
        }
    }
    render() {
        return (
            <div>
                <Editor 
                    editorState={this.state.ediotrState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                />
                
            </div>
        )
    }
}