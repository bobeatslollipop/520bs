import React, { Component} from 'react'
import Modal from 'react-modal'

export class MatchsItem extends Component {
    
    state = {
        isOpen: false
    }

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
                <button onClick = {()=>this.setState({isOpen:true})}>Request</button>
                <Modal isOpen={this.state.isOpen} onRequestClose={() => this.setState({isOpen: false})}>
                    <h1>Oops! Nothing here but chicken.</h1>
                    <button onClick = {()=>this.setState({isOpen: false})}>Close</button>
                </Modal>
            </div>
        )
    }
}


export default MatchsItem
