import React from 'react';


class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
        }
    }


    render(){
        return(
            <div>Un comentario</div>
        )
    }
}

export default Comment;