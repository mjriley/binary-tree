import React, { Component } from 'react';
import './App.css';

import Node from './Node';
import NodeRow from './components/NodeRow';
import NodeComponent from './components/NodeComponent';
import _ from 'lodash';

let node = new Node(3).addNode(2).addNode(4).addNode(1).addNode(5);

function getTreeDepth(tree) {
    if (!tree || !tree.value) {
        return 0;
    }

    return 1 + Math.max(getTreeDepth(tree.left), getTreeDepth(tree.right));
}

console.log('tree depth is: ', getTreeDepth(node));

function extractRows(sources) {
    if (!sources) {
        return [];
    }

    let thisRow = sources.map(node => (node ? node.value : 'x'));
    let nextSources = _.flatMap(
        sources,
        node => (node ? [node.left, node.right] : [null, null])
    );
    let flattened = _.compact(nextSources);

    if (!flattened.length) {
        return [];
    }

    return [thisRow, ...extractRows(nextSources)];
}

class App extends Component {
    render() {
        return (
            <NodeComponent
                value={node.value}
                left={node.left}
                right={node.right}
                depth={getTreeDepth(node)}
            />
        );
    }
}

export default App;
