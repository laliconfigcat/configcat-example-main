import * as configcat from 'configcat-js-ssr';

export const fetchCache = 'force-no-store';
export const dynamic = "force-dynamic";

const configCatClient = configcat.getClient('configcat-sdk-1/tP3YCDSlzUeMVb36fHm4Fw/MehpaJ_x1UakimZRkRlvsA', configcat.PollingMode.AutoPoll,
  {
    pollIntervalSeconds: 2,
    logger: configcat.createConsoleLogger(configcat.LogLevel.Debug)
  });

export const getFlag = async (flag: string) =>{
  await configCatClient.getValueAsync(flag, false);
  configCatClient.forceRefreshAsync();
}

export const getFlags = async () => {
  configCatClient.forceRefreshAsync();
  const response = await configCatClient.getAllValuesAsync();
  return response.map(({ settingKey, settingValue }) => ({ settingKey, settingValue }));
};
