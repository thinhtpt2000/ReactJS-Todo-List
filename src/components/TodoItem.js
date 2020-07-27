import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">
                <p>Học JS</p>
                <p>Học Node.js</p>
                <p>Học React</p>
            </div>
        );
    }
}

export default TodoItem;