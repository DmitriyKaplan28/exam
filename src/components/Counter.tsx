import React from 'react';

type CountType = {
    count: number
}

export const Counter = (props: CountType) => {
    return (
        <div>
            <div>{props.count}</div>
        </div>
    );
}