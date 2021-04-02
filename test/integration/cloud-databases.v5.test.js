/* eslint-disable no-console */
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
const CloudDatabasesV5 = require('../../dist/cloud-databases/v5');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'cloud_databases.env';

const describe = authHelper.prepareTests(configFile);

const autoScalingGroupId = 'member';

let cloudDatabasesService;
let deploymentId;
let replicaId;

// Global variables to hold link values
let taskIdLink;
let backupIdLink;
let scalingGroupIdLink;

async function waitForTask(taskId) {
  let complete = false;
  for (let attempts = 0; !complete && attempts < 30; attempts++) {
    const res = await cloudDatabasesService.getTask({
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

describe('CloudDatabasesV5_integration', () => {
  cloudDatabasesService = CloudDatabasesV5.newInstance();

  expect(cloudDatabasesService).not.toBeNull();

  const config = readExternalSources(CloudDatabasesV5.DEFAULT_SERVICE_NAME);
  expect(config).not.toBeNull();

  deploymentId = config.deploymentId;
  expect(deploymentId).not.toBeNull();

  replicaId = config.replicaId;
  expect(replicaId).not.toBeNull();

  jest.setTimeout(timeout);

  test('addAllowlistEntry()', async () => {
    // Request models needed by this operation.

    // AllowlistEntry
    const allowlistEntryModel = {
      address: '172.16.0.0/16',
      description: 'Dev IP space 3',
    };

    const params = {
      id: deploymentId,
      ipAddress: allowlistEntryModel,
    };

    const res = await cloudDatabasesService.addAllowlistEntry(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('deleteAllowlistEntry()', async () => {
    const params = {
      id: deploymentId,
      ipaddress: '172.16.0.0/16',
    };

    const res = await cloudDatabasesService.deleteAllowlistEntry(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('createDatabaseUser()', async () => {
    // Request models needed by this operation.

    // CreateDatabaseUserRequestUser
    const createDatabaseUserRequestUserModel = {
      user_type: 'database',
      username: 'james',
      password: 'kickoutthe',
    };

    const params = {
      id: deploymentId,
      userType: 'database',
      user: createDatabaseUserRequestUserModel,
    };

    const res = await cloudDatabasesService.createDatabaseUser(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    waitForTask(taskIdLink);
  });
  test('changeUserPassword()', async () => {
    // Request models needed by this operation.

    // APasswordSettingUser
    const aPasswordSettingUserModel = {
      password: 'xyzzyyzzyx',
    };

    const params = {
      id: deploymentId,
      userType: 'database',
      username: 'james',
      user: aPasswordSettingUserModel,
    };

    const res = await cloudDatabasesService.changeUserPassword(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('deleteDatabaseUser()', async () => {
    const params = {
      id: deploymentId,
      userType: 'database',
      username: 'james',
    };

    const res = await cloudDatabasesService.deleteDatabaseUser(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('killConnections()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.killConnections(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('setAllowlist()', async () => {
    // Request models needed by this operation.

    // AllowlistEntry
    const allowlistEntryModel = {
      address: '195.212.0.0/16',
      description: 'Dev IP space 1',
    };

    const params = {
      id: deploymentId,
      ipAddresses: [allowlistEntryModel],
      ifMatch: 'testString',
    };

    const res = await cloudDatabasesService.setAllowlist(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('setAutoscalingConditions()', async () => {
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
      limit_mb_per_member: 114432,
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

    const params = {
      id: deploymentId,
      groupId: autoScalingGroupId,
      autoscaling: autoscalingSetGroupAutoscalingModel,
    };

    const res = await cloudDatabasesService.setAutoscalingConditions(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('updateDatabaseConfiguration()', async () => {
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

    const params = {
      id: deploymentId,
      configuration: setConfigurationConfigurationModel,
    };

    const res = await cloudDatabasesService.updateDatabaseConfiguration(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('listDeployables()', async () => {
    const res = await cloudDatabasesService.listDeployables();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('listRegions()', async () => {
    const res = await cloudDatabasesService.listRegions();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getDeploymentInfo()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.getDeploymentInfo(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('listRemotes()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.listRemotes(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('resyncReplica()', async () => {
    const params = {
      id: replicaId,
    };

    const res = await cloudDatabasesService.resyncReplica(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  // Skip the setPromotion test by default to preserve test environment
  test.skip('setPromotion()', async () => {
    // Request models needed by this operation.

    // SetPromotionPromotionPromote
    const setPromotionPromotionModel = {
      promotion: { 'skip_initial_backup': true },
    };

    const params = {
      id: replicaId,
      promotion: setPromotionPromotionModel,
    };

    const res = await cloudDatabasesService.setPromotion(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('listDeploymentTasks()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.listDeploymentTasks(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getTask()', async () => {
    const params = {
      id: taskIdLink,
    };

    const res = await cloudDatabasesService.getTask(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('listDeploymentBackups()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.listDeploymentBackups(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    backupIdLink = res.result.backups[0].id;
  });
  test('getBackupInfo()', async () => {
    const params = {
      backupId: backupIdLink,
    };

    const res = await cloudDatabasesService.getBackupInfo(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('startOndemandBackup()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.startOndemandBackup(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getPitRdata()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.getPitRdata(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getConnection()', async () => {
    const params = {
      id: deploymentId,
      userType: 'database',
      userId: 'testString',
      endpointType: 'public',
      certificateRoot: 'testString',
    };

    const res = await cloudDatabasesService.getConnection(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('completeConnection()', async () => {
    const params = {
      id: deploymentId,
      userType: 'database',
      userId: 'testString',
      endpointType: 'public',
      password: 'providedpassword',
      certificateRoot: 'testString',
    };

    const res = await cloudDatabasesService.completeConnection(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('listDeploymentScalingGroups()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.listDeploymentScalingGroups(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    scalingGroupIdLink = res.result.groups[0].id;
  });
  test('setDeploymentScalingGroup()', async () => {
    // Request models needed by this operation.

    // SetMemoryGroupMemory
    const setMemoryGroupMemoryModel = {
      allocation_mb: 114688,
    };

    // SetDeploymentScalingGroupRequestSetMemoryGroup
    const setDeploymentScalingGroupRequestModel = {
      memory: setMemoryGroupMemoryModel,
    };

    const params = {
      id: deploymentId,
      groupId: scalingGroupIdLink,
      setDeploymentScalingGroupRequest: setDeploymentScalingGroupRequestModel,
    };

    let res;
    try {
      res = await cloudDatabasesService.setDeploymentScalingGroup(params);
      taskIdLink = res.result.task.id;
      await waitForTask(taskIdLink);
    } catch (err) {
      console.log(err);
    }

    params.setDeploymentScalingGroupRequest.memory.allocation_mb = 114432;

    res = await cloudDatabasesService.setDeploymentScalingGroup(params);

    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
    taskIdLink = res.result.task.id;

    await waitForTask(taskIdLink);
  });
  test('getDefaultScalingGroups()', async () => {
    const params = {
      type: 'postgresql',
    };

    const res = await cloudDatabasesService.getDefaultScalingGroups(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getAutoscalingConditions()', async () => {
    const params = {
      id: deploymentId,
      groupId: scalingGroupIdLink,
    };

    const res = await cloudDatabasesService.getAutoscalingConditions(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getAllowlist()', async () => {
    const params = {
      id: deploymentId,
    };

    const res = await cloudDatabasesService.getAllowlist(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
});
