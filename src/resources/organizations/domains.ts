// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import { isRequestOptions } from 'subhosting/core';
import * as DomainsAPI from 'subhosting/resources/organizations/domains';
import * as Shared from 'subhosting/resources/shared';

export class Domains extends APIResource {
  /**
   * Add a domain to an organization
   *
   * This API allows you to add a new domain to the specified organization.
   *
   * Before use, added domain needs to be verified, and also TLS certificates for the
   * domain need to be provisioned.
   */
  create(
    organizationId: string,
    body: DomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Domain> {
    return this._client.post(`/organizations/${organizationId}/domains`, { body, ...options });
  }

  /**
   * List domains of an organization
   *
   * This API returns a list of domains belonging to the specified organization in a
   * pagenated manner.
   *
   * The URLs for the next, previous, first, and last page are returned in the `Link`
   * header of the response, if any.
   */
  list(
    organizationId: string,
    query?: DomainListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<DomainListResponse>;
  list(
    organizationId: string,
    query: DomainListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/organizations/${organizationId}/domains`, { query, ...options });
  }
}

export type DomainListResponse = Array<Shared.Domain>;

export interface DomainCreateParams {
  domain: string;
}

export interface DomainListParams {
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
   * Query by domain
   */
  q?: string | null;

  /**
   * The field to sort by, `domain`, `created_at`, or `updated_at`. Defaults to
   * `updated_at`.
   */
  sort?: string | null;
}

export namespace Domains {
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
}
