import cookie from 'react-cookies';

import env from '@/env';

export const urlSafe = (url: string): string => {
  return url
    .replace(/[^a-zA-Z0-9- ]/g, '')
    .replace(/\s\s+/g, ' ')
    .replace(/ /g, '-')
    .toLowerCase();
};

export const lockPageScroll = (): void => {
  const body = document.getElementById('body');
  body?.classList.add('lock-scroll');
};

export const unlockPageScroll = (): void => {
  const body = document.getElementById('body');
  body?.classList.remove('lock-scroll');
};

export const getQueryParam = (param: string): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};

export const getOriginalQueryParam = (name: string): string | number | null => {
  const results = new RegExp(`[?&]${name}=([^&#]*)`).exec(window.location.href);
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};

export const downloadURL = async (url: string, fileName: string): Promise<void> => {
  const image = await fetch(url);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement('a');
  link.href = imageURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadFile = (data: string, fileName: string): void => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.removeChild(link);
};

export const setCookie = (name: string, val: string | number | object): void => {
  cookie.save(name, val, { path: '/', domain: env.cookie.domain });
};

export const getCookie = (name: string): string => cookie.load(name);

export const removeCookie = (name: string): void => {
  cookie.remove(name, { path: '/', domain: env.cookie.domain });
};
