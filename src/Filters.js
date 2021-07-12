/* eslint-disable no-sequences */
import React from 'react';

export default class FilterDropDown extends React.Component {
    

    state = {
        loading: true,
        filter: null
    }

    async componentDidMount() {
        const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({filter: data.filters[0], filter1: data.filters[1], filter3: data.filters[3], loading: false })
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
            <select>
            <option selected>No filter</option>
            <optgroup label="Locale"></optgroup>
            <option value={this.state.filter.values[0].value}>{this.state.filter.values[0].name}</option>
            <option value={this.state.filter.values[1].value}>{this.state.filter.values[1].name}</option>
            <option value={this.state.filter.values[2].value}>{this.state.filter.values[2].name}</option>
            <option value={this.state.filter.values[3].value}>{this.state.filter.values[3].name}</option>
            <option value={this.state.filter.values[4].value}>{this.state.filter.values[4].name}</option>
            <option value={this.state.filter.values[5].value}>{this.state.filter.values[5].name}</option>
            <optgroup label="País"></optgroup>
            <option value={this.state.filter1.values[0].value}>{this.state.filter1.values[0].name}</option>
            <option value={this.state.filter1.values[1].value}>{this.state.filter1.values[1].name}</option>
            <option value={this.state.filter1.values[2].value}>{this.state.filter1.values[2].name}</option>
            <option value={this.state.filter1.values[3].value}>{this.state.filter1.values[3].name}</option>
            <option value={this.state.filter1.values[4].value}>{this.state.filter1.values[4].name}</option>
            <option value={this.state.filter1.values[5].value}>{this.state.filter1.values[5].name}</option>
            </select>
          </div>
        );
      }
}