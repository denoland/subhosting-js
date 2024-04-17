// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Subhosting from 'subhosting';
import { Response } from 'node-fetch';

const subhosting = new Subhosting({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource appLogs', () => {
  test('get', async () => {
    const responsePromise = subhosting.deployments.appLogs.get('string');
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
      subhosting.deployments.appLogs.get('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      subhosting.deployments.appLogs.get(
        'string',
        {
          cursor: 'string',
          level: 'error',
          limit: 1,
          order: 'string',
          q: 'string',
          region: 'gcp-asia-east1',
          since: '2019-12-27T18:11:19.117Z',
          sort: 'string',
          until: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });
});
