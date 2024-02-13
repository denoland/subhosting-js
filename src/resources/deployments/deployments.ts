// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as DeploymentsAPI from 'subhosting/resources/deployments/deployments';
import * as Shared from 'subhosting/resources/shared';
import * as AppLogsAPI from 'subhosting/resources/deployments/app-logs';
import * as BuildLogsAPI from 'subhosting/resources/deployments/build-logs';

export class Deployments extends APIResource {
  buildLogs: BuildLogsAPI.BuildLogs = new BuildLogsAPI.BuildLogs(this._client);
  appLogs: AppLogsAPI.AppLogs = new AppLogsAPI.AppLogs(this._client);

  /**
   * Delete a deployment
   */
  delete(deploymentId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/deployments/${deploymentId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get deployment details
   */
  get(deploymentId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Deployment> {
    return this._client.get(`/deployments/${deploymentId}`, options);
  }

  /**
   * Redeploy a deployment with different configuration
   */
  redeploy(
    deploymentId: string,
    body: DeploymentRedeployParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Deployment> {
    return this._client.post(`/deployments/${deploymentId}/redeploy`, { body, ...options });
  }
}

export interface DeploymentRedeployParams {
  /**
   * KV database ID mappings to associate with the deployment.
   *
   * A key represents a KV database name (e.g. `"default"`), and a value is a KV
   * database ID.
   *
   * Currently, only `"default"` database is supported. If any other database name is
   * specified, that will be rejected.
   *
   * The provided KV database mappings will be _merged_ with the existing one, just
   * like `env_vars`.
   *
   * If `databases` itself is not provided, no update will happen to the existing KV
   * database mappings.
   */
  databases?: Record<string, string | null> | null;

  /**
   * A description of the created deployment. If not provided, no update will happen
   * to the description.
   */
  description?: string | null;

  /**
   * A dictionary of environment variables to be set in the runtime environment of
   * the deployment.
   *
   * The provided environment variables will be _merged_ with the existing one. For
   * example, if the existing environment variables are:
   *
   * ```json
   * {
   * "a": "alice",
   * "b": "bob"
   * "c": "charlie"
   * }
   * ```
   *
   * and you pass the following environment variables in your redeploy request:
   *
   * ```json
   * {
   *   "a": "alice2",
   *   "b": null,
   *   "d": "david"
   * }
   * ```
   *
   * then the result will be:
   *
   * ```json
   * {
   *   "a": "alice2",
   *   "c": "charlie",
   *   "d": "david"
   * }
   * ```
   *
   * If `env_vars` itself is not provided, no update will happen to the existing
   * environment variables.
   */
  env_vars?: Record<string, string | null> | null;
}

export namespace Deployments {
  export import DeploymentRedeployParams = DeploymentsAPI.DeploymentRedeployParams;
  export import BuildLogs = BuildLogsAPI.BuildLogs;
  export import BuildLogGetResponse = BuildLogsAPI.BuildLogGetResponse;
  export import AppLogs = AppLogsAPI.AppLogs;
  export import AppLogGetResponse = AppLogsAPI.AppLogGetResponse;
  export import AppLogGetParams = AppLogsAPI.AppLogGetParams;
}
