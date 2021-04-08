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
'use strict';

// need to import the whole package to mock getAuthenticatorFromEnvironment
const core = require('ibm-cloud-sdk-core');
const { NoAuthAuthenticator, unitTestUtils } = core;

const CloudDatabasesV5 = require('../../dist/cloud-databases/v5');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'ibm.com/123456',
};

const cloudDatabasesService = new CloudDatabasesV5(service);

// dont actually create a request
const createRequestMock = jest.spyOn(cloudDatabasesService, 'createRequest');
createRequestMock.mockImplementation(() => Promise.resolve());

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(core, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

afterEach(() => {
  createRequestMock.mockClear();
  getAuthenticatorMock.mockClear();
});

describe('CloudDatabasesV5', () => {
  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = CloudDatabasesV5.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(CloudDatabasesV5.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(CloudDatabasesV5.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(CloudDatabasesV5);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = CloudDatabasesV5.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(CloudDatabasesV5);
    });
  });
  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new CloudDatabasesV5(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new CloudDatabasesV5(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(CloudDatabasesV5.DEFAULT_SERVICE_URL);
    });
  });
  describe('listDeployables', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listDeployables
        const params = {};

        const listDeployablesResult = cloudDatabasesService.listDeployables(params);

        // all methods should return a Promise
        expectToBePromise(listDeployablesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployables', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.listDeployables(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        cloudDatabasesService.listDeployables({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('listRegions', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listRegions
        const params = {};

        const listRegionsResult = cloudDatabasesService.listRegions(params);

        // all methods should return a Promise
        expectToBePromise(listRegionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/regions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.listRegions(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        cloudDatabasesService.listRegions({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });
  describe('getDeploymentInfo', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getDeploymentInfo
        const id = 'testString';
        const params = {
          id: id,
        };

        const getDeploymentInfoResult = cloudDatabasesService.getDeploymentInfo(params);

        // all methods should return a Promise
        expectToBePromise(getDeploymentInfoResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getDeploymentInfo(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getDeploymentInfo({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getDeploymentInfoPromise = cloudDatabasesService.getDeploymentInfo();
        expectToBePromise(getDeploymentInfoPromise);

        getDeploymentInfoPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('createDatabaseUser', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CreateDatabaseUserRequestUser
      const createDatabaseUserRequestUserModel = {
        user_type: 'database',
        username: 'james',
        password: 'kickoutthe',
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation createDatabaseUser
        const id = 'testString';
        const userType = 'database';
        const user = createDatabaseUserRequestUserModel;
        const params = {
          id: id,
          userType: userType,
          user: user,
        };

        const createDatabaseUserResult = cloudDatabasesService.createDatabaseUser(params);

        // all methods should return a Promise
        expectToBePromise(createDatabaseUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/users/{user_type}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['user']).toEqual(user);
        expect(options.path['id']).toEqual(id);
        expect(options.path['user_type']).toEqual(userType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userType = 'database';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          userType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.createDatabaseUser(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.createDatabaseUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const createDatabaseUserPromise = cloudDatabasesService.createDatabaseUser();
        expectToBePromise(createDatabaseUserPromise);

        createDatabaseUserPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('changeUserPassword', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // APasswordSettingUser
      const aPasswordSettingUserModel = {
        password: 'xyzzyyzzyx',
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation changeUserPassword
        const id = 'testString';
        const userType = 'database';
        const username = 'james';
        const user = aPasswordSettingUserModel;
        const params = {
          id: id,
          userType: userType,
          username: username,
          user: user,
        };

        const changeUserPasswordResult = cloudDatabasesService.changeUserPassword(params);

        // all methods should return a Promise
        expectToBePromise(changeUserPasswordResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/users/{user_type}/{username}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['user']).toEqual(user);
        expect(options.path['id']).toEqual(id);
        expect(options.path['user_type']).toEqual(userType);
        expect(options.path['username']).toEqual(username);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userType = 'database';
        const username = 'james';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          userType,
          username,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.changeUserPassword(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.changeUserPassword({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const changeUserPasswordPromise = cloudDatabasesService.changeUserPassword();
        expectToBePromise(changeUserPasswordPromise);

        changeUserPasswordPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteDatabaseUser', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteDatabaseUser
        const id = 'testString';
        const userType = 'database';
        const username = 'james';
        const params = {
          id: id,
          userType: userType,
          username: username,
        };

        const deleteDatabaseUserResult = cloudDatabasesService.deleteDatabaseUser(params);

        // all methods should return a Promise
        expectToBePromise(deleteDatabaseUserResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/users/{user_type}/{username}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
        expect(options.path['user_type']).toEqual(userType);
        expect(options.path['username']).toEqual(username);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userType = 'database';
        const username = 'james';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          userType,
          username,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.deleteDatabaseUser(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.deleteDatabaseUser({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteDatabaseUserPromise = cloudDatabasesService.deleteDatabaseUser();
        expectToBePromise(deleteDatabaseUserPromise);

        deleteDatabaseUserPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('updateDatabaseConfiguration', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SetConfigurationConfigurationPGConfiguration
      const setConfigurationConfigurationModel = {
        max_connections: 200,
        max_prepared_transactions: 0,
        deadlock_timeout: 100,
        effective_io_concurrency: 1,
        max_replication_slots: 10,
        max_wal_senders: 12,
        shared_buffers: 16,
        synchronous_commit: 'local',
        wal_level: 'hot_standby',
        archive_timeout: 300,
        log_min_duration_statement: 100,
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation updateDatabaseConfiguration
        const id = 'testString';
        const configuration = setConfigurationConfigurationModel;
        const params = {
          id: id,
          configuration: configuration,
        };

        const updateDatabaseConfigurationResult = cloudDatabasesService.updateDatabaseConfiguration(
          params
        );

        // all methods should return a Promise
        expectToBePromise(updateDatabaseConfigurationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/configuration', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['configuration']).toEqual(configuration);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const configuration = setConfigurationConfigurationModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          configuration,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.updateDatabaseConfiguration(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.updateDatabaseConfiguration({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const updateDatabaseConfigurationPromise = cloudDatabasesService.updateDatabaseConfiguration();
        expectToBePromise(updateDatabaseConfigurationPromise);

        updateDatabaseConfigurationPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listRemotes', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listRemotes
        const id = 'testString';
        const params = {
          id: id,
        };

        const listRemotesResult = cloudDatabasesService.listRemotes(params);

        // all methods should return a Promise
        expectToBePromise(listRemotesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/remotes', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.listRemotes(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.listRemotes({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listRemotesPromise = cloudDatabasesService.listRemotes();
        expectToBePromise(listRemotesPromise);

        listRemotesPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('resyncReplica', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation resyncReplica
        const id = 'testString';
        const params = {
          id: id,
        };

        const resyncReplicaResult = cloudDatabasesService.resyncReplica(params);

        // all methods should return a Promise
        expectToBePromise(resyncReplicaResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/remotes/resync', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.resyncReplica(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.resyncReplica({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const resyncReplicaPromise = cloudDatabasesService.resyncReplica();
        expectToBePromise(resyncReplicaPromise);

        resyncReplicaPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('setPromotion', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SetPromotionPromotionPromote
      const setPromotionPromotionModel = {
        promotion: { 'key1': { foo: 'bar' } },
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation setPromotion
        const id = 'testString';
        const promotion = setPromotionPromotionModel;
        const params = {
          id: id,
          promotion: promotion,
        };

        const setPromotionResult = cloudDatabasesService.setPromotion(params);

        // all methods should return a Promise
        expectToBePromise(setPromotionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/remotes/promotion', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['Promotion']).toEqual(promotion);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const promotion = setPromotionPromotionModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          promotion,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.setPromotion(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.setPromotion({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const setPromotionPromise = cloudDatabasesService.setPromotion();
        expectToBePromise(setPromotionPromise);

        setPromotionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listDeploymentTasks', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listDeploymentTasks
        const id = 'testString';
        const params = {
          id: id,
        };

        const listDeploymentTasksResult = cloudDatabasesService.listDeploymentTasks(params);

        // all methods should return a Promise
        expectToBePromise(listDeploymentTasksResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/tasks', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.listDeploymentTasks(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.listDeploymentTasks({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listDeploymentTasksPromise = cloudDatabasesService.listDeploymentTasks();
        expectToBePromise(listDeploymentTasksPromise);

        listDeploymentTasksPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getTask', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getTask
        const id = 'testString';
        const params = {
          id: id,
        };

        const getTaskResult = cloudDatabasesService.getTask(params);

        // all methods should return a Promise
        expectToBePromise(getTaskResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/tasks/{id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getTask(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getTask({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getTaskPromise = cloudDatabasesService.getTask();
        expectToBePromise(getTaskPromise);

        getTaskPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getBackupInfo', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getBackupInfo
        const backupId = 'testString';
        const params = {
          backupId: backupId,
        };

        const getBackupInfoResult = cloudDatabasesService.getBackupInfo(params);

        // all methods should return a Promise
        expectToBePromise(getBackupInfoResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/backups/{backup_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['backup_id']).toEqual(backupId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const backupId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          backupId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getBackupInfo(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getBackupInfo({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getBackupInfoPromise = cloudDatabasesService.getBackupInfo();
        expectToBePromise(getBackupInfoPromise);

        getBackupInfoPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listDeploymentBackups', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listDeploymentBackups
        const id = 'testString';
        const params = {
          id: id,
        };

        const listDeploymentBackupsResult = cloudDatabasesService.listDeploymentBackups(params);

        // all methods should return a Promise
        expectToBePromise(listDeploymentBackupsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/backups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.listDeploymentBackups(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.listDeploymentBackups({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listDeploymentBackupsPromise = cloudDatabasesService.listDeploymentBackups();
        expectToBePromise(listDeploymentBackupsPromise);

        listDeploymentBackupsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('startOndemandBackup', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation startOndemandBackup
        const id = 'testString';
        const params = {
          id: id,
        };

        const startOndemandBackupResult = cloudDatabasesService.startOndemandBackup(params);

        // all methods should return a Promise
        expectToBePromise(startOndemandBackupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/backups', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.startOndemandBackup(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.startOndemandBackup({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const startOndemandBackupPromise = cloudDatabasesService.startOndemandBackup();
        expectToBePromise(startOndemandBackupPromise);

        startOndemandBackupPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getPitRdata', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getPitRdata
        const id = 'testString';
        const params = {
          id: id,
        };

        const getPitRdataResult = cloudDatabasesService.getPitRdata(params);

        // all methods should return a Promise
        expectToBePromise(getPitRdataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/point_in_time_recovery_data', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getPitRdata(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getPitRdata({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getPitRdataPromise = cloudDatabasesService.getPitRdata();
        expectToBePromise(getPitRdataPromise);

        getPitRdataPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getConnection', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getConnection
        const id = 'testString';
        const userType = 'database';
        const userId = 'testString';
        const endpointType = 'public';
        const certificateRoot = 'testString';
        const params = {
          id: id,
          userType: userType,
          userId: userId,
          endpointType: endpointType,
          certificateRoot: certificateRoot,
        };

        const getConnectionResult = cloudDatabasesService.getConnection(params);

        // all methods should return a Promise
        expectToBePromise(getConnectionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/deployments/{id}/users/{user_type}/{user_id}/connections/{endpoint_type}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.qs['certificate_root']).toEqual(certificateRoot);
        expect(options.path['id']).toEqual(id);
        expect(options.path['user_type']).toEqual(userType);
        expect(options.path['user_id']).toEqual(userId);
        expect(options.path['endpoint_type']).toEqual(endpointType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userType = 'database';
        const userId = 'testString';
        const endpointType = 'public';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          userType,
          userId,
          endpointType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getConnection(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getConnection({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getConnectionPromise = cloudDatabasesService.getConnection();
        expectToBePromise(getConnectionPromise);

        getConnectionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('completeConnection', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation completeConnection
        const id = 'testString';
        const userType = 'database';
        const userId = 'testString';
        const endpointType = 'public';
        const password = 'providedpassword';
        const certificateRoot = 'testString';
        const params = {
          id: id,
          userType: userType,
          userId: userId,
          endpointType: endpointType,
          password: password,
          certificateRoot: certificateRoot,
        };

        const completeConnectionResult = cloudDatabasesService.completeConnection(params);

        // all methods should return a Promise
        expectToBePromise(completeConnectionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/deployments/{id}/users/{user_type}/{user_id}/connections/{endpoint_type}',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['password']).toEqual(password);
        expect(options.body['certificate_root']).toEqual(certificateRoot);
        expect(options.path['id']).toEqual(id);
        expect(options.path['user_type']).toEqual(userType);
        expect(options.path['user_id']).toEqual(userId);
        expect(options.path['endpoint_type']).toEqual(endpointType);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userType = 'database';
        const userId = 'testString';
        const endpointType = 'public';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          userType,
          userId,
          endpointType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.completeConnection(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.completeConnection({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const completeConnectionPromise = cloudDatabasesService.completeConnection();
        expectToBePromise(completeConnectionPromise);

        completeConnectionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('listDeploymentScalingGroups', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation listDeploymentScalingGroups
        const id = 'testString';
        const params = {
          id: id,
        };

        const listDeploymentScalingGroupsResult = cloudDatabasesService.listDeploymentScalingGroups(
          params
        );

        // all methods should return a Promise
        expectToBePromise(listDeploymentScalingGroupsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/groups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.listDeploymentScalingGroups(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.listDeploymentScalingGroups({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const listDeploymentScalingGroupsPromise = cloudDatabasesService.listDeploymentScalingGroups();
        expectToBePromise(listDeploymentScalingGroupsPromise);

        listDeploymentScalingGroupsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getDefaultScalingGroups', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getDefaultScalingGroups
        const type = 'postgresql';
        const params = {
          type: type,
        };

        const getDefaultScalingGroupsResult = cloudDatabasesService.getDefaultScalingGroups(params);

        // all methods should return a Promise
        expectToBePromise(getDefaultScalingGroupsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployables/{type}/groups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['type']).toEqual(type);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const type = 'postgresql';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          type,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getDefaultScalingGroups(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getDefaultScalingGroups({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getDefaultScalingGroupsPromise = cloudDatabasesService.getDefaultScalingGroups();
        expectToBePromise(getDefaultScalingGroupsPromise);

        getDefaultScalingGroupsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('setDeploymentScalingGroup', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // SetMemoryGroupMemory
      const setMemoryGroupMemoryModel = {
        allocation_mb: 4096,
      };

      // SetDeploymentScalingGroupRequestSetMemoryGroup
      const setDeploymentScalingGroupRequestModel = {
        memory: setMemoryGroupMemoryModel,
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation setDeploymentScalingGroup
        const id = 'testString';
        const groupId = 'testString';
        const setDeploymentScalingGroupRequest = setDeploymentScalingGroupRequestModel;
        const params = {
          id: id,
          groupId: groupId,
          setDeploymentScalingGroupRequest: setDeploymentScalingGroupRequest,
        };

        const setDeploymentScalingGroupResult = cloudDatabasesService.setDeploymentScalingGroup(
          params
        );

        // all methods should return a Promise
        expectToBePromise(setDeploymentScalingGroupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/groups/{group_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body).toEqual(setDeploymentScalingGroupRequest);
        expect(options.path['id']).toEqual(id);
        expect(options.path['group_id']).toEqual(groupId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const groupId = 'testString';
        const setDeploymentScalingGroupRequest = setDeploymentScalingGroupRequestModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          groupId,
          setDeploymentScalingGroupRequest,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.setDeploymentScalingGroup(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.setDeploymentScalingGroup({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const setDeploymentScalingGroupPromise = cloudDatabasesService.setDeploymentScalingGroup();
        expectToBePromise(setDeploymentScalingGroupPromise);

        setDeploymentScalingGroupPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getAutoscalingConditions', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAutoscalingConditions
        const id = 'testString';
        const groupId = 'testString';
        const params = {
          id: id,
          groupId: groupId,
        };

        const getAutoscalingConditionsResult = cloudDatabasesService.getAutoscalingConditions(
          params
        );

        // all methods should return a Promise
        expectToBePromise(getAutoscalingConditionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/groups/{group_id}/autoscaling', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
        expect(options.path['group_id']).toEqual(groupId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const groupId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          groupId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getAutoscalingConditions(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getAutoscalingConditions({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getAutoscalingConditionsPromise = cloudDatabasesService.getAutoscalingConditions();
        expectToBePromise(getAutoscalingConditionsPromise);

        getAutoscalingConditionsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('setAutoscalingConditions', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // AutoscalingMemoryGroupMemoryScalersIoUtilization
      const autoscalingMemoryGroupMemoryScalersIoUtilizationModel = {
        enabled: true,
        over_period: '5m',
        above_percent: 90,
      };

      // AutoscalingMemoryGroupMemoryScalers
      const autoscalingMemoryGroupMemoryScalersModel = {
        io_utilization: autoscalingMemoryGroupMemoryScalersIoUtilizationModel,
      };

      // AutoscalingMemoryGroupMemoryRate
      const autoscalingMemoryGroupMemoryRateModel = {
        increase_percent: 10.0,
        period_seconds: 300,
        limit_mb_per_member: 125952,
        units: 'mb',
      };

      // AutoscalingMemoryGroupMemory
      const autoscalingMemoryGroupMemoryModel = {
        scalers: autoscalingMemoryGroupMemoryScalersModel,
        rate: autoscalingMemoryGroupMemoryRateModel,
      };

      // AutoscalingSetGroupAutoscalingAutoscalingMemoryGroup
      const autoscalingSetGroupAutoscalingModel = {
        memory: autoscalingMemoryGroupMemoryModel,
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation setAutoscalingConditions
        const id = 'testString';
        const groupId = 'testString';
        const autoscaling = autoscalingSetGroupAutoscalingModel;
        const params = {
          id: id,
          groupId: groupId,
          autoscaling: autoscaling,
        };

        const setAutoscalingConditionsResult = cloudDatabasesService.setAutoscalingConditions(
          params
        );

        // all methods should return a Promise
        expectToBePromise(setAutoscalingConditionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/groups/{group_id}/autoscaling', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['autoscaling']).toEqual(autoscaling);
        expect(options.path['id']).toEqual(id);
        expect(options.path['group_id']).toEqual(groupId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const groupId = 'testString';
        const autoscaling = autoscalingSetGroupAutoscalingModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          groupId,
          autoscaling,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.setAutoscalingConditions(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.setAutoscalingConditions({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const setAutoscalingConditionsPromise = cloudDatabasesService.setAutoscalingConditions();
        expectToBePromise(setAutoscalingConditionsPromise);

        setAutoscalingConditionsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('killConnections', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation killConnections
        const id = 'testString';
        const params = {
          id: id,
        };

        const killConnectionsResult = cloudDatabasesService.killConnections(params);

        // all methods should return a Promise
        expectToBePromise(killConnectionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/management/database_connections', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.killConnections(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.killConnections({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const killConnectionsPromise = cloudDatabasesService.killConnections();
        expectToBePromise(killConnectionsPromise);

        killConnectionsPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('getAllowlist', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation getAllowlist
        const id = 'testString';
        const params = {
          id: id,
        };

        const getAllowlistResult = cloudDatabasesService.getAllowlist(params);

        // all methods should return a Promise
        expectToBePromise(getAllowlistResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/whitelists/ip_addresses', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.getAllowlist(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.getAllowlist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const getAllowlistPromise = cloudDatabasesService.getAllowlist();
        expectToBePromise(getAllowlistPromise);

        getAllowlistPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('setAllowlist', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // AllowlistEntry
      const allowlistEntryModel = {
        address: '195.212.0.0/16',
        description: 'Dev IP space 1',
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation setAllowlist
        const id = 'testString';
        const ipAddresses = [allowlistEntryModel];
        const ifMatch = 'testString';
        const params = {
          id: id,
          ipAddresses: ipAddresses,
          ifMatch: ifMatch,
        };

        const setAllowlistResult = cloudDatabasesService.setAllowlist(params);

        // all methods should return a Promise
        expectToBePromise(setAllowlistResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/whitelists/ip_addresses', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-Match', ifMatch);
        expect(options.body['ip_addresses']).toEqual(ipAddresses);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.setAllowlist(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.setAllowlist({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const setAllowlistPromise = cloudDatabasesService.setAllowlist();
        expectToBePromise(setAllowlistPromise);

        setAllowlistPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('addAllowlistEntry', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // AllowlistEntry
      const allowlistEntryModel = {
        address: '172.16.0.0/16',
        description: 'Dev IP space 3',
      };

      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation addAllowlistEntry
        const id = 'testString';
        const ipAddress = allowlistEntryModel;
        const params = {
          id: id,
          ipAddress: ipAddress,
        };

        const addAllowlistEntryResult = cloudDatabasesService.addAllowlistEntry(params);

        // all methods should return a Promise
        expectToBePromise(addAllowlistEntryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/deployments/{id}/whitelists/ip_addresses', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['ip_address']).toEqual(ipAddress);
        expect(options.path['id']).toEqual(id);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.addAllowlistEntry(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.addAllowlistEntry({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const addAllowlistEntryPromise = cloudDatabasesService.addAllowlistEntry();
        expectToBePromise(addAllowlistEntryPromise);

        addAllowlistEntryPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteAllowlistEntry', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // Construct the params object for operation deleteAllowlistEntry
        const id = 'testString';
        const ipaddress = 'testString';
        const params = {
          id: id,
          ipaddress: ipaddress,
        };

        const deleteAllowlistEntryResult = cloudDatabasesService.deleteAllowlistEntry(params);

        // all methods should return a Promise
        expectToBePromise(deleteAllowlistEntryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/deployments/{id}/whitelists/ip_addresses/{ipaddress}',
          'DELETE'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['id']).toEqual(id);
        expect(options.path['ipaddress']).toEqual(ipaddress);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const id = 'testString';
        const ipaddress = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const params = {
          id,
          ipaddress,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        cloudDatabasesService.deleteAllowlistEntry(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        let err;
        try {
          await cloudDatabasesService.deleteAllowlistEntry({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        const deleteAllowlistEntryPromise = cloudDatabasesService.deleteAllowlistEntry();
        expectToBePromise(deleteAllowlistEntryPromise);

        deleteAllowlistEntryPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
