import React from 'react';

const NODE_WIDTH = 40;

export default function NodeComponent({ value, left, right, depth }) {
    if (!value) {
        return (
            <div
                style={{
                    display: 'inline-block',
                    width: NODE_WIDTH * Math.pow(2, depth - 1),
                    textAlign: 'center'
                }}
            >
                <div
                    style={{
                        display: 'inline-block',
                        width: NODE_WIDTH
                    }}
                />
            </div>
        );
    }

    return (
        <div
            style={{
                width: NODE_WIDTH * Math.pow(2, depth - 1),
                display: 'inline-block',
                textAlign: 'center',
                verticalAlign: 'text-top'
            }}
        >
            <div
                style={{
                    display: 'inline-block',
                    width: NODE_WIDTH,
                    background: 'aqua'
                }}
            >
                {value}
            </div>
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
        </div>
    );
}
