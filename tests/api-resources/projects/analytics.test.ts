// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Subhosting from 'subhosting';
import { Response } from 'node-fetch';

const subhosting = new Subhosting({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  test('get: only required params', async () => {
    const responsePromise = subhosting.projects.analytics.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      since: '2019-12-27T18:11:19.117Z',
      until: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await subhosting.projects.analytics.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      since: '2019-12-27T18:11:19.117Z',
      until: '2019-12-27T18:11:19.117Z',
    });
  });
});
