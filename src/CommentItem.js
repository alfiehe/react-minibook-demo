import React from 'react';


class CommentItem extends React.Component {

    static defaultProps = {
        comment: {}
    }

    render() {
        const { username, content } = this.props.comment;
        return (
            <div>
                <h4>用户名：<em>{username}</em></h4>
                <div>内容：<strong>{content}</strong></div>
            </div>
        )
    }
}

export default CommentItem;
