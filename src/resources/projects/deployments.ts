// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import { isRequestOptions } from 'subhosting/core';
import * as DeploymentsAPI from 'subhosting/resources/projects/deployments';
import * as Shared from 'subhosting/resources/shared';

export class Deployments extends APIResource {
  /**
   * Create a deployment
   *
   * This API initiates a build process for a new deployment.
   *
   * Note that this process is asynchronous; the completion of this API doesn't mean
   * the deployment is ready. In order to keep track of the progress of the build,
   * call the "Get build logs of a deployment" API or the "Get deployment details"
   * API.
   */
  create(
    projectId: string,
    body: DeploymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Deployment> {
    return this._client.post(`/projects/${projectId}/deployments`, { body, ...options });
  }

  /**
   * List deployments of a project
   *
   * This API returns a list of deployments belonging to the specified project in a
   * pagenated manner.
   *
   * The URLs for the next, previous, first, and last page are returned in the `Link`
   * header of the response, if any.
   */
  list(
    projectId: string,
    query?: DeploymentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentListResponse>;
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<DeploymentListResponse>;
  list(
    projectId: string,
    query: DeploymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeploymentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, {}, query);
    }
    return this._client.get(`/projects/${projectId}/deployments`, { query, ...options });
  }
}

export type DeploymentListResponse = Array<Shared.Deployment>;

export interface DeploymentCreateParams {
  /**
   * A map whose key represents a file path, and the value is an asset that composes
   * the deployment.
   *
   * Each asset is one of the following three kinds:
   *
   * 1. A file with content data (which is UTF-8 for text, or base64 for binary)
   * 2. A file with a hash
   * 3. A symbolic link to another asset
   *
   * Assets that were uploaded in some of the previous deployments don't need to be
   * uploaded again. In this case, in order to identify the asset, just provide the
   * SHA-1 hash of the content.
   */
  assets: Record<string, DeploymentCreateParams.File | DeploymentCreateParams.Symlink>;

  /**
   * An URL of the entry point of the application. This is the file that will be
   * executed when the deployment is invoked.
   */
  entryPointUrl: string;

  /**
   * A dictionary of environment variables to be set in the runtime environment of
   * the deployment.
   */
  envVars: Record<string, string>;

  /**
   * Compiler options to be used when building the deployment.
   *
   * If `null` is given, Deno's config file (i.e. `deno.json` or `deno.jsonc`) will
   * be auto-discovered, which may contain a `compilerOptions` field. If found, that
   * compiler options will be applied.
   *
   * If an empty object `{}` is given,
   * [the default compiler options](https://docs.deno.com/runtime/manual/advanced/typescript/configuration#how-deno-uses-a-configuration-file)
   * will be applied.
   */
  compilerOptions?: DeploymentCreateParams.CompilerOptions;

  /**
   * KV database ID mappings to associate with the deployment.
   *
   * A key represents a KV database name (e.g. `"default"`), and a value is a KV
   * database ID.
   *
   * Currently, only `"default"` database is supported. If any other database name is
   * specified, that will be rejected.
   *
   * If not provided, the deployment will be created with no KV database attached.
   */
  databases?: Record<string, string> | null;

  /**
   * A description of the created deployment. If not provided, an empty string will
   * be set.
   */
  description?: string | null;

  /**
   * An URL of the import map file.
   *
   * If `null` is given, import map auto-discovery logic will be performed, where it
   * looks for Deno's config file (i.e. `deno.json` or `deno.jsonc`) which may
   * contain an embedded import map or a path to an import map file. If found, that
   * import map will be used.
   *
   * If an empty string is given, no import map will be used.
   */
  importMapUrl?: string | null;

  /**
   * An URL of the lock file.
   *
   * If `null` is given, lock file auto-discovery logic will be performed, where it
   * looks for Deno's config file (i.e. `deno.json` or `deno.jsonc`) which may
   * contain a path to a lock file or boolean value, such as `"lock": false` or
   * `"lock": "my-lock.lock"`. If a config file is found, the semantics of the lock
   * field is the same as the Deno CLI, so refer to
   * [the CLI doc page](https://docs.deno.com/runtime/manual/basics/modules/integrity_checking#auto-generated-lockfile).
   *
   * If an empty string is given, no lock file will be used.
   */
  lockFileUrl?: string | null;
}

export namespace DeploymentCreateParams {
  export interface File {
    kind: 'file';

    content?: string;

    encoding?: 'utf-8' | 'base64';

    gitSha1?: string;
  }

  export interface Symlink {
    kind: 'symlink';

    target: string;
  }

  /**
   * Compiler options to be used when building the deployment.
   *
   * If `null` is given, Deno's config file (i.e. `deno.json` or `deno.jsonc`) will
   * be auto-discovered, which may contain a `compilerOptions` field. If found, that
   * compiler options will be applied.
   *
   * If an empty object `{}` is given,
   * [the default compiler options](https://docs.deno.com/runtime/manual/advanced/typescript/configuration#how-deno-uses-a-configuration-file)
   * will be applied.
   */
  export interface CompilerOptions {
    jsx?: string | null;

    jsxFactory?: string | null;

    jsxFragmentFactory?: string | null;

    jsxImportSource?: string | null;
  }
}

export interface DeploymentListParams {
  /**
   * The maximum number of items to return per page.
   */
  limit?: number | null;

  /**
   * Sort order, either `asc` or `desc`. Defaults to `asc`.
   */
  order?: string | null;

  /**
   * The page number to return.
   */
  page?: number | null;

  /**
   * Query by deployment ID
   */
  q?: string | null;

  /**
   * The field to sort by, either `id` or `created_at`. Defaults to `created_at`.
   */
  sort?: string | null;
}

export namespace Deployments {
  export import DeploymentListResponse = DeploymentsAPI.DeploymentListResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentListParams = DeploymentsAPI.DeploymentListParams;
}
