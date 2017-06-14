import React from 'react';
import _ from 'lodash';

export default function NodeRow({ rows }) {
    if (!rows.length) {
        return null;
    }

    let currentRow = rows[0].map((node, index) =>
        <div
            style={{ display: 'inline-block', width: 60, background: 'blue' }}
            key={index}
        >
            {node || 'x'}
        </div>
    );

    return (
        <div style={{ textAlign: 'center' }}>
            {currentRow} <NodeRow rows={_.tail(rows)} />
        </div>
    );
}
