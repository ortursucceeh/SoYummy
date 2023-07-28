const userLocaleStorageKey = 'soyummy-user';

export function getAccessToken() {
  return JSON.parse(localStorage.getItem(userLocaleStorageKey))?.accessToken;
}

export function getRefreshToken() {
  return JSON.parse(localStorage.getItem(userLocaleStorageKey))?.refreshToken;
}

export function updateTokens(accessToken, refreshToken) {
  const data = JSON.parse(localStorage.getItem(userLocaleStorageKey));

  localStorage.setItem(
    userLocaleStorageKey,
    JSON.stringify({ ...data, accessToken: accessToken, refreshToken: refreshToken })
  );
}
