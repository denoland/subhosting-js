// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as CertificatesAPI from 'subhosting/resources/domains/certificates';

export class Certificates extends APIResource {
  /**
   * Upload TLS certificate for a domain
   *
   * This API allows you to upload a TLS certificate for a domain.
   *
   * If the ownership of the domain is not verified yet, this API will trigger the
   * verification process before storing the certificate.
   */
  create(
    domainId: string,
    body: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/domains/${domainId}/certificates`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Provision TLS certificates for a domain
   *
   * This API begins the provisioning of TLS certificates for a domain.
   *
   * Note that a call to this API may take a while, up to a minute or so.
   *
   * If the ownership of the domain is not verified yet, this API will trigger the
   * verification process before provisioning the certificate.
   */
  provision(domainId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/domains/${domainId}/certificates/provision`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CertificateCreateParams {
  /**
   * The PRM encoded certificate chain for the TLS certificate
   */
  certificateChain: string;

  /**
   * The PEM encoded private key for the TLS certificate
   */
  privateKey: string;
}

export namespace Certificates {
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
}
