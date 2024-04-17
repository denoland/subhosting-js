// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as OrganizationsAPI from 'subhosting/resources/organizations/organizations';
import * as AnalyticsAPI from 'subhosting/resources/organizations/analytics';
import * as DatabasesAPI from 'subhosting/resources/organizations/databases';
import * as DomainsAPI from 'subhosting/resources/organizations/domains';
import * as ProjectsAPI from 'subhosting/resources/organizations/projects';

export class Organizations extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  databases: DatabasesAPI.Databases = new DatabasesAPI.Databases(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Get organization details
   */
  get(organizationId: string, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return this._client.get(`/organizations/${organizationId}`, options);
  }
}

export interface Organization {
  id: string;

  createdAt: string;

  name: string;

  updatedAt: string;
}

export namespace Organizations {
  export import Organization = OrganizationsAPI.Organization;
  export import Analytics = AnalyticsAPI.Analytics;
  export import AnalyticsGetParams = AnalyticsAPI.AnalyticsGetParams;
  export import Projects = ProjectsAPI.Projects;
  export import ProjectListResponse = ProjectsAPI.ProjectListResponse;
  export import ProjectCreateParams = ProjectsAPI.ProjectCreateParams;
  export import ProjectListParams = ProjectsAPI.ProjectListParams;
  export import Databases = DatabasesAPI.Databases;
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
  export import Domains = DomainsAPI.Domains;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainCreateParams = DomainsAPI.DomainCreateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
}
