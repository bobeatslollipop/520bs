import React, { Component } from 'react'
import RequestsItem from './RequestsItem'

export class Requests extends Component {
    render() {
        return this.props.requests.map( (request) =>
                <RequestsItem accu = {request.accu}
                              id = {request.id}
                              delRequest={this.props.delRequest}/>)
    }
}

export default Requests
