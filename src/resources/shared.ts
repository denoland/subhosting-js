// File generated from our OpenAPI spec by Stainless.

/**
 * Project analytics data
 */
export interface Analytics {
  fields: Array<Analytics.Field>;

  values: Array<Array<string | number | string | boolean | unknown>>;
}

export namespace Analytics {
  export interface Field {
    name: string;

    /**
     * A data type that analytic data can be represented in.
     *
     * Inspired by Grafana's data types defined at:
     * https://github.com/grafana/grafana/blob/e3288834b37b9aac10c1f43f0e621b35874c1f8a/packages/grafana-data/src/types/dataFrame.ts#L11-L23
     */
    type: 'time' | 'number' | 'string' | 'boolean' | 'other';
  }
}

export interface Deployment {
  /**
   * A deployment ID
   *
   * Note that this is not UUID v4, as opposed to organization ID and project ID.
   */
  id: string;

  createdAt: string;

  /**
   * The KV databases that this deployment has access to. Currently, only `"default"`
   * database is supported.
   */
  databases: Record<string, string>;

  projectId: string;

  /**
   * The status of a deployment.
   */
  status: 'failed' | 'pending' | 'success';

  updatedAt: string;

  /**
   * The description of this deployment. This is present only when the `status` is
   * `success`.
   */
  description?: string | null;

  domains?: Array<string> | null;
}

export interface Domain {
  /**
   * The ID of the domain.
   */
  id: string;

  token: string;

  /**
   * TLS certificates for the domain.
   */
  certificates: Array<Domain.Certificate>;

  createdAt: string;

  /**
   * These records are used to verify the ownership of the domain.
   */
  dnsRecords: Array<Domain.DNSRecord>;

  /**
   * The domain value.
   */
  domain: string;

  /**
   * Whether the domain's ownership is validated or not.
   */
  isValidated: boolean;

  /**
   * The ID of the organization that the domain is associated with.
   */
  organizationId: string;

  provisioningStatus: Domain.Success | Domain.Failed | Domain.Pending | Domain.Manual;

  updatedAt: string;

  /**
   * A deployment ID
   *
   * Note that this is not UUID v4, as opposed to organization ID and project ID.
   */
  deploymentId?: string;

  /**
   * The ID of the project that the domain is associated with.
   *
   * If the domain is not associated with any project, this field is omitted.
   */
  projectId?: string | null;
}

export namespace Domain {
  export interface Certificate {
    cipher: 'rsa' | 'ec';

    createdAt: string;

    expiresAt: string;

    updatedAt: string;
  }

  export interface DNSRecord {
    content: string;

    name: string;

    type: string;
  }

  export interface Success {
    code: 'success';
  }

  export interface Failed {
    code: 'failed';

    message: string;
  }

  export interface Pending {
    code: 'pending';
  }

  export interface Manual {
    code: 'manual';
  }
}

export interface KvDatabase {
  /**
   * A KV database ID
   */
  id: string;

  createdAt: string;

  /**
   * A description of this KV database
   */
  description: string;

  /**
   * An organization ID that this KV database belongs to
   */
  organizationId: string;

  updatedAt: string;
}

export interface Project {
  id: string;

  createdAt: string;

  description: string;

  name: string;

  updatedAt: string;
}
