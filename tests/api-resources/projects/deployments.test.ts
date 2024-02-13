// File generated from our OpenAPI spec by Stainless.

import Subhosting from 'subhosting';
import { Response } from 'node-fetch';

const subhosting = new Subhosting({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  test('create: only required params', async () => {
    const responsePromise = subhosting.projects.deployments.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      assets: {
        'main.ts': { kind: 'file' },
        'images/cat1.png': { kind: 'file' },
        'images/cat2.png': { kind: 'file' },
        'symlink.png': { target: 'images/cat1.png', kind: 'symlink' },
      },
      entryPointUrl: 'main.ts',
      envVars: { MY_ENV: 'hey' },
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
    const response = await subhosting.projects.deployments.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      assets: {
        'main.ts': {
          content: 'Deno.serve((req: Request) => new Response("Hello World"));\n',
          encoding: 'utf-8',
          gitSha1: 'string',
          kind: 'file',
        },
        'images/cat1.png': {
          content: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk',
          encoding: 'base64',
          gitSha1: 'string',
          kind: 'file',
        },
        'images/cat2.png': {
          content: 'string',
          encoding: 'utf-8',
          gitSha1: '5c4f8729e5c30a91a890e24d7285e89f418c637b',
          kind: 'file',
        },
        'symlink.png': { target: 'images/cat1.png', kind: 'symlink' },
      },
      entryPointUrl: 'main.ts',
      envVars: { MY_ENV: 'hey' },
      compilerOptions: {
        jsx: 'string',
        jsxFactory: 'string',
        jsxFragmentFactory: 'string',
        jsxImportSource: 'string',
      },
      databases: { default: '5b484959-cba2-482d-95ab-ba592784af80' },
      description: 'My first deployment',
      importMapUrl: null,
      lockFileUrl: null,
    });
  });

  test('list', async () => {
    const responsePromise = subhosting.projects.deployments.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      subhosting.projects.deployments.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      subhosting.projects.deployments.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 1, order: 'string', page: 1, q: 'string', sort: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Subhosting.NotFoundError);
  });
});
