import React from 'react';


class CommentItem extends React.Component {

    static defaultProps = {
        comment: {}
    }

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

    updateTimeString() {
        const { createdTime } = this.props.comment;
        const duration = (+Date.now() - createdTime) / 1000;
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        });
    }

    render() {
        // console.log('===Comment Item===', this.props);
        const { username, content } = this.props.comment;
        return (
            <div className="list-item">
                <div className="list-username">{username}</div>
                <div className="list-content">{content}</div>
                <div className="list-time">{this.state.timeString}</div>
            </div>
        )
    }
}

export default CommentItem;
