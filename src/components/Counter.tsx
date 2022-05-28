import React from 'react';

type CountType = {
    count: number | string
}

export const Counter = (props: CountType) => {
    return (
        <div>{props.count}</div>
    );
}