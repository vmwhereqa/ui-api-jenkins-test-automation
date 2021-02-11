import request from 'sync-request';
import { logMessage } from '../logger';

const defaultHeaders = {
  Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  'Content-Type': 'application/json',
};

const doRequest = (method, url, overrideHeaders = {}, body) => {
  const headers = {
    ...defaultHeaders,
    ...overrideHeaders,
  };

  logMessage({
    url,
    body,
    headers,
    method,
  });
  try {
    return request(method, url, {
      json: body,
      headers,
      retry: true,
    });
  } catch (error) {
    logMessage(error);
    throw new Error(error);
  }
};

export const doGet = (url, overrideHeaders) => doRequest('GET', url, overrideHeaders);

export const doDelete = (url, overrideHeaders) => doRequest('DELETE', url, overrideHeaders);

export const doPost = (url, body, overrideHeaders) => doRequest('POST', url, overrideHeaders, body);

export const doUpdate = (url, body, overrideHeaders) => doRequest('PUT', url, overrideHeaders, body);

export const doPatch = (url, body, overrideHeaders) => doRequest('PATCH', url, overrideHeaders, body);
