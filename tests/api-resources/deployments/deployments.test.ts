// File generated from our OpenAPI spec by Stainless.

import Subhosting from 'subhosting';
import { Response } from 'node-fetch';

const subhosting = new Subhosting({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  test('delete', async () => {
    const responsePromise = subhosting.deployments.delete('abcde12vwxyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      subhosting.deployments.delete('abcde12vwxyz', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = subhosting.deployments.get('abcde12vwxyz');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      subhosting.deployments.get('abcde12vwxyz', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });

  test('redeploy', async () => {
    const responsePromise = subhosting.deployments.redeploy('abcde12vwxyz', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
