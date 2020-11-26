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

    // 接收 CommentInput 提交内容
    handleSubmitComment = (comment) => {
        // 校验是否填入内容
        if (!comment) { return };
        if (!comment.username) { return alert('请输入用户名') }
        if (!comment.content) { return alert('请输入评论内容') }
        // 更新评论列表数据
        this.setState({
            comments: [...this.state.comments, comment]
        });
    }

    render() {
        return (
            <div>
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <hr />
                <CommentList data={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;
