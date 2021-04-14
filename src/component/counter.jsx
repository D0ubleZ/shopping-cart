import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props);

        // this.state = {
        //     count: this.props.counter.value,
        //     imageUrl:'https://picsum.photos/200',
        //     tags: ['tag1','tag2','tag3']
        // };

        // this.handleIncrement = this.handleIncrement.bind(this);
    }

    style = {
        fontSize : 15,
        fontWeight : "bold"
    }

    // handleIncrement(){
    //     this.setState({count: this.state.count + 1})
    // }

    render() { 
        return (
        <div>
            {/* <img src = {this.state.imageUrl} alt = ""/> */}
            <span style = {this.style} className = {this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick = {() => this.props.onIncrement(this.props.counter)} 
                    className = "btn btn-secondary btn-sm">Increment</button>
            <button 
                onClick = {() => this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>
            {/* <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul> */}
        </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2";
        classes += this.props.counter.value === 0 ? " badge-warning" : " badge-primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        const x = <h1>Zero</h1>;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;