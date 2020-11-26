import React from 'react';


class CommentItem extends React.Component {

    // static defaultProps = {
    //     comment: PropTypes.object.isRequired,
    //     onDelete: PropTypes.func,
    //     index: PropTypes.number
    // }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this.updateTimeString();
        // 每隔5秒更新时间
        this.timer = setInterval(this.updateTimeString.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    updateTimeString() {
        const { createdTime } = this.props.comment;
        const duration = (+Date.now() - createdTime) / 1000;
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        });
    }

    handleDelete() {
        this.props.onDelete && this.props.onDelete(this.props.index);
    }

    render() {
        // console.log('===Comment Item===', this.props);
        const { username, content } = this.props.comment;
        return (
            <div className="list-item">
                <div className="list-username">{username}</div>
                <div className="list-content">{content}</div>
                <div className="list-time">{this.state.timeString}</div>
                <div className="list-del" onClick={this.handleDelete.bind(this)}>删除</div>
            </div>
        )
    }
}

export default CommentItem;
