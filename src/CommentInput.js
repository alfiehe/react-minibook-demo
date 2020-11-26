import React from 'react';

class CommentApp extends React.Component {

    constructor(props) {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    // 组件挂载时从 Storage 中获取 username 
    componentWillMount() {
        const username = localStorage.getItem('username');
        username && this.setState({ username });
    }

    componentDidMount() {
        this.textarea.focus()
    }

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleChangeContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = () => {
        const { username, content } = this.state;
        // 向父组件传递数据
        this.props.onSubmit && this.props.onSubmit({ 
          username, 
          content,
          createdTime: +new Date()
        });
        // 清空content输入框内容
        this.setState({
            content: ''
        })
    }

    render() {

        return (
            <div className="form">
                <div className="form-row">
                    <label className="form-label">Username</label>
                    <input
                        value={this.state.username}
                        onChange={this.handleChangeUsername}
                        className="form-input"
                        onBlur={e => {
                            console.log('===onBlur===', e.target.value);
                            localStorage.setItem('username', e.target.value);
                        }}
                    />
                </div>
                <div className="form-row">
                    <label className="form-label">Content</label>
                    <textarea
                        ref={e => this.textarea = e}
                        value={this.state.content}
                        className="form-input"
                        onChange={this.handleChangeContent} /><br />
                </div>
                <div className="form-row">
                    <button onClick={this.handleSubmit} className="form-submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default CommentApp;
