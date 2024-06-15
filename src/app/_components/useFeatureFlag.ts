'use client';

import { useContext } from 'react';
import { FeatureFlagContext } from "./FeatureFlagContext";

export const useFeatureFlag = (flag: string) => {
  const flags = useContext(FeatureFlagContext);
  const foundFlag = flags.find((featureFlag: { settingKey: any; }) => featureFlag.settingKey === flag);

  return foundFlag?.settingValue
}
