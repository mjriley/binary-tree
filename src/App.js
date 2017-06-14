import React, { Component } from 'react';
import './App.css';

import Node from './Node';
import NodeComponent from './components/NodeComponent';

let node = new Node(7).addNode(2).addNode(10).addNode(1).addNode(8);

class App extends Component {
    render() {
        return (
            <NodeComponent
                value={node.value}
                left={node.left}
                right={node.right}
                depth={node.getDepth()}
            />
        );
    }
}

export default App;
