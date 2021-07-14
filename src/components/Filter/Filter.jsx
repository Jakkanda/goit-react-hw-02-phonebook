import React from 'react';

export function Filter({value, onChange}) {
  return <input type="text" value={value} onChange={onChange}></input>;
}
