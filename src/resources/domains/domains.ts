// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as DomainsAPI from 'subhosting/resources/domains/domains';
import * as Shared from 'subhosting/resources/shared';
import * as CertificatesAPI from 'subhosting/resources/domains/certificates';

export class Domains extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

  /**
   * Associate a domain with a deployment
   *
   * This API allows you to either:
   *
   * 1. associate a domain with a deployment, or
   * 2. disassociate a domain from a deployment
   *
   * Domain association is required in order to serve the deployment on the domain.
   *
   * If the ownership of the domain is not verified yet, this API will trigger the
   * verification process before associating the domain with the deployment.
   */
  update(domainId: string, body: DomainUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.patch(`/domains/${domainId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete a domain
   */
  delete(domainId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/domains/${domainId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get domain details
   */
  get(domainId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Domain> {
    return this._client.get(`/domains/${domainId}`, options);
  }

  /**
   * Verify ownership of a domain
   *
   * This API triggers the ownership verification of a domain. It should be called
   * after necessary DNS records are properly set up.
   */
  verify(domainId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/domains/${domainId}/verify`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface DomainUpdateParams {
  /**
   * A deployment ID
   *
   * Note that this is not UUID v4, as opposed to organization ID and project ID.
   */
  deploymentId?: string | null;
}

export namespace Domains {
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
}
