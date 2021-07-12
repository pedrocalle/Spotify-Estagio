import React, { Component } from 'react';

export default class FilterRange extends Component {
    state = {
        loading: true,
        filter: null
    }

    async componentDidMount() {
        const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({filter: data.filters[3], loading: false })
    }

    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.filter) {
          return <div>filter not working</div>;
        }
    
        return (
            <div>
                <input placeholder="20" id="range" type="number" min={this.state.filter.validation.min} max={this.state.filter.validation.max}></input>
                <script></script>
            </div>
        )
    }
}