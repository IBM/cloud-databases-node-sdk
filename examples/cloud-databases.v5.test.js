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
const configFile = 'cloud_databases_v5.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log and console.warn
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('CloudDatabasesV5', () => {

  // begin-common

  const cloudDatabasesService = CloudDatabasesV5.newInstance({});

  // end-common

  const config = readExternalSources(CloudDatabasesV5.DEFAULT_SERVICE_NAME);

  // Globlal variables to hold link values
  let taskIdLink;

  test('addAllowlistEntry request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-addAllowlistEntry

    const params = {
      id: 'testString',
      ipAddress: { address: '172.16.0.0/16', description: 'Dev IP space 3' },
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
  test('changeUserPassword request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-changeUserPassword

    const params = {
      id: 'testString',
      userType: 'database',
      username: 'james',
      user: { password: 'xyzzyyzzyx' },
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
  test('createDatabaseUser request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-createDatabaseUser

    const params = {
      id: 'testString',
      userType: 'database',
      user: { username: 'james', password: 'kickoutthe' },
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
  test('deleteAllowlistEntry request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-deleteAllowlistEntry

    const params = {
      id: 'testString',
      ipaddress: 'testString',
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
  test('deleteDatabaseUser request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-deleteDatabaseUser

    const params = {
      id: 'testString',
      userType: 'database',
      username: 'james',
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
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-killConnections

    const params = {
      id: 'testString',
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
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-setAllowlist

    const params = {
      id: 'testString',
      ipAddresses: [{ address: '195.212.0.0/16', description: 'Dev IP space 1' }, { address: '195.0.0.0/8', description: 'BB Lab' }, { address: '46.5.0.0/16', description: 'Dev IP space 2' }, { address: '10.187.176.142/32', description: 'Demo SL VSI' }],
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
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-setAutoscalingConditions

    const params = {
      id: 'testString',
      groupId: 'testString',
      autoscaling: { memory: { scalers: { io_utilization: { enabled: true, over_period: '5m', above_percent: 90 } }, rate: { increase_percent: 10.0, period_seconds: 300, limit_mb_per_member: 125952, units: 'mb' } } },
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
  test('setDeploymentScalingGroup request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-setDeploymentScalingGroup

    const params = {
      id: 'testString',
      groupId: 'testString',
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
  test('updateDatabaseConfiguration request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      let responseBody = JSON.parse(output);
      taskIdLink = responseBody.task.id;
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-updateDatabaseConfiguration

    const params = {
      id: 'testString',
      configuration: { max_connections: 200 },
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

    // begin-getDeploymentInfo

    const params = {
      id: 'testString',
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

    // begin-listRemotes

    const params = {
      id: 'testString',
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
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-resyncReplica

    const params = {
      id: 'testString',
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
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-setPromotion

    const params = {
      id: 'testString',
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

    // begin-listDeploymentTasks

    const params = {
      id: 'testString',
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
  test('getBackupInfo request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-getBackupInfo

    const params = {
      backupId: 'testString',
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
  test('listDeploymentBackups request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-listDeploymentBackups

    const params = {
      id: 'testString',
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
  test('startOndemandBackup request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-startOndemandBackup

    const params = {
      id: 'testString',
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

    // begin-getPITRdata

    const params = {
      id: 'testString',
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

    // begin-getConnection

    const params = {
      id: 'testString',
      userType: 'database',
      userId: 'testString',
      endpointType: 'public',
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

    // begin-completeConnection

    const params = {
      id: 'testString',
      userType: 'database',
      userId: 'testString',
      endpointType: 'public',
      password: 'providedpassword',
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
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

    // begin-listDeploymentScalingGroups

    const params = {
      id: 'testString',
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
  test('getDefaultScalingGroups request example', done => {

    consoleLogMock.mockImplementation(output => {
      originalLog(output);
      done();
    });
    consoleWarnMock.mockImplementation(output => {
      done(output);
    });

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

    // begin-getAutoscalingConditions

    const params = {
      id: 'testString',
      groupId: 'testString',
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

    // begin-getAllowlist

    const params = {
      id: 'testString',
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
