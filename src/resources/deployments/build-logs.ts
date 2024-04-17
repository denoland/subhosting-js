// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as BuildLogsAPI from 'subhosting/resources/deployments/build-logs';

export class BuildLogs extends APIResource {
  /**
   * Get build logs of a deployment
   *
   * This API returns build logs of the specified deployment. It's useful to watch
   * the build progress, figure out what went wrong in case of a build failure, and
   * so on.
   *
   * The response format can be controlled by the `Accept` header; if
   * `application/x-ndjson` is specified, the response will be a stream of
   * newline-delimited JSON objects. Otherwise it will be a JSON array of objects.
   */
  get(deploymentId: string, options?: Core.RequestOptions): Core.APIPromise<BuildLogGetResponse> {
    return this._client.get(`/deployments/${deploymentId}/build_logs`, options);
  }
}

export type BuildLogGetResponse = Array<BuildLogGetResponse.BuildLogGetResponseItem>;

export namespace BuildLogGetResponse {
  export interface BuildLogGetResponseItem {
    level: string;

    message: string;
  }
}

export namespace BuildLogs {
  export import BuildLogGetResponse = BuildLogsAPI.BuildLogGetResponse;
}
