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
        this.props.onSubmit && this.props.onSubmit({ username, content });
        // 清空content输入框内容
        this.setState({
            content: ''
        })
    }

    render() {

        return (
            <div>
                Username：<br />
                <input
                    value={this.state.username}
                    onChange={this.handleChangeUsername}
                    onBlur={e => {
                        console.log('===onBlur===', e.target.value);
                        localStorage.setItem('username', e.target.value);
                    }}
                /><br />
                Content：<br />
                <textarea
                    ref={e => this.textarea = e}
                    value={this.state.content}
                    onChange={this.handleChangeContent} /><br />
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

export default CommentApp;
