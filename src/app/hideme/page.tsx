import React from 'react';

import { getFlag } from "../../services";

export default async function Toggle() {
  const visible = getFlag('isAwesomeFeatureEnabled');

  if (!visible)
  return (
    <h1>Toggle me with a flag - not visible</h1>
  )
  else{
    return (
      <h1>Toggle me with a flag - visible</h1>
    ) 
  }
}