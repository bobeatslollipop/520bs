import React, { Component } from 'react'

export class MatchsItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }

    render() {
        const id =  this.props.id
        const per = this.props.per
        return (
            <div style = {this.getStyle()}>
                <div>Candidate: {this.props.id}</div>
                <div>Match: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {this.props.per}</div>
                <button>Request</button>
            </div>
        )
    }
}

export default MatchsItem
