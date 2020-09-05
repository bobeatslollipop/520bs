import React, { Component } from 'react'

export class RequestsItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }



    render() {
        const id = this.props.id
        return (
            <div style = {this.getStyle()}>
                <div>Request From: {this.props.id}</div>
                <div>Accuracy: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     {this.props.accu}</div>
                <buttun style = {btnStyle}
                        onClick = {this.props.delRequest.bind(this,id)}>Delete</buttun>
                &nbsp;&nbsp;&nbsp;
                <buttun style = {btnStyleAccept}>Accept</buttun>
            </div>
        )
    }
}


const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  borderRadius: '50px',
  padding: "1px 8px",
  bordrRadius: "50%",
  cursor: "pointer",
  //float: "right"
}

const btnStyleAccept = {
  background: "#85cd3f",
  color: "#fff",
  borderRadius: '50px',
  padding: "1px 8px",
  bordrRadius: "50%",
  cursor: "pointer",
  //float: "right"
}
export default RequestsItem
