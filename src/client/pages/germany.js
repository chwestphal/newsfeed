import React, { Component } from 'react';
import Articles from '../components/articles'

class Germany extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
      newspapers: ['spiegel', 'sueddeutsche' ,'neuesDeutschland']
    };
  }


  componentDidMount() {
    try {
      this.callApi()
    } catch(err) {
      console.log(err)
    }
  }

  async callApi() {
    for (const newspaper of this.state.newspapers) {
      try {
        const response = await fetch(`/api/germany/${newspaper}`)
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)
        this.setState({ feed: [...this.state.feed, body] })
      } catch(err) {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <Articles feed={this.state.feed}/>   
    );
  }
}

export default Germany;