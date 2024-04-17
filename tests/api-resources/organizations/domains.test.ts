// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Subhosting from 'subhosting';
import { Response } from 'node-fetch';

const subhosting = new Subhosting({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domains', () => {
  test('create: only required params', async () => {
    const responsePromise = subhosting.organizations.domains.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain: 'foo.example.com',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await subhosting.organizations.domains.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      domain: 'foo.example.com',
    });
  });

  test('list', async () => {
    const responsePromise = subhosting.organizations.domains.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      subhosting.organizations.domains.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      subhosting.organizations.domains.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 1, order: 'string', page: 1, q: 'string', sort: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });
});
