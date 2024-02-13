// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import { isRequestOptions } from 'subhosting/core';
import * as DatabasesAPI from 'subhosting/resources/organizations/databases';
import * as Shared from 'subhosting/resources/shared';

export class Databases extends APIResource {
  /**
   * Create a KV database
   *
   * This API allows you to create a new KV database under the specified
   * organization. You will then be able to associate the created KV database with a
   * new deployment by specifying the KV database ID in the "Create a deployment" API
   * call.
   */
  create(
    organizationId: string,
    body: DatabaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.KvDatabase> {
    return this._client.post(`/organizations/${organizationId}/databases`, { body, ...options });
  }

  /**
   * List KV databases of an organization
   *
   * This API returns a list of KV databases belonging to the specified organization
   * in a pagenated manner. The URLs for the next, previous, first, and last page are
   * returned in the `Link` header of the response, if any.
   */
  list(
    organizationId: string,
    query?: DatabaseListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<DatabaseListResponse>;
  list(
    organizationId: string,
    query: DatabaseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/organizations/${organizationId}/databases`, { query, ...options });
  }
}

export type DatabaseListResponse = Array<Shared.KvDatabase>;

export interface DatabaseCreateParams {
  /**
   * The description of the KV database. If this is `null`, an empty string will be
   * set.
   */
  description?: string | null;
}

export interface DatabaseListParams {
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
   * Query by KV database ID
   */
  q?: string | null;

  /**
   * The field to sort by. Currently only `created_at` is supported.
   */
  sort?: string | null;
}

export namespace Databases {
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
}
