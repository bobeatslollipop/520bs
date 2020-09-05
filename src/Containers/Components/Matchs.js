import React, { Component } from 'react'
import MatchsItem from './MatchsItem'

export class Matchs extends Component {
    render() {
        return this.props.results.map(
            result => <MatchsItem id ={result.id}
                                  per = {result.per} 
                                  refresh = {this.props.refresh}/>
        )
    }
}

export default Matchs
