// File generated from our OpenAPI spec by Stainless.

import * as Core from 'subhosting/core';
import { APIResource } from 'subhosting/resource';
import * as DatabasesAPI from 'subhosting/resources/databases';
import * as Shared from 'subhosting/resources/shared';

export class Databases extends APIResource {
  /**
   * Update KV database details
   */
  update(
    databaseId: string,
    body: DatabaseUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.KvDatabase> {
    return this._client.patch(`/databases/${databaseId}`, { body, ...options });
  }
}

export interface DatabaseUpdateParams {
  /**
   * The description of the KV database to be updated to. If this is `null`, no
   * update will be made to the KV database description.
   */
  description?: string | null;
}

export namespace Databases {
  export import DatabaseUpdateParams = DatabasesAPI.DatabaseUpdateParams;
}
