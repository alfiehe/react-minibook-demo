import React from 'react';


class CommentItem extends React.Component {

    static defaultProps = {
        comment: {}
    }

    render() {
        const { username, content } = this.props.comment;
        return (
            <div className="list-item">
                <div className="list-username">{username}</div>
                <div className="list-content">{content}</div>
            </div>
        )
    }
}

export default CommentItem;
