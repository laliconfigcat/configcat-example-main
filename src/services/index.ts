import * as configcat from 'configcat-js-ssr';

const configCatClient = configcat.getClient('configcat-sdk-1/tP3YCDSlzUeMVb36fHm4Fw/MehpaJ_x1UakimZRkRlvsA', configcat.PollingMode.AutoPoll, {pollIntervalSeconds: 1, logger: configcat.createConsoleLogger(configcat.LogLevel.Debug)});

export const getFlag = async (flag: string) =>
  await configCatClient.getValueAsync(flag, false);

export const getFlags = async () => {
  const response = await configCatClient.getAllValuesAsync();
  return response.map(({ settingKey, settingValue }) => ({ settingKey, settingValue }));
};
