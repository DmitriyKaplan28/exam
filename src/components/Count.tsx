import React from 'react';

type CountType = {
    count: number
}

export const Count = (props: CountType) => {
  return (
      <div>{props.count}</div>
  );
}