import React from 'react';

const NODE_WIDTH = 40;

function ValueDisplay({ value }) {
    if (!value) {
        return null;
    }

    return (
        <div className="nodeValue" style={{ width: NODE_WIDTH }}>
            {value}
        </div>
    );
}

function ChildDisplay({ value, left, right, depth }) {
    if (!value) {
        return null;
    }

    return (
        <div>
            <NodeComponent
                value={left.value}
                left={left.left}
                right={left.right}
                depth={depth - 1}
            />
            <NodeComponent
                value={right.value}
                left={right.left}
                right={right.right}
                depth={depth - 1}
            />
        </div>
    );
}

export default function NodeComponent({ value, left, right, depth }) {
    const width = NODE_WIDTH * Math.pow(2, depth - 1);

    return (
        <div className="nodeContainer" style={{ width: width }}>
            <ValueDisplay value={value} />
            <ChildDisplay
                value={value}
                left={left}
                right={right}
                depth={depth}
            />
        </div>
    );
}
