// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as AnalyticsAPI from 'subhosting/resources/projects/analytics';
import * as Shared from 'subhosting/resources/shared';

export class Analytics extends APIResource {
  /**
   * Retrieve project analytics
   *
   * This API returns analytics for the specified project. The analytics are returned
   * as time series data in 15 minute intervals, with the `time` field representing
   * the start of the interval.
   */
  get(
    projectId: string,
    query: AnalyticsGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Analytics> {
    return this._client.get(`/projects/${projectId}/analytics`, { query, ...options });
  }
}

export interface AnalyticsGetParams {
  /**
   * Start of the time range in RFC3339 format.
   *
   * Defaults to 24 hours ago.
   */
  since: string;

  /**
   * End of the time range in RFC3339 format.
   *
   * Defaults to the current time.
   */
  until: string;
}

export namespace Analytics {
  export import AnalyticsGetParams = AnalyticsAPI.AnalyticsGetParams;
}
