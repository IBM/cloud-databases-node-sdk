/**
* @jest-environment node
*/
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

const CloudDatabasesV5 = require('../dist/cloud-databases/v5');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../test/resources/auth-helper.js');

//
// This file provides an example of how to use the Cloud Databases service.
//
// The following configuration properties are assumed to be defined:
// CLOUD_DATABASES_URL=<service base url>
// CLOUD_DATABASES_AUTH_TYPE=iam
// CLOUD_DATABASES_APIKEY=<IAM apikey>
// CLOUD_DATABASES_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'cloud_databases.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log and console.warn
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

// testcase timeout value (200s).
const timeout = 200000;

const autoScalingGroupId = 'member';
const ipAddress1 = '195.212.0.0/16';
const ipAddress3 = '172.16.0.0/16';
const username = 'exampleUsername';
const password = 'examplePassword';
const newPassowrd = 'exampleNewPassword';
const userType = 'database';


let cloudDatabasesServiceRef;
let deploymentId;
let replicaId;

// Global variables to hold link values
let taskIdLink;
let backupIdLink;
let scalingGroupIdLink;

async function waitForTask(taskId) {
  let complete = false;
  for (let attempts = 0; !complete && attempts < 30; attempts++) {
    const res = await cloudDatabasesServiceRef.getTask({
      id: taskId,
    });

    expect(res.status).toEqual(200);
    expect(res.result).not.toBeNull();

    if (res.result.task == null) {
      complete = true;
    } else {
      switch (res.result.task.status) {
        case 'completed':
        case 'failed':
          complete = true;
          expect(res.result.task.status).toEqual('completed');
          break;
        case 'queued':
        case 'running':
          break;
        default:
          console.log('status is', res.result.task.status);
          break;
      }
    }

    await new Promise(r => setTimeout(r, 2000));
  }
}

describe('CloudDatabasesV5', () => {

  // begin-common

  const cloudDatabasesService = CloudDatabasesV5.newInstance({});

  // end-common

  cloudDatabasesServiceRef = cloudDatabasesService;

  const config = readExternalSources(CloudDatabasesV5.DEFAULT_SERVICE_NAME);

  deploymentId = config.deploymentId;
  expect(deploymentId).not.toBeNull();

  replicaId = config.replicaId;
  expect(replicaId).not.toBeNull();

  jest.setTimeout(timeout);

  test('addAllowlistEntry request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('addAllowlistEntry() result:');
    // begin-addAllowlistEntry

    const allowlistEntryModel = {
      address: ipAddress3,
      description: 'Dev IP space 3',
    };

    const params = {
      id: deploymentId,
      ipAddress: allowlistEntryModel,
    };

    cloudDatabasesService.addAllowlistEntry(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-addAllowlistEntry
  });
  test('deleteAllowlistEntry request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('deleteAllowlistEntry() result:');
    // begin-deleteAllowlistEntry

    const params = {
      id: deploymentId,
      ipaddress: ipAddress3,
    };

    cloudDatabasesService.deleteAllowlistEntry(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-deleteAllowlistEntry
  });
  test('createDatabaseUser request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('createDatabaseUser() result:');
    // begin-createDatabaseUser

    const createDatabaseUserRequestUserModel = {
      username: username,
      password: password,
    };

    const params = {
      id: deploymentId,
      userType: userType,
      user: createDatabaseUserRequestUserModel,
    };

    cloudDatabasesService.createDatabaseUser(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-createDatabaseUser
  });
  test('changeUserPassword request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('changeUserPassword() result:');
    // begin-changeUserPassword

    const aPasswordSettingUserModel = {
      password: newPassowrd,
    };

    const params = {
      id: deploymentId,
      userType: userType,
      username: username,
      user: aPasswordSettingUserModel,
    };

    cloudDatabasesService.changeUserPassword(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-changeUserPassword
  });
  test('deleteDatabaseUser request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('deleteDatabaseUser() result:');
    // begin-deleteDatabaseUser

    const params = {
      id: deploymentId,
      userType: userType,
      username: username,
    };

    cloudDatabasesService.deleteDatabaseUser(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-deleteDatabaseUser
  });
  test('killConnections request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('killConnections() result:');
    // begin-killConnections

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.killConnections(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-killConnections
  });
  test('setAllowlist request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('setAllowlist() result:');
    // begin-setAllowlist

    const allowlistEntryModel = {
      address: ipAddress1,
      description: 'Dev IP space 1'
    };

    const params = {
      id: deploymentId,
      ipAddresses: [allowlistEntryModel],
      ifMatch: 'exampleETag',
    };

    cloudDatabasesService.setAllowlist(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-setAllowlist
  });
  test('setAutoscalingConditions request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('setAutoscalingConditions() result:');
    // begin-setAutoscalingConditions

    const autoscalingMemoryGroupMemoryScalersIoUtilizationModel = {
      enabled: true,
      over_period: '5m',
      above_percent: 90,
    };

    const autoscalingMemoryGroupMemoryScalersModel = {
      io_utilization: autoscalingMemoryGroupMemoryScalersIoUtilizationModel,
    };

    const autoscalingMemoryGroupMemoryRateModel = {
      increase_percent: 10.0,
      period_seconds: 300,
      limit_mb_per_member: 114432,
      units: 'mb',
    };

    const autoscalingMemoryGroupMemoryModel = {
      scalers: autoscalingMemoryGroupMemoryScalersModel,
      rate: autoscalingMemoryGroupMemoryRateModel,
    };

    const autoscalingSetGroupAutoscalingModel = {
      memory: autoscalingMemoryGroupMemoryModel,
    };

    const params = {
      id: deploymentId,
      groupId: autoScalingGroupId,
      autoscaling: autoscalingSetGroupAutoscalingModel,
    };

    cloudDatabasesService.setAutoscalingConditions(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-setAutoscalingConditions
  });
  test('updateDatabaseConfiguration request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('updateDatabaseConfiguration() result:');
    // begin-updateDatabaseConfiguration

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

    const params = {
      id: deploymentId,
      configuration: setConfigurationConfigurationModel,
    };

    cloudDatabasesService.updateDatabaseConfiguration(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-updateDatabaseConfiguration
  });
  test('listDeployables request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('listDeployables() result:');
    // begin-listDeployables

    cloudDatabasesService.listDeployables({})
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-listDeployables
  });
  test('listRegions request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('listRegions() result:');
    // begin-listRegions

    cloudDatabasesService.listRegions({})
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-listRegions
  });
  test('getDeploymentInfo request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getDeploymentInfo() result:');
    // begin-getDeploymentInfo

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.getDeploymentInfo(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getDeploymentInfo
  });
  test('listRemotes request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('listRemotes() result:');
    // begin-listRemotes

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.listRemotes(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-listRemotes
  });
  test('resyncReplica request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-resyncReplica

    const params = {
      id: replicaId,
    };

    cloudDatabasesService.resyncReplica(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-resyncReplica
  });
  test('setPromotion request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => done());
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('setPromotion() result:');
    // begin-setPromotion

    const promotion = {
      skip_initial_backup: true,
    };

    const setPromotionPromotionModel = {
      promotion: promotion,
    };

    const params = {
      id: replicaId,
      promotion: setPromotionPromotionModel,
    };

    cloudDatabasesService.setPromotion(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-setPromotion
  });
  test('listDeploymentTasks request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('listDeploymentTasks() result:');
    // begin-listDeploymentTasks

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.listDeploymentTasks(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-listDeploymentTasks
  });
  test('getTask request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getTask() result:');
    // begin-getTask

    const params = {
      id: taskIdLink,
    };

    cloudDatabasesService.getTask(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getTask
  });
  test('listDeploymentBackups request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      backupIdLink = responseBody.backups[0].id;

      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('listDeploymentBackups() result:');
    // begin-listDeploymentBackups

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.listDeploymentBackups(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-listDeploymentBackups
  });
  test('getBackupInfo request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getBackupInfo() result:');
    // begin-getBackupInfo

    const params = {
      backupId: backupIdLink,
    };

    cloudDatabasesService.getBackupInfo(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getBackupInfo
  });
  test('startOndemandBackup request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('startOndemandBackup() result:');
    // begin-startOndemandBackup

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.startOndemandBackup(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-startOndemandBackup
  });
  test('getPitRdata request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getPitRdata() result:');
    // begin-getPITRdata

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.getPitRdata(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getPITRdata
  });
  test('getConnection request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getConnection() result:');
    // begin-getConnection

    const params = {
      id: deploymentId,
      userType: userType,
      userId: 'exampleUserID',
      endpointType: 'public',
      certificateRoot: 'exampleCertRoot'
    };

    cloudDatabasesService.getConnection(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getConnection
  });
  test('completeConnection request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('completeConnection() result:');
    // begin-completeConnection

    const params = {
      id: deploymentId,
      userType: userType,
      userId: 'exampleUserID',
      endpointType: 'public',
      password: 'examplePassword',
      certificateRoot: 'exampleCertRoot',
    };

    cloudDatabasesService.completeConnection(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-completeConnection
  });
  test('listDeploymentScalingGroups request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      scalingGroupIdLink = responseBody.groups[0].id;

      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('listDeploymentScalingGroups() result:');
    // begin-listDeploymentScalingGroups

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.listDeploymentScalingGroups(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-listDeploymentScalingGroups
  });
  test('setDeploymentScalingGroup request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;

      waitForTask(taskIdLink)
        .finally(() => {
          const setMemoryGroupMemoryModel = {
            allocation_mb: 114432,
          };

          const setDeploymentScalingGroupRequestModel = {
            memory: setMemoryGroupMemoryModel,
          };

          const params = {
            id: deploymentId,
            groupId: scalingGroupIdLink,
            setDeploymentScalingGroupRequest: setDeploymentScalingGroupRequestModel,
          };

          cloudDatabasesService.setDeploymentScalingGroup(params)
            .finally(() => {
              waitForTask(taskIdLink)
                .finally(() => done());
            });
        })
    });
    consoleWarnMock.mockImplementation(output => {
      const setMemoryGroupMemoryModel = {
        allocation_mb: 114432,
      };

      const setDeploymentScalingGroupRequestModel = {
        memory: setMemoryGroupMemoryModel,
      };

      const params = {
        id: deploymentId,
        groupId: scalingGroupIdLink,
        setDeploymentScalingGroupRequest: setDeploymentScalingGroupRequestModel,
      };

      cloudDatabasesService.setDeploymentScalingGroup(params)
        .finally(() => {
          waitForTask(taskIdLink)
            .finally(() => done());
        });
    });

    originalLog('setDeploymentScalingGroup() result:');
    // begin-setDeploymentScalingGroup

    const setMemoryGroupMemoryModel = {
      allocation_mb: 114688,
    };

    const setDeploymentScalingGroupRequestModel = {
      memory: setMemoryGroupMemoryModel,
    };

    const params = {
      id: deploymentId,
      groupId: scalingGroupIdLink,
      setDeploymentScalingGroupRequest: setDeploymentScalingGroupRequestModel,
    };

    cloudDatabasesService.setDeploymentScalingGroup(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-setDeploymentScalingGroup
  });
  test('getDefaultScalingGroups request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getDefaultScalingGroups() result:');
    // begin-getDefaultScalingGroups

    const params = {
      type: 'postgresql',
    };

    cloudDatabasesService.getDefaultScalingGroups(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getDefaultScalingGroups
  });
  test('getAutoscalingConditions request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getAutoscalingConditions() result:');
    // begin-getAutoscalingConditions

    const params = {
      id: deploymentId,
      groupId: autoScalingGroupId,
    };

    cloudDatabasesService.getAutoscalingConditions(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getAutoscalingConditions
  });
  test('getAllowlist request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    originalLog('getAllowlist() result:');
    // begin-getAllowlist

    const params = {
      id: deploymentId,
    };

    cloudDatabasesService.getAllowlist(params)
      .then(res => {
        console.log(JSON.stringify(res.result, null, 2));
      })
      .catch(err => {
        console.warn(err)
      });

    // end-getAllowlist
  });
});
