const userLocalStorageKey = 'soyummy-user';

export const getAccessToken = (): string => {
  return JSON.parse(localStorage.getItem(userLocalStorageKey) as string)?.accessToken;
};

export const getRefreshToken = (): string => {
  return JSON.parse(localStorage.getItem(userLocalStorageKey) as string)?.refreshToken;
};

export const updateTokens = (accessToken: string, refreshToken: string): void => {
  const data = JSON.parse(localStorage.getItem(userLocalStorageKey) as string);

  localStorage.setItem(
    userLocalStorageKey,
    JSON.stringify({ ...data, accessToken: accessToken, refreshToken: refreshToken })
  );
};
