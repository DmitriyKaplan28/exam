import React from 'react';

type SetCounterRangeType = {
    //count: number
}

export const SetCounterRange = (props: SetCounterRangeType) => {
    return (
        <div className='buttonBlock'>
            <div><input /></div>
            <div><input /></div>
        </div>
    );
}