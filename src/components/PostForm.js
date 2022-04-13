import React, { Component } from 'react';

class componentName extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.post ? props.post.title : '',
            description: props.post ? props.post.description : '',
            error: ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description) {
            this.setState(() => ({ error: 'Please enter Title and Post' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                description: this.state.description
            })
        }
    }
    render() {
        return (
            <form className="form container" onSubmit={this.onSubmit}>
            {this.state.error && <p>{this.state.error}</p>}
                <input type="text"
                    className="title_input"
                    placeholder="Title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />

                <textarea
                    className="textarea"
                    placeholder="Post"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                >
                </textarea>
                <button className="btn_add">Save Post</button>
            </form>
        );
    }
}

export default componentName;
