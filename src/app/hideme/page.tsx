import React from 'react';
import { notFound } from "next/navigation";

import { getFlag } from "../../services";

export default async function Toggle() {
  const visible = await getFlag('someflag');

  if (!visible) notFound();

  return (
    <h1>Toggle me with a flag</h1>
  )
}