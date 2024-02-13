// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import { isRequestOptions } from 'subhosting/core';
import * as AppLogsAPI from 'subhosting/resources/deployments/app-logs';

export class AppLogs extends APIResource {
  /**
   * Get execution logs of a deployment
   *
   * This API can return either past logs or real-time logs depending on the presence
   * of the since and until query parameters; if at least one of them is provided,
   * past logs are returned, otherwise real-time logs are returned.
   *
   * Also, the response format can be controlled by the `Accept` header; if
   * `application/x-ndjson` is specified, the response will be a stream of
   * newline-delimited JSON objects. Otherwise it will be a JSON array of objects.
   */
  get(
    deploymentId: string,
    query?: AppLogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppLogGetResponse>;
  get(deploymentId: string, options?: Core.RequestOptions): Core.APIPromise<AppLogGetResponse>;
  get(
    deploymentId: string,
    query: AppLogGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppLogGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(deploymentId, {}, query);
    }
    return this._client.get(`/deployments/${deploymentId}/app_logs`, { query, ...options });
  }
}

export type AppLogGetResponse = Array<AppLogGetResponse.AppLogGetResponseItem>;

export namespace AppLogGetResponse {
  export interface AppLogGetResponseItem {
    level: 'error' | 'warning' | 'info' | 'debug';

    message: string;

    region:
      | 'gcp-asia-east1'
      | 'gcp-asia-east2'
      | 'gcp-asia-northeast1'
      | 'gcp-asia-northeast2'
      | 'gcp-asia-northeast3'
      | 'gcp-asia-south1'
      | 'gcp-asia-south2'
      | 'gcp-asia-southeast1'
      | 'gcp-asia-southeast2'
      | 'gcp-australia-southeast1'
      | 'gcp-australia-southeast2'
      | 'gcp-europe-central2'
      | 'gcp-europe-north1'
      | 'gcp-europe-southwest1'
      | 'gcp-europe-west1'
      | 'gcp-europe-west2'
      | 'gcp-europe-west3'
      | 'gcp-europe-west4'
      | 'gcp-europe-west6'
      | 'gcp-europe-west8'
      | 'gcp-me-west1'
      | 'gcp-northamerica-northeast1'
      | 'gcp-northamerica-northeast2'
      | 'gcp-southamerica-east1'
      | 'gcp-southamerica-west1'
      | 'gcp-us-central1'
      | 'gcp-us-east1'
      | 'gcp-us-east4'
      | 'gcp-us-east5'
      | 'gcp-us-south1'
      | 'gcp-us-west1'
      | 'gcp-us-west2'
      | 'gcp-us-west3'
      | 'gcp-us-west4';

    /**
     * Log timestamp
     */
    time: string;
  }
}

export interface AppLogGetParams {
  /**
   * Opaque value that represents the cursor of the last log returned in the previous
   * request.
   *
   * This is only effective for the past log mode.
   */
  cursor?: string | null;

  /**
   * Log level(s) to filter logs by.
   *
   * Defaults to all levels (i.e. no filter applied).
   *
   * Multiple levels can be specified using comma-separated format.
   */
  level?: 'error' | 'warning' | 'info' | 'debug';

  /**
   * Maximum number of logs to return in one request.
   *
   * This is only effective for the past log mode.
   */
  limit?: number | null;

  /**
   * Sort order, either `asc` or `desc`. Defaults to `desc`.
   *
   * For backward compatibility, `timeAsc` and `timeDesc` are also supported, but
   * deprecated.
   *
   * This is only effective for the past log mode.
   */
  order?: string | null;

  /**
   * Text to search for in log message.
   */
  q?: string | null;

  /**
   * Region(s) to filter logs by.
   *
   * Defaults to all regions (i.e. no filter applied).
   *
   * Multiple regions can be specified using comma-separated format.
   */
  region?:
    | 'gcp-asia-east1'
    | 'gcp-asia-east2'
    | 'gcp-asia-northeast1'
    | 'gcp-asia-northeast2'
    | 'gcp-asia-northeast3'
    | 'gcp-asia-south1'
    | 'gcp-asia-south2'
    | 'gcp-asia-southeast1'
    | 'gcp-asia-southeast2'
    | 'gcp-australia-southeast1'
    | 'gcp-australia-southeast2'
    | 'gcp-europe-central2'
    | 'gcp-europe-north1'
    | 'gcp-europe-southwest1'
    | 'gcp-europe-west1'
    | 'gcp-europe-west2'
    | 'gcp-europe-west3'
    | 'gcp-europe-west4'
    | 'gcp-europe-west6'
    | 'gcp-europe-west8'
    | 'gcp-me-west1'
    | 'gcp-northamerica-northeast1'
    | 'gcp-northamerica-northeast2'
    | 'gcp-southamerica-east1'
    | 'gcp-southamerica-west1'
    | 'gcp-us-central1'
    | 'gcp-us-east1'
    | 'gcp-us-east4'
    | 'gcp-us-east5'
    | 'gcp-us-south1'
    | 'gcp-us-west1'
    | 'gcp-us-west2'
    | 'gcp-us-west3'
    | 'gcp-us-west4';

  /**
   * Start time of the time range to filter logs by.
   *
   * Defaults to the Unix Epoch (though the log retention period is 2 weeks as of
   * now).
   *
   * If neither `since` nor `until` is specified, real-time logs are returned.
   */
  since?: string | null;

  /**
   * The field to sort by. Currently only `time` is supported.
   *
   * This is only effective for the past log mode.
   */
  sort?: string | null;

  /**
   * End time of the time range to filter logs by.
   *
   * Defaults to the current time.
   *
   * If neither `since` nor `until` is specified, real-time logs are returned.
   */
  until?: string | null;
}

export namespace AppLogs {
  export import AppLogGetResponse = AppLogsAPI.AppLogGetResponse;
  export import AppLogGetParams = AppLogsAPI.AppLogGetParams;
}
