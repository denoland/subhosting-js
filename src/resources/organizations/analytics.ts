// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as AnalyticsAPI from 'subhosting/resources/organizations/analytics';
import * as Shared from 'subhosting/resources/shared';

export class Analytics extends APIResource {
  /**
   * Retrieve organization analytics
   *
   * This API returns analytics for the specified organization. The analytics are
   * returned as time series data in 15 minute intervals, with the `time` field
   * representing the start of the interval.
   */
  get(
    organizationId: string,
    query: AnalyticsGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Analytics> {
    return this._client.get(`/organizations/${organizationId}/analytics`, { query, ...options });
  }
}

export interface AnalyticsGetParams {
  /**
   * Start of the time range in RFC3339 format.
   *
   * Defaults to 24 hours ago.
   *
   * Note that the maximum allowed time range is 24 hours.
   */
  since: string;

  /**
   * End of the time range in RFC3339 format.
   *
   * Defaults to the current time.
   *
   * Note that the maximum allowed time range is 24 hours.
   */
  until: string;
}

export namespace Analytics {
  export import AnalyticsGetParams = AnalyticsAPI.AnalyticsGetParams;
}
