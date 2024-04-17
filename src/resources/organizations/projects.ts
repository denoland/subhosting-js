// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import { isRequestOptions } from 'subhosting/core';
import * as ProjectsAPI from 'subhosting/resources/organizations/projects';
import * as Shared from 'subhosting/resources/shared';

export class Projects extends APIResource {
  /**
   * Create a project
   *
   * This API allows you to create a new project under the specified organization.
   * The project name is optional; if not provided, a random name will be generated.
   */
  create(
    organizationId: string,
    body: ProjectCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Project> {
    return this._client.post(`/organizations/${organizationId}/projects`, { body, ...options });
  }

  /**
   * List projects of an organization
   *
   * This API returns a list of projects belonging to the specified organization in a
   * pagenated manner. The URLs for the next, previous, first, and last page are
   * returned in the `Link` header of the response, if any.
   */
  list(
    organizationId: string,
    query?: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectListResponse>;
  list(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse>;
  list(
    organizationId: string,
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list(organizationId, {}, query);
    }
    return this._client.get(`/organizations/${organizationId}/projects`, { query, ...options });
  }
}

export type ProjectListResponse = Array<Shared.Project>;

export interface ProjectCreateParams {
  /**
   * The description of the project. If this is `null`, an empty string will be set.
   */
  description?: string | null;

  /**
   * The name of the project. This must be globally unique. If this is `null`, a
   * random unique name will be generated.
   */
  name?: string | null;
}

export interface ProjectListParams {
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
   * Query by project name or project ID
   */
  q?: string | null;

  /**
   * The field to sort by, either `name` or `updated_at`. Defaults to `updated_at`.
   */
  sort?: string | null;
}

export namespace Projects {
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectListParams = ProjectsAPI.ProjectListParams;
}
