import React from 'react';
import CommentItem from './CommentItem';

class CommentList extends React.Component {

    static defaultProps = {
        data: []
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map((item, index) => {
                        return <CommentItem key={index} comment={item} />;
                    })
                }

            </div>
        )
    }
}

export default CommentList;
