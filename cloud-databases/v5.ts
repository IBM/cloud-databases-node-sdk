/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * IBM OpenAPI SDK Code Generator Version: 99-SNAPSHOT-f9bb1b47-20210329-151039
 */


import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Authenticator, BaseService, getAuthenticatorFromEnvironment, getMissingParams, UserOptions } from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';

/**
 * The IBM Cloud Databases API enables interaction between applications and Cloud Databases database deployments.
 *
 * Access to the API requires an IAM Bearer Token or an IAM API Key to be presented through bearer authentication.
 *
 * Deployment IDs are CRNs on the IBM Cloud Databases v5 API platform. No lookup or translation the Compose style UUIDs
 * is needed. The Deployment ID is a traditional UUID on the Compose v5 API platform.
 *
 * When you use CRNs, remember to URL escape the CRN value as they can include the forward-slash (/) character.
 */

class CloudDatabasesV5 extends BaseService {

  static DEFAULT_SERVICE_NAME: string = 'cloud_databases';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of CloudDatabasesV5 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {CloudDatabasesV5}
   */

  public static newInstance(options: UserOptions): CloudDatabasesV5 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new CloudDatabasesV5(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }


  /**
   * Construct a CloudDatabasesV5 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {CloudDatabasesV5}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    }
  }

  /*************************
   * deployments
   ************************/

  /**
   * List all deployable databases.
   *
   * Returns a list of all the types and associated major versions of database deployments that can be provisioned.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ListDeployablesResponse>>}
   */
  public listDeployables(params?: CloudDatabasesV5.ListDeployablesParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ListDeployablesResponse>> {
    const _params = Object.assign({}, params);

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'listDeployables');

    const parameters = {
      options: {
        url: '/deployables',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List all deployable regions.
   *
   * Returns a list of all the regions that deployments can be provisioned into from the current region. Used to
   * determine region availability for read-only replicas.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ListRegionsResponse>>}
   */
  public listRegions(params?: CloudDatabasesV5.ListRegionsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ListRegionsResponse>> {
    const _params = Object.assign({}, params);

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'listRegions');

    const parameters = {
      options: {
        url: '/regions',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Get deployment information.
   *
   * Gets the full data that is associated with a deployment. This data includes the ID, name, database type, and
   * version.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.GetDeploymentInfoResponse>>}
   */
  public getDeploymentInfo(params: CloudDatabasesV5.GetDeploymentInfoParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.GetDeploymentInfoResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getDeploymentInfo');

    const parameters = {
      options: {
        url: '/deployments/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * databaseUsers
   ************************/

  /**
   * Creates a user based on user type.
   *
   * Creates a user in the database that can access the database through a connection.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.userType - User type.
   * @param {CreateDatabaseUserRequestUser} [params.user] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.CreateDatabaseUserResponse>>}
   */
  public createDatabaseUser(params: CloudDatabasesV5.CreateDatabaseUserParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.CreateDatabaseUserResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'userType'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'user': _params.user
    };

    const path = {
      'id': _params.id,
      'user_type': _params.userType
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'createDatabaseUser');

    const parameters = {
      options: {
        url: '/deployments/{id}/users/{user_type}',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Set specified user's password.
   *
   * Sets the password of a specified user.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.userType - User type.
   * @param {string} params.username - User ID.
   * @param {APasswordSettingUser} [params.user] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ChangeUserPasswordResponse>>}
   */
  public changeUserPassword(params: CloudDatabasesV5.ChangeUserPasswordParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ChangeUserPasswordResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'userType', 'username'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'user': _params.user
    };

    const path = {
      'id': _params.id,
      'user_type': _params.userType,
      'username': _params.username
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'changeUserPassword');

    const parameters = {
      options: {
        url: '/deployments/{id}/users/{user_type}/{username}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Deletes a user based on user type.
   *
   * Removes a user from the deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.userType - User type.
   * @param {string} params.username - Username.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.DeleteDatabaseUserResponse>>}
   */
  public deleteDatabaseUser(params: CloudDatabasesV5.DeleteDatabaseUserParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.DeleteDatabaseUserResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'userType', 'username'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id,
      'user_type': _params.userType,
      'username': _params.username
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'deleteDatabaseUser');

    const parameters = {
      options: {
        url: '/deployments/{id}/users/{user_type}/{username}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * databaseConfiguration
   ************************/

  /**
   * Change your database configuration.
   *
   * Change your database configuration. Available for PostgreSQL, EnterpriseDB, and Redis ONLY.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {SetConfigurationConfiguration} params.configuration -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.UpdateDatabaseConfigurationResponse>>}
   */
  public updateDatabaseConfiguration(params: CloudDatabasesV5.UpdateDatabaseConfigurationParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.UpdateDatabaseConfigurationResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'configuration'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'configuration': _params.configuration
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'updateDatabaseConfiguration');

    const parameters = {
      options: {
        url: '/deployments/{id}/configuration',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * remotes
   ************************/

  /**
   * List read-only replica information.
   *
   * Get the read-only replicas associated with a deployment. Available for PostgreSQL and EnterpriseDB ONLY.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ListRemotesResponse>>}
   */
  public listRemotes(params: CloudDatabasesV5.ListRemotesParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ListRemotesResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'listRemotes');

    const parameters = {
      options: {
        url: '/deployments/{id}/remotes',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Resync read-only replica.
   *
   * Reinitialize a read-only replica. Available for PostgreSQL and EnterpriseDB ONLY.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID of the read-only replica.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ResyncReplicaResponse>>}
   */
  public resyncReplica(params: CloudDatabasesV5.ResyncReplicaParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.ResyncReplicaResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'resyncReplica');

    const parameters = {
      options: {
        url: '/deployments/{id}/remotes/resync',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Promote read-only replica to a full deployment.
   *
   * Promote a read-only replica or upgrade and promote a read-only replica. Available for PostgreSQL and EnterpriseDB
   * ONLY.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID of the read-only replica to promote.
   * @param {SetPromotionPromotion} params.promotion -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetPromotionResponse>>}
   */
  public setPromotion(params: CloudDatabasesV5.SetPromotionParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetPromotionResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'promotion'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'Promotion': _params.promotion
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'setPromotion');

    const parameters = {
      options: {
        url: '/deployments/{id}/remotes/promotion',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * tasks
   ************************/

  /**
   * List currently running tasks on a deployment.
   *
   * Obtain a list of tasks currently running or recently run on a deployment. Tasks are ephemeral. Records of
   * successful tasks are shown for 24-48 hours, and unsuccessful tasks are shown for 7-8 days.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Tasks>>}
   */
  public listDeploymentTasks(params: CloudDatabasesV5.ListDeploymentTasksParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Tasks>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'listDeploymentTasks');

    const parameters = {
      options: {
        url: '/deployments/{id}/tasks',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Get information about a task.
   *
   * Get information about a task and its status. Tasks themselves are persistent so old tasks can be consulted as well
   * as running tasks.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Task ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.GetTaskResponse>>}
   */
  public getTask(params: CloudDatabasesV5.GetTaskParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.GetTaskResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getTask');

    const parameters = {
      options: {
        url: '/tasks/{id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * backups
   ************************/

  /**
   * Get information about a backup.
   *
   * Get information about a backup, such as creation date.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.backupId - Backup ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.GetBackupInfoResponse>>}
   */
  public getBackupInfo(params: CloudDatabasesV5.GetBackupInfoParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.GetBackupInfoResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['backupId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'backup_id': _params.backupId
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getBackupInfo');

    const parameters = {
      options: {
        url: '/backups/{backup_id}',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * List currently available backups from a deployment.
   *
   * Get details of all currently available backups from a deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Backups>>}
   */
  public listDeploymentBackups(params: CloudDatabasesV5.ListDeploymentBackupsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Backups>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'listDeploymentBackups');

    const parameters = {
      options: {
        url: '/deployments/{id}/backups',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Initiate an on-demand backup.
   *
   * Signal the platform to create an on-demand backup for the specified deployment. The returned task can be polled to
   * track progress of the backup as it takes place.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.StartOndemandBackupResponse>>}
   */
  public startOndemandBackup(params: CloudDatabasesV5.StartOndemandBackupParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.StartOndemandBackupResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'startOndemandBackup');

    const parameters = {
      options: {
        url: '/deployments/{id}/backups',
        method: 'POST',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Get earliest point-in-time-recovery timestamp.
   *
   * Returns the earliest available time for point-in-time-recovery in ISO8601 UTC format. PostgreSQL and EnterpriseDB
   * only.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.PointInTimeRecoveryData>>}
   */
  public getPitRdata(params: CloudDatabasesV5.GetPitRdataParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.PointInTimeRecoveryData>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getPitRdata');

    const parameters = {
      options: {
        url: '/deployments/{id}/point_in_time_recovery_data',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * connections
   ************************/

  /**
   * Discover connection information for a deployment for a user with an endpoint type.
   *
   * Discover connection information for a deployment for a user with an endpoint type.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.userType - User type.
   * @param {string} params.userId - User ID.
   * @param {string} params.endpointType - Endpoint Type. The endpoint must be enabled on the deployment before its
   * connection information can be fetched.
   * @param {string} [params.certificateRoot] - Optional certificate root path to prepend certificate names.
   * Certificates would be stored in this directory for use by other commands.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Connection>>}
   */
  public getConnection(params: CloudDatabasesV5.GetConnectionParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Connection>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'userType', 'userId', 'endpointType'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const query = {
      'certificate_root': _params.certificateRoot
    };

    const path = {
      'id': _params.id,
      'user_type': _params.userType,
      'user_id': _params.userId,
      'endpoint_type': _params.endpointType
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getConnection');

    const parameters = {
      options: {
        url: '/deployments/{id}/users/{user_type}/{user_id}/connections/{endpoint_type}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Discover connection information for a deployment for a user with substitutions and an endpoint type.
   *
   * Discover connection information for a deployment for a user. Behaves the same as the GET method but substitutes the
   * provided password parameter into the returned connection information.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.userType - User type of `database` is the only currently supported value.
   * @param {string} params.userId - User ID.
   * @param {string} params.endpointType - Endpoint Type. The select endpoint must be enabled on the deployment before
   * its connection information can be fetched.
   * @param {string} [params.password] - Password to be substituted into the response.
   * @param {string} [params.certificateRoot] - Optional certificate root path to prepend certificate names.
   * Certificates would be stored in this directory for use by other commands.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Connection>>}
   */
  public completeConnection(params: CloudDatabasesV5.CompleteConnectionParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Connection>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'userType', 'userId', 'endpointType'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'password': _params.password,
      'certificate_root': _params.certificateRoot
    };

    const path = {
      'id': _params.id,
      'user_type': _params.userType,
      'user_id': _params.userId,
      'endpoint_type': _params.endpointType
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'completeConnection');

    const parameters = {
      options: {
        url: '/deployments/{id}/users/{user_type}/{user_id}/connections/{endpoint_type}',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * scaling
   ************************/

  /**
   * List currently available scaling groups from a deployment.
   *
   * Scaling groups represent the various resources that are allocated to a deployment. This command allows for the
   * retrieval of all of the groups for a particular deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Groups>>}
   */
  public listDeploymentScalingGroups(params: CloudDatabasesV5.ListDeploymentScalingGroupsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Groups>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'listDeploymentScalingGroups');

    const parameters = {
      options: {
        url: '/deployments/{id}/groups',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Get default scaling groups for a new deployment.
   *
   * Scaling groups represent the various resources allocated to a deployment. When a new deployment is created, there
   * are a set of defaults for each database type. This endpoint returns them for a particular database.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.type - Database type name.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Groups>>}
   */
  public getDefaultScalingGroups(params: CloudDatabasesV5.GetDefaultScalingGroupsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Groups>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['type'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'type': _params.type
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getDefaultScalingGroups');

    const parameters = {
      options: {
        url: '/deployables/{type}/groups',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Set scaling values on a specified group.
   *
   * Set scaling value on a specified group. Can only be performed on is_adjustable=true groups. Values set are for the
   * group as a whole and resources are distributed amongst the group. Values must be greater than or equal to the
   * minimum size and must be a multiple of the step size.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.groupId - Group Id.
   * @param {SetDeploymentScalingGroupRequest} params.setDeploymentScalingGroupRequest - Scaling group settings.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetDeploymentScalingGroupResponse>>}
   */
  public setDeploymentScalingGroup(params: CloudDatabasesV5.SetDeploymentScalingGroupParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetDeploymentScalingGroupResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'groupId', 'setDeploymentScalingGroupRequest'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = _params.setDeploymentScalingGroupRequest;
    const path = {
      'id': _params.id,
      'group_id': _params.groupId
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'setDeploymentScalingGroup');

    const parameters = {
      options: {
        url: '/deployments/{id}/groups/{group_id}',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * autoscaling
   ************************/

  /**
   * Get the autoscaling configuration from a deployment.
   *
   * The Autoscaling configuration represents the various conditions that control autoscaling for a deployment. This
   * command allows for the retrieval of all autoscaling conditions for a particular deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.groupId - Group ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.AutoscalingGroup>>}
   */
  public getAutoscalingConditions(params: CloudDatabasesV5.GetAutoscalingConditionsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.AutoscalingGroup>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'groupId'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id,
      'group_id': _params.groupId
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getAutoscalingConditions');

    const parameters = {
      options: {
        url: '/deployments/{id}/groups/{group_id}/autoscaling',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Set the autoscaling configuration from a deployment.
   *
   * Enable, disable, or set the conditions for autoscaling on your deployment. Memory, disk, and CPU (if available) can
   * be set separately and are not all required.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.groupId - Group ID.
   * @param {AutoscalingSetGroupAutoscaling} params.autoscaling -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetAutoscalingConditionsResponse>>}
   */
  public setAutoscalingConditions(params: CloudDatabasesV5.SetAutoscalingConditionsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetAutoscalingConditionsResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'groupId', 'autoscaling'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'autoscaling': _params.autoscaling
    };

    const path = {
      'id': _params.id,
      'group_id': _params.groupId
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'setAutoscalingConditions');

    const parameters = {
      options: {
        url: '/deployments/{id}/groups/{group_id}/autoscaling',
        method: 'PATCH',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * management
   ************************/

  /**
   * Kill connections to a PostgreSQL or EnterpriseDB deployment.
   *
   * Closes all the connections on a deployment. Available for PostgreSQL and EnterpriseDB ONLY.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.KillConnectionsResponse>>}
   */
  public killConnections(params: CloudDatabasesV5.KillConnectionsParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.KillConnectionsResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'killConnections');

    const parameters = {
      options: {
        url: '/deployments/{id}/management/database_connections',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /*************************
   * security
   ************************/

  /**
   * Retrieve the allowlisted addresses and ranges for a deployment.
   *
   * Retrieve the allowlisted addresses and ranges for a deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Allowlist>>}
   */
  public getAllowlist(params: CloudDatabasesV5.GetAllowlistParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.Allowlist>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'getAllowlist');

    const parameters = {
      options: {
        url: '/deployments/{id}/whitelists/ip_addresses',
        method: 'GET',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Set the allowlist for a deployment.
   *
   * Set the allowlist for a deployment. This action overwrites all existing entries, so when you modify the allowlist
   * via a GET/update/PUT, provide the GET response's ETag header value in this endpoint's If-Match header to ensure
   * that changes that are made by other clients are not accidentally overwritten.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {AllowlistEntry[]} [params.ipAddresses] - An array of allowlist entries.
   * @param {string} [params.ifMatch] - Verify that the current allowlist matches a provided ETag value. Use in
   * conjunction with the GET operation's ETag header to ensure synchronicity between clients.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetAllowlistResponse>>}
   */
  public setAllowlist(params: CloudDatabasesV5.SetAllowlistParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.SetAllowlistResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'ip_addresses': _params.ipAddresses
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'setAllowlist');

    const parameters = {
      options: {
        url: '/deployments/{id}/whitelists/ip_addresses',
        method: 'PUT',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'If-Match': _params.ifMatch
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Add an address or range to the allowlist for a deployment.
   *
   * Add an address or range to the allowlist for a deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {AllowlistEntry} [params.ipAddress] -
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.AddAllowlistEntryResponse>>}
   */
  public addAllowlistEntry(params: CloudDatabasesV5.AddAllowlistEntryParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.AddAllowlistEntryResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const body = {
      'ip_address': _params.ipAddress
    };

    const path = {
      'id': _params.id
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'addAllowlistEntry');

    const parameters = {
      options: {
        url: '/deployments/{id}/whitelists/ip_addresses',
        method: 'POST',
        body,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

  /**
   * Delete an address or range from the allowlist of a deployment.
   *
   * Delete an address or range from the allowlist of a deployment.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.id - Deployment ID.
   * @param {string} params.ipaddress - An IPv4 address or a CIDR range (netmasked IPv4 address).
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<CloudDatabasesV5.Response<CloudDatabasesV5.DeleteAllowlistEntryResponse>>}
   */
  public deleteAllowlistEntry(params: CloudDatabasesV5.DeleteAllowlistEntryParams): Promise<CloudDatabasesV5.Response<CloudDatabasesV5.DeleteAllowlistEntryResponse>> {
    const _params = Object.assign({}, params);
    const requiredParams = ['id', 'ipaddress'];

    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return Promise.reject(missingParams);
    }

    const path = {
      'id': _params.id,
      'ipaddress': _params.ipaddress
    };

    const sdkHeaders = getSdkHeaders(CloudDatabasesV5.DEFAULT_SERVICE_NAME, 'v5', 'deleteAllowlistEntry');

    const parameters = {
      options: {
        url: '/deployments/{id}/whitelists/ip_addresses/{ipaddress}',
        method: 'DELETE',
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(true, sdkHeaders, {
          'Accept': 'application/json',
        }, _params.headers),
      }),
    };

    return this.createRequest(parameters);
  };

}

/*************************
 * interfaces
 ************************/

namespace CloudDatabasesV5 {

  /** An operation response. */
  export interface Response<T = any>  {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface Empty { }

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `listDeployables` operation. */
  export interface ListDeployablesParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listRegions` operation. */
  export interface ListRegionsParams {
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDeploymentInfo` operation. */
  export interface GetDeploymentInfoParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createDatabaseUser` operation. */
  export interface CreateDatabaseUserParams {
    /** Deployment ID. */
    id: string;
    /** User type. */
    userType: string;
    user?: CreateDatabaseUserRequestUser;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `changeUserPassword` operation. */
  export interface ChangeUserPasswordParams {
    /** Deployment ID. */
    id: string;
    /** User type. */
    userType: string;
    /** User ID. */
    username: string;
    user?: APasswordSettingUser;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteDatabaseUser` operation. */
  export interface DeleteDatabaseUserParams {
    /** Deployment ID. */
    id: string;
    /** User type. */
    userType: string;
    /** Username. */
    username: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateDatabaseConfiguration` operation. */
  export interface UpdateDatabaseConfigurationParams {
    /** Deployment ID. */
    id: string;
    configuration: SetConfigurationConfiguration;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listRemotes` operation. */
  export interface ListRemotesParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `resyncReplica` operation. */
  export interface ResyncReplicaParams {
    /** Deployment ID of the read-only replica. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `setPromotion` operation. */
  export interface SetPromotionParams {
    /** Deployment ID of the read-only replica to promote. */
    id: string;
    promotion: SetPromotionPromotion;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listDeploymentTasks` operation. */
  export interface ListDeploymentTasksParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getTask` operation. */
  export interface GetTaskParams {
    /** Task ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getBackupInfo` operation. */
  export interface GetBackupInfoParams {
    /** Backup ID. */
    backupId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `listDeploymentBackups` operation. */
  export interface ListDeploymentBackupsParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `startOndemandBackup` operation. */
  export interface StartOndemandBackupParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getPitRdata` operation. */
  export interface GetPitRdataParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getConnection` operation. */
  export interface GetConnectionParams {
    /** Deployment ID. */
    id: string;
    /** User type. */
    userType: string;
    /** User ID. */
    userId: string;
    /** Endpoint Type. The endpoint must be enabled on the deployment before its connection information can be
     *  fetched.
     */
    endpointType: GetConnectionConstants.EndpointType | string;
    /** Optional certificate root path to prepend certificate names. Certificates would be stored in this directory
     *  for use by other commands.
     */
    certificateRoot?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getConnection` operation. */
  export namespace GetConnectionConstants {
    /** Endpoint Type. The endpoint must be enabled on the deployment before its connection information can be fetched. */
    export enum EndpointType {
      PUBLIC = 'public',
      PRIVATE = 'private',
    }
  }

  /** Parameters for the `completeConnection` operation. */
  export interface CompleteConnectionParams {
    /** Deployment ID. */
    id: string;
    /** User type of `database` is the only currently supported value. */
    userType: string;
    /** User ID. */
    userId: string;
    /** Endpoint Type. The select endpoint must be enabled on the deployment before its connection information can
     *  be fetched.
     */
    endpointType: CompleteConnectionConstants.EndpointType | string;
    /** Password to be substituted into the response. */
    password?: string;
    /** Optional certificate root path to prepend certificate names. Certificates would be stored in this directory
     *  for use by other commands.
     */
    certificateRoot?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `completeConnection` operation. */
  export namespace CompleteConnectionConstants {
    /** Endpoint Type. The select endpoint must be enabled on the deployment before its connection information can be fetched. */
    export enum EndpointType {
      PUBLIC = 'public',
      PRIVATE = 'private',
    }
  }

  /** Parameters for the `listDeploymentScalingGroups` operation. */
  export interface ListDeploymentScalingGroupsParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getDefaultScalingGroups` operation. */
  export interface GetDefaultScalingGroupsParams {
    /** Database type name. */
    type: GetDefaultScalingGroupsConstants.Type | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getDefaultScalingGroups` operation. */
  export namespace GetDefaultScalingGroupsConstants {
    /** Database type name. */
    export enum Type {
      POSTGRESQL = 'postgresql',
      ETCD = 'etcd',
    }
  }

  /** Parameters for the `setDeploymentScalingGroup` operation. */
  export interface SetDeploymentScalingGroupParams {
    /** Deployment ID. */
    id: string;
    /** Group Id. */
    groupId: string;
    /** Scaling group settings. */
    setDeploymentScalingGroupRequest: SetDeploymentScalingGroupRequest;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getAutoscalingConditions` operation. */
  export interface GetAutoscalingConditionsParams {
    /** Deployment ID. */
    id: string;
    /** Group ID. */
    groupId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `setAutoscalingConditions` operation. */
  export interface SetAutoscalingConditionsParams {
    /** Deployment ID. */
    id: string;
    /** Group ID. */
    groupId: string;
    autoscaling: AutoscalingSetGroupAutoscaling;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `killConnections` operation. */
  export interface KillConnectionsParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getAllowlist` operation. */
  export interface GetAllowlistParams {
    /** Deployment ID. */
    id: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `setAllowlist` operation. */
  export interface SetAllowlistParams {
    /** Deployment ID. */
    id: string;
    /** An array of allowlist entries. */
    ipAddresses?: AllowlistEntry[];
    /** Verify that the current allowlist matches a provided ETag value. Use in conjunction with the GET operation's
     *  ETag header to ensure synchronicity between clients.
     */
    ifMatch?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `addAllowlistEntry` operation. */
  export interface AddAllowlistEntryParams {
    /** Deployment ID. */
    id: string;
    ipAddress?: AllowlistEntry;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `deleteAllowlistEntry` operation. */
  export interface DeleteAllowlistEntryParams {
    /** Deployment ID. */
    id: string;
    /** An IPv4 address or a CIDR range (netmasked IPv4 address). */
    ipaddress: string;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** APasswordSettingUser. */
  export interface APasswordSettingUser {
    password?: string;
  }

  /** AddAllowlistEntryResponse. */
  export interface AddAllowlistEntryResponse {
    task?: Task;
  }

  /** Allowlist. */
  export interface Allowlist {
    /** An array of allowlist entries. */
    ip_addresses?: AllowlistEntry[];
  }

  /** AllowlistEntry. */
  export interface AllowlistEntry {
    /** An IPv4 address or a CIDR range (netmasked IPv4 address). */
    address?: string;
    /** A human readable description of the address or range for identification purposes. */
    description?: string;
  }

  /** AutoscalingCPUGroupCPU. */
  export interface AutoscalingCPUGroupCPU {
    scalers?: JsonObject;
    rate?: AutoscalingCPUGroupCPURate;
  }

  /** AutoscalingCPUGroupCPURate. */
  export interface AutoscalingCPUGroupCPURate {
    increase_percent?: number;
    period_seconds?: number;
    limit_count_per_member?: number;
    units?: string;
  }

  /** AutoscalingDiskGroupDisk. */
  export interface AutoscalingDiskGroupDisk {
    scalers?: AutoscalingDiskGroupDiskScalers;
    rate?: AutoscalingDiskGroupDiskRate;
  }

  /** AutoscalingDiskGroupDiskRate. */
  export interface AutoscalingDiskGroupDiskRate {
    increase_percent?: number;
    period_seconds?: number;
    limit_mb_per_member?: number;
    units?: string;
  }

  /** AutoscalingDiskGroupDiskScalers. */
  export interface AutoscalingDiskGroupDiskScalers {
    capacity?: AutoscalingDiskGroupDiskScalersCapacity;
    io_utilization?: AutoscalingDiskGroupDiskScalersIoUtilization;
  }

  /** AutoscalingDiskGroupDiskScalersCapacity. */
  export interface AutoscalingDiskGroupDiskScalersCapacity {
    enabled?: boolean;
    free_space_less_than_percent?: number;
  }

  /** AutoscalingDiskGroupDiskScalersIoUtilization. */
  export interface AutoscalingDiskGroupDiskScalersIoUtilization {
    enabled?: boolean;
    over_period?: string;
    above_percent?: number;
  }

  /** AutoscalingGroup. */
  export interface AutoscalingGroup {
    autoscaling: AutoscalingGroupAutoscaling;
  }

  /** AutoscalingGroupAutoscaling. */
  export interface AutoscalingGroupAutoscaling {
    disk?: AutoscalingDiskGroupDisk;
    memory?: AutoscalingMemoryGroupMemory;
    cpu?: AutoscalingCPUGroupCPU;
  }

  /** AutoscalingMemoryGroupMemory. */
  export interface AutoscalingMemoryGroupMemory {
    scalers?: AutoscalingMemoryGroupMemoryScalers;
    rate?: AutoscalingMemoryGroupMemoryRate;
  }

  /** AutoscalingMemoryGroupMemoryRate. */
  export interface AutoscalingMemoryGroupMemoryRate {
    increase_percent?: number;
    period_seconds?: number;
    limit_mb_per_member?: number;
    units?: string;
  }

  /** AutoscalingMemoryGroupMemoryScalers. */
  export interface AutoscalingMemoryGroupMemoryScalers {
    io_utilization?: AutoscalingMemoryGroupMemoryScalersIoUtilization;
  }

  /** AutoscalingMemoryGroupMemoryScalersIoUtilization. */
  export interface AutoscalingMemoryGroupMemoryScalersIoUtilization {
    enabled?: boolean;
    over_period?: string;
    above_percent?: number;
  }

  /** AutoscalingSetGroupAutoscaling. */
  export interface AutoscalingSetGroupAutoscaling {
  }

  /** Backup. */
  export interface Backup {
    /** ID of this backup. */
    id?: string;
    /** ID of the deployment this backup relates to. */
    deployment_id?: string;
    /** The type of backup. */
    type?: string;
    /** The status of this backup. */
    status?: string;
    /** Is this backup available to download?. */
    is_downloadable?: boolean;
    /** Can this backup be used to restore an instance?. */
    is_restorable?: boolean;
    /** Date and time when this backup was created. */
    created_at?: string;
  }

  /** Backups. */
  export interface Backups {
    backups?: Backup[];
  }

  /** ChangeUserPasswordResponse. */
  export interface ChangeUserPasswordResponse {
    task?: Task;
  }

  /** Connection. */
  export interface Connection {
    connection: ConnectionConnection;
  }

  /** CLI Connection. */
  export interface ConnectionCLI {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** A map of environment variables for a CLI connection. */
    environment?: JsonObject;
    /** The name of the executable the CLI should run. */
    bin?: string;
    /** Sets of arguments to call the executable with. The outer array corresponds to a possible way to call the
     *  CLI; the inner array is the set of arguments to use with that call.
     */
    arguments?: string[][];
    certificate?: ConnectionCLICertificate;
  }

  /** ConnectionCLICertificate. */
  export interface ConnectionCLICertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** ConnectionConnection. */
  export interface ConnectionConnection {
  }

  /** CreateDatabaseUserRequestUser. */
  export interface CreateDatabaseUserRequestUser {
    /** User type for new user. */
    user_type?: string;
    /** Username for new user. */
    username?: string;
    /** Password for new user. */
    password?: string;
  }

  /** CreateDatabaseUserResponse. */
  export interface CreateDatabaseUserResponse {
    task?: Task;
  }

  /** DeleteAllowlistEntryResponse. */
  export interface DeleteAllowlistEntryResponse {
    task?: Task;
  }

  /** DeleteDatabaseUserResponse. */
  export interface DeleteDatabaseUserResponse {
    task?: Task;
  }

  /** Deployable databases with their version information. */
  export interface Deployables {
    /** Deployment type - typically the name of the database. */
    type?: string;
    /** An array of versions of the database, their status, preferedness, and transitions. */
    versions?: DeployablesVersionsItem[];
  }

  /** DeployablesVersionsItem. */
  export interface DeployablesVersionsItem {
    /** The version number. */
    version?: string;
    /** The status of this version: To be finalized. */
    status?: string;
    /** Should this version be preferred over others?. */
    is_preferred?: boolean;
    /** versions that this version can be upgraded to. */
    transitions?: DeployablesVersionsItemTransitionsItem[];
  }

  /** DeployablesVersionsItemTransitionsItem. */
  export interface DeployablesVersionsItemTransitionsItem {
    /** The database type. */
    application?: string;
    /** method of going from from_version to to_version. */
    method?: string;
    /** The version the transition in from. */
    from_version?: string;
    /** The version the transition is to. */
    to_version?: string;
  }

  /** Deployment. */
  export interface Deployment {
    /** ID of this deployment. */
    id?: string;
    /** Readable name of this deployment. */
    name?: string;
    /** Database type within this deployment. */
    type?: string;
    /** Platform-specific options for this deployment. */
    platform_options?: JsonObject;
    /** Version number of the database. */
    version?: string;
    /** Login name of administration level user. */
    admin_usernames?: JsonObject;
    /** Whether access to this deployment is enabled from the public internet. This property can be modified by
     *  updating this service instance through the Resource Controller API.
     */
    enable_public_endpoints?: boolean;
    /** Whether access to this deployment is enabled from IBM Cloud via the IBM Cloud backbone network. This
     *  property can be modified by updating this service instance through the Resource Controller API.
     */
    enable_private_endpoints?: boolean;
  }

  /** ElasticsearchConnectionHTTPS. */
  export interface ElasticsearchConnectionHTTPS {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: ElasticsearchConnectionHTTPSHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: ElasticsearchConnectionHTTPSAuthentication;
    certificate?: ElasticsearchConnectionHTTPSCertificate;
  }

  /** ElasticsearchConnectionHTTPSAuthentication. */
  export interface ElasticsearchConnectionHTTPSAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** ElasticsearchConnectionHTTPSCertificate. */
  export interface ElasticsearchConnectionHTTPSCertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** ElasticsearchConnectionHTTPSHostsItem. */
  export interface ElasticsearchConnectionHTTPSHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** GRPCConnectionURI. */
  export interface GRPCConnectionURI {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: GRPCConnectionURIHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: GRPCConnectionURIAuthentication;
    certificate?: GRPCConnectionURICertificate;
  }

  /** GRPCConnectionURIAuthentication. */
  export interface GRPCConnectionURIAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** GRPCConnectionURICertificate. */
  export interface GRPCConnectionURICertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** GRPCConnectionURIHostsItem. */
  export interface GRPCConnectionURIHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** GetBackupInfoResponse. */
  export interface GetBackupInfoResponse {
    backup?: Backup;
  }

  /** GetDeploymentInfoResponse. */
  export interface GetDeploymentInfoResponse {
    deployment?: Deployment;
  }

  /** GetTaskResponse. */
  export interface GetTaskResponse {
    task?: Task;
  }

  /** Group. */
  export interface Group {
    /** Id/name for group. */
    id?: string;
    /** Number of entities in the group. */
    count?: number;
    members?: GroupMembers;
    memory?: GroupMemory;
    cpu?: GroupCpu;
    disk?: GroupDisk;
  }

  /** GroupCpu. */
  export interface GroupCpu {
    /** Units used for scaling cpu - count means the value is the number of the unit(s) available. */
    units?: string;
    /** Number of allocated CPUs. */
    allocation_count?: number;
    /** Minimum number of CPUs. */
    minimum_count?: number;
    /** Maximum number of CPUs. */
    maximum_count?: number;
    /** Step size CPUs can be adjusted. */
    step_size_count?: number;
    /** Is this group's CPU count adjustable. */
    is_adjustable?: boolean;
    /** Is this group's CPU optional?. */
    is_optional?: boolean;
    /** Can this group's CPU scale down?. */
    can_scale_down?: boolean;
  }

  /** GroupDisk. */
  export interface GroupDisk {
    /** Units used for scaling storage. */
    units?: string;
    /** Allocated storage in MB. */
    allocation_mb?: number;
    /** Minimum allocated storage. */
    minimum_mb?: number;
    /** Maximum allocated storage. */
    maximum_mb?: number;
    /** Step size storage can be adjusted. */
    step_size_mb?: number;
    /** Is this group's storage adjustable?. */
    is_adjustable?: boolean;
    /** Is this group's storage optional?. */
    is_optional?: boolean;
    /** Can this group's storage scale down?. */
    can_scale_down?: boolean;
  }

  /** GroupMembers. */
  export interface GroupMembers {
    /** Units used for scaling number of members. */
    units?: string;
    /** Allocated number of members. */
    allocation_count?: number;
    /** Minimum number of members. */
    minimum_count?: number;
    /** Maximum number of members. */
    maximum_count?: number;
    /** Step size for number of members. */
    step_size_count?: number;
    /** Is this deployment's number of members adjustable?. */
    is_adjustable?: boolean;
    /** Is this deployments's number of members optional?. */
    is_optional?: boolean;
    /** Can this deployment's number of members scale down?. */
    can_scale_down?: boolean;
  }

  /** GroupMemory. */
  export interface GroupMemory {
    /** Units used for scaling memory. */
    units?: string;
    /** Allocated memory in MB. */
    allocation_mb?: number;
    /** Minimum memory in MB. */
    minimum_mb?: number;
    /** Maximum memory in MB. */
    maximum_mb?: number;
    /** Step size memory can be adjusted by in MB. */
    step_size_mb?: number;
    /** Is this group's memory adjustable?. */
    is_adjustable?: boolean;
    /** Is this group's memory optional?. */
    is_optional?: boolean;
    /** Can this group's memory scale down?. */
    can_scale_down?: boolean;
  }

  /** Groups. */
  export interface Groups {
    groups?: Group[];
  }

  /** KillConnectionsResponse. */
  export interface KillConnectionsResponse {
    task?: Task;
  }

  /** ListDeployablesResponse. */
  export interface ListDeployablesResponse {
    deployables?: Deployables[];
  }

  /** ListRegionsResponse. */
  export interface ListRegionsResponse {
    /** An array of region ids. */
    regions?: string[];
  }

  /** ListRemotesResponse. */
  export interface ListRemotesResponse {
    /** Remotes. */
    remotes?: Remotes;
  }

  /** MongoDBConnectionURI. */
  export interface MongoDBConnectionURI {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: MongoDBConnectionURIHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: MongoDBConnectionURIAuthentication;
    certificate?: MongoDBConnectionURICertificate;
    /** Name of the database to use in the URI connection. */
    database?: string;
    /** Name of the replica set to use in the URI connection. */
    replica_set?: string;
  }

  /** MongoDBConnectionURIAuthentication. */
  export interface MongoDBConnectionURIAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** MongoDBConnectionURICertificate. */
  export interface MongoDBConnectionURICertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** MongoDBConnectionURIHostsItem. */
  export interface MongoDBConnectionURIHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** PointInTimeRecoveryData. */
  export interface PointInTimeRecoveryData {
    earliest_point_in_time_recovery_time?: string;
  }

  /** PostgreSQLConnectionURI. */
  export interface PostgreSQLConnectionURI {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: PostgreSQLConnectionURIHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: PostgreSQLConnectionURIAuthentication;
    certificate?: PostgreSQLConnectionURICertificate;
    /** Name of the database to use in the URI connection. */
    database?: string;
  }

  /** PostgreSQLConnectionURIAuthentication. */
  export interface PostgreSQLConnectionURIAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** PostgreSQLConnectionURICertificate. */
  export interface PostgreSQLConnectionURICertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** PostgreSQLConnectionURIHostsItem. */
  export interface PostgreSQLConnectionURIHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** RabbitMQConnectionAMQPS. */
  export interface RabbitMQConnectionAMQPS {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: RabbitMQConnectionAMQPSHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: RabbitMQConnectionAMQPSAuthentication;
    certificate?: RabbitMQConnectionAMQPSCertificate;
  }

  /** RabbitMQConnectionAMQPSAuthentication. */
  export interface RabbitMQConnectionAMQPSAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** RabbitMQConnectionAMQPSCertificate. */
  export interface RabbitMQConnectionAMQPSCertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** RabbitMQConnectionAMQPSHostsItem. */
  export interface RabbitMQConnectionAMQPSHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** RabbitMQConnectionHTTPS. */
  export interface RabbitMQConnectionHTTPS {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: RabbitMQConnectionHTTPSHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: RabbitMQConnectionHTTPSAuthentication;
    certificate?: RabbitMQConnectionHTTPSCertificate;
    /** Indicates the address is accessible by browser, for the RabbitMQ Management UI. */
    browser_accessible?: boolean;
  }

  /** RabbitMQConnectionHTTPSAuthentication. */
  export interface RabbitMQConnectionHTTPSAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** RabbitMQConnectionHTTPSCertificate. */
  export interface RabbitMQConnectionHTTPSCertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** RabbitMQConnectionHTTPSHostsItem. */
  export interface RabbitMQConnectionHTTPSHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** RabbitMQConnectionMQTTS. */
  export interface RabbitMQConnectionMQTTS {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: RabbitMQConnectionMQTTSHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: RabbitMQConnectionMQTTSAuthentication;
    certificate?: RabbitMQConnectionMQTTSCertificate;
  }

  /** RabbitMQConnectionMQTTSAuthentication. */
  export interface RabbitMQConnectionMQTTSAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** RabbitMQConnectionMQTTSCertificate. */
  export interface RabbitMQConnectionMQTTSCertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** RabbitMQConnectionMQTTSHostsItem. */
  export interface RabbitMQConnectionMQTTSHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** RabbitMQConnectionStompSSL. */
  export interface RabbitMQConnectionStompSSL {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    hosts?: RabbitMQConnectionStompSSLHostsItem[];
    authentication?: RabbitMQConnectionStompSSLAuthentication;
    certificate?: RabbitMQConnectionStompSSLCertificate;
    /** Indicates ssl is required for the connection. */
    ssl?: boolean;
  }

  /** RabbitMQConnectionStompSSLAuthentication. */
  export interface RabbitMQConnectionStompSSLAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** RabbitMQConnectionStompSSLCertificate. */
  export interface RabbitMQConnectionStompSSLCertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** RabbitMQConnectionStompSSLHostsItem. */
  export interface RabbitMQConnectionStompSSLHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** RedisConnectionURI. */
  export interface RedisConnectionURI {
    /** Type of connection being described. */
    type?: string;
    composed?: string[];
    /** Scheme/protocol for URI connection. */
    scheme?: string;
    hosts?: RedisConnectionURIHostsItem[];
    /** Path for URI connection. */
    path?: string;
    /** Query options to add to the URI connection. */
    query_options?: JsonObject;
    authentication?: RedisConnectionURIAuthentication;
    certificate?: RedisConnectionURICertificate;
    /** Number of the database to use in the URI connection. */
    database?: number;
  }

  /** RedisConnectionURIAuthentication. */
  export interface RedisConnectionURIAuthentication {
    /** Authentication method for this credential. */
    method?: string;
    /** Username part of credential. */
    username?: string;
    /** Password part of credential. */
    password?: string;
  }

  /** RedisConnectionURICertificate. */
  export interface RedisConnectionURICertificate {
    /** Name associated with the certificate. */
    name?: string;
    /** Base64 encoded version of the certificate. */
    certificate_base64?: string;
  }

  /** RedisConnectionURIHostsItem. */
  export interface RedisConnectionURIHostsItem {
    /** Hostname for connection. */
    hostname?: string;
    /** Port number for connection. */
    port?: number;
  }

  /** Remotes. */
  export interface Remotes {
    /** Leader ID, if applicable. */
    leader?: string;
    /** Replica IDs, if applicable. */
    replicas?: string[];
  }

  /** ResyncReplicaResponse. */
  export interface ResyncReplicaResponse {
    task?: Task;
  }

  /** SetAllowlistResponse. */
  export interface SetAllowlistResponse {
    task?: Task;
  }

  /** SetAutoscalingConditionsResponse. */
  export interface SetAutoscalingConditionsResponse {
    task?: Task;
  }

  /** SetCPUGroupCPU. */
  export interface SetCPUGroupCPU {
    /** Number of allocated CPUs. */
    allocation_count?: number;
  }

  /** SetConfigurationConfiguration. */
  export interface SetConfigurationConfiguration {
  }

  /** SetDeploymentScalingGroupRequest. */
  export interface SetDeploymentScalingGroupRequest {
  }

  /** SetDeploymentScalingGroupResponse. */
  export interface SetDeploymentScalingGroupResponse {
    task?: Task;
  }

  /** SetDiskGroupDisk. */
  export interface SetDiskGroupDisk {
    /** Allocated storage in MB. */
    allocation_mb?: number;
  }

  /** SetMembersGroupMembers. */
  export interface SetMembersGroupMembers {
    /** Allocated number of members. */
    allocation_count?: number;
  }

  /** SetMemoryGroupMemory. */
  export interface SetMemoryGroupMemory {
    /** Allocated memory in MB. */
    allocation_mb?: number;
  }

  /** SetPromotionPromotion. */
  export interface SetPromotionPromotion {
  }

  /** SetPromotionResponse. */
  export interface SetPromotionResponse {
    task?: Task;
  }

  /** StartOndemandBackupResponse. */
  export interface StartOndemandBackupResponse {
    task?: Task;
  }

  /** Task. */
  export interface Task {
    /** ID of the task. */
    id?: string;
    /** Human-readable description of the task. */
    description?: string;
    /** The status of the task. */
    status?: string;
    /** ID of the deployment the task is being performed on. */
    deployment_id?: string;
    /** Indicator as percentage of progress of the task. */
    progress_percent?: number;
    /** Date and time when the task was created. */
    created_at?: string;
  }

  /** Tasks. */
  export interface Tasks {
    tasks?: Task[];
  }

  /** UpdateDatabaseConfigurationResponse. */
  export interface UpdateDatabaseConfigurationResponse {
    task?: Task;
  }

  /** AutoscalingSetGroupAutoscalingAutoscalingCPUGroup. */
  export interface AutoscalingSetGroupAutoscalingAutoscalingCPUGroup extends AutoscalingSetGroupAutoscaling {
    cpu?: AutoscalingCPUGroupCPU;
  }

  /** AutoscalingSetGroupAutoscalingAutoscalingDiskGroup. */
  export interface AutoscalingSetGroupAutoscalingAutoscalingDiskGroup extends AutoscalingSetGroupAutoscaling {
    disk?: AutoscalingDiskGroupDisk;
  }

  /** AutoscalingSetGroupAutoscalingAutoscalingMemoryGroup. */
  export interface AutoscalingSetGroupAutoscalingAutoscalingMemoryGroup extends AutoscalingSetGroupAutoscaling {
    memory?: AutoscalingMemoryGroupMemory;
  }

  /** Elasticsearch Connection Strings. */
  export interface ConnectionConnectionElasticsearchConnection extends ConnectionConnection {
    /** Elasticsearch Connection information for drivers and libraries. */
    https: ElasticsearchConnectionHTTPS;
    /** Connection information for cURL. */
    cli: ConnectionCLI;
  }

  /** etcd3 Connection Strings. */
  export interface ConnectionConnectionEtcdConnection extends ConnectionConnection {
    /** GRPC(etcd3) Connection information for drivers and libraries. */
    grpc: GRPCConnectionURI;
    /** Connection information for etcdctl. */
    cli: ConnectionCLI;
  }

  /** MongoDB Connection Strings. */
  export interface ConnectionConnectionMongoDBConnection extends ConnectionConnection {
    /** MongoDB Connection information for drivers and libraries. */
    mongodb: MongoDBConnectionURI;
    /** Connection information for mongo shell. */
    cli: ConnectionCLI;
  }

  /** PostgreSQL and EnterpriseDB Connection Strings. */
  export interface ConnectionConnectionPostgreSQLConnection extends ConnectionConnection {
    /** Connection information for drivers and libraries. */
    postgres: PostgreSQLConnectionURI;
    /** Connection information for psql. */
    cli: ConnectionCLI;
  }

  /** RabbitMQ Connection Strings. */
  export interface ConnectionConnectionRabbitMQConnection extends ConnectionConnection {
    /** RabbitMQ Connection information for AMQPS drivers and libraries. */
    amqps: RabbitMQConnectionAMQPS;
    /** RabbitMQ Connection information for MQTTS drivers and libraries. */
    mqtts: RabbitMQConnectionMQTTS;
    /** RabbitMQ Connection information for STOMP drivers and libraries. */
    stomp_ssl: RabbitMQConnectionStompSSL;
    /** RabbitMQ Connection information for HTTPS. */
    https: RabbitMQConnectionHTTPS;
    /** Connection information for rabbitmqadmin. */
    cli: ConnectionCLI;
  }

  /** Redis Connection Strings. */
  export interface ConnectionConnectionRedisConnection extends ConnectionConnection {
    /** Connection information for drivers and libraries. */
    rediss: RedisConnectionURI;
    /** Connection information for a Redis CLI client. */
    cli: ConnectionCLI;
  }

  /** PostgreSQL and EnterpriseDB Configuration. */
  export interface SetConfigurationConfigurationPGConfiguration extends SetConfigurationConfiguration {
    /** Maximum connections allowed. */
    max_connections?: number;
    /** Max number of transactions that can be in the "prepared" state simultaneously. */
    max_prepared_transactions?: number;
    /** Deadlock timeout in ms. The time to wait on a lock before checking for deadlock.  Also the duration where
     *  lock waits will be logged.
     */
    deadlock_timeout?: number;
    /** Number of simultaneous requests that can be handled efficiently by the disk subsystem. */
    effective_io_concurrency?: number;
    /** Maximum number of simultaneously defined replication slots. */
    max_replication_slots?: number;
    /** Maximum number of simultaneously running WAL sender processes. */
    max_wal_senders?: number;
    /** The number of 8kB shared memory buffers used by the server.  Set to 1/4 of memory.  Setting too high will
     *  cause crashes or prevent the database from starting.
     */
    shared_buffers?: number;
    /** Sets the current transaction's synchronization level.  Off can result in data loss.  remote_write with
     *  enable synchronous replication which will impact performance and availabilty.
     */
    synchronous_commit?: string;
    /** WAL level.  Set to logical to use logical decoding or logical replication. */
    wal_level?: string;
    /** The number of seconds to wait before forces a switch to the next WAL file if a new file has not been
     *  started.
     */
    archive_timeout?: number;
    /** The minimum number of milliseconds for execution time above which statements will be logged. */
    log_min_duration_statement?: number;
  }

  /** Redis Configuration. */
  export interface SetConfigurationConfigurationRedisConfiguration extends SetConfigurationConfiguration {
    /** The maximum memory Redis should use, as bytes. */
    'maxmemory-redis'?: number;
    /** The policy with which Redis evicts keys when maximum memory is reached. */
    'maxmemory-policy'?: string;
    /** If set to yes this will enable AOF persistence. */
    appendonly?: string;
    /** The maximum memory Redis should use, as bytes. */
    'maxmemory-samples'?: number;
    /** Whether or not to stop accepting writes when background persistence actions fail. */
    'stop-writes-on-bgsave-error'?: string;
  }

  /** SetDeploymentScalingGroupRequestSetCPUGroup. */
  export interface SetDeploymentScalingGroupRequestSetCPUGroup extends SetDeploymentScalingGroupRequest {
    cpu?: SetCPUGroupCPU;
  }

  /** SetDeploymentScalingGroupRequestSetDiskGroup. */
  export interface SetDeploymentScalingGroupRequestSetDiskGroup extends SetDeploymentScalingGroupRequest {
    disk?: SetDiskGroupDisk;
  }

  /** SetDeploymentScalingGroupRequestSetMembersGroup. */
  export interface SetDeploymentScalingGroupRequestSetMembersGroup extends SetDeploymentScalingGroupRequest {
    members?: SetMembersGroupMembers;
  }

  /** SetDeploymentScalingGroupRequestSetMemoryGroup. */
  export interface SetDeploymentScalingGroupRequestSetMemoryGroup extends SetDeploymentScalingGroupRequest {
    memory?: SetMemoryGroupMemory;
  }

  /** Promotes a read-only replica to a full deployment. */
  export interface SetPromotionPromotionPromote extends SetPromotionPromotion {
    /** Promotion options. */
    promotion?: JsonObject;
  }

  /** Promotes a read-only replica to a full deployment running a new database version. */
  export interface SetPromotionPromotionUpgradePromote extends SetPromotionPromotion {
    /** Promotion and Upgrade options. */
    promotion?: JsonObject;
  }

}

export = CloudDatabasesV5;
