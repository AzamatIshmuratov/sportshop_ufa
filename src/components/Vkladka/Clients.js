import React, { Component } from 'react'
import Table from './Table';

export default class Clients extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('zakazs'));
        console.log(data);
        if (!data) return;
        this.setState({data: data})
        console.log(this.state.data);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.length
                    ? <Table data={this.state.data} />
                    : null
                }
            </React.Fragment>



        )
    }
}
