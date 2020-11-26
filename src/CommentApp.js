import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends React.Component {

    constructor() {
        super();
        this.state = {
            comments: [] // 评论列表数据
        }
    }

    componentWillMount() {
        const comments = localStorage.getItem('comments');
        comments && this.setState({ comments: JSON.parse(comments) });
    }

    // 接收 CommentInput 提交内容
    handleSubmitComment = (comment) => {
        console.log('===handleSubmitComment===', comment);
        // 校验是否填入内容
        if (!comment) { return };
        if (!comment.username) { return alert('请输入用户名') }
        if (!comment.content) { return alert('请输入评论内容') }
        const newComments = this.state.comments;
        newComments.push(comment);
        // 更新评论
        this.setState({
            comments: newComments
        });
        // 缓存评论
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }

    handleDelete(index) {
        console.log('===handleDelete===', index);
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({ comments });
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }

    render() {
        return (
            <div className="wrap">
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <hr />
                <CommentList
                    onDelete={this.handleDelete.bind(this)}
                    data={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;
