// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as ProjectsAPI from 'subhosting/resources/projects/projects';
import * as Shared from 'subhosting/resources/shared';
import * as AnalyticsAPI from 'subhosting/resources/projects/analytics';
import * as DeploymentsAPI from 'subhosting/resources/projects/deployments';

export class Projects extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);

  /**
   * Update project details
   */
  update(
    projectId: string,
    body: ProjectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Project> {
    return this._client.patch(`/projects/${projectId}`, { body, ...options });
  }

  /**
   * Delete a project
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/projects/${projectId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get project details
   */
  get(projectId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Project> {
    return this._client.get(`/projects/${projectId}`, options);
  }
}

export interface ProjectUpdateParams {
  /**
   * The description of the project to be updated to. If this is `null`, no update
   * will be made to the project description.
   */
  description?: string | null;

  /**
   * The name of the project to be updated to. This must be globally unique. If this
   * is `null`, no update will be made to the project name.
   */
  name?: string | null;
}

export namespace Projects {
  export import ProjectUpdateParams = ProjectsAPI.ProjectUpdateParams;
  export import Analytics = AnalyticsAPI.Analytics;
  export import AnalyticsGetParams = AnalyticsAPI.AnalyticsGetParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import DeploymentListResponse = DeploymentsAPI.DeploymentListResponse;
  export import DeploymentCreateParams = DeploymentsAPI.DeploymentCreateParams;
  export import DeploymentListParams = DeploymentsAPI.DeploymentListParams;
}
