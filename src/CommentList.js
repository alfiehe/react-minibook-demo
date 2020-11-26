import React from 'react';
import CommentItem from './CommentItem';

class CommentList extends React.Component {

    static defaultProps = {
        data: []
    }

    handleDelete(index) {
        this.props.onDelete && this.props.onDelete(index);
    }

    render() {
        return (
            <div className="list">
                {
                    this.props.data.map((item, index) => {
                        return <CommentItem
                            key={index}
                            comment={item}
                            index={index}
                            onDelete={this.handleDelete.bind(this)}
                        />;
                    })
                }

            </div>
        )
    }
}

export default CommentList;
