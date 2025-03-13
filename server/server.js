const axios = require("axios");
const freshservice_app_id = "123";
const ukg_app_id = "456";
const base_url = "https://konnectify-engine-next-qcxxa5xmtq-uc.a.run.app";
const folder_name = "freshservice+ukg";
const list = {
  "data": {
    "items": [
      {
        "tenantId": "116868507383358899857",
        "version": "v1",
        "createdBy": "santhosh D",
        "updatedBy": "santhosh D",
        "subTenantId": false,
        "dtCreated": "2025-02-28T07:09:31.381Z",
        "connectedApps": [
          "k0nwbhook",
          "Sheets2000"
        ],
        "connections": [
          "RyeMSZEKqF"
        ],
        "formId": "",
        "taskExecutedCount": 0,
        "lastExecutedAt": "2025-02-28T07:02:39.456Z",
        "id": "Nc0kWO3gRY",
        "draft": {
          "nodes": [
            {
              "hasConfigured": true,
              "fieldsConfigured": true,
              "mapping_meta": {},
              "dynamicMapping_meta": {},
              "s_id": "aIfmF0NZRz",
              "type": "trigger",
              "canDraft": false,
              "dynamicMapping": {},
              "stepName": "Catch hook",
              "mapping": {},
              "parentNode": "0",
              "throwConfigError": false,
              "currentTab": "mapping",
              "rule": {},
              "parse": {},
              "code": {},
              "repeater": {},
              "position": 1,
              "appId": "k0nwbhook",
              "appType": [
                "konnectify-app"
              ],
              "appName": "Konnectify Webhook",
              "iconUrl": "https://storage.googleapis.com/konnectify-form-files/logo/konnectify-webhook.svg",
              "description": "Webhook by Konnectify",
              "isBeta": true,
              "eventId": "catch-hook",
              "eventName": "Catch hook",
              "isSearchAction": false,
              "account": {
                "accountId": "",
                "accountName": ""
              },
              "skipOnFailure": false,
              "testEvent": {
                "outputSchema": [],
                "status": "idle"
              },
              "id": "1",
              "webhookId": "ZaWKHI8Nme"
            },
            {
              "hasConfigured": true,
              "fieldsConfigured": true,
              "mapping_meta": {},
              "dynamicMapping_meta": {
                "spreadsheetId": "eventLog migration",
                "worksheetName": "prod dec 19 - dec28"
              },
              "s_id": "G5ux7hokQn",
              "type": "action",
              "dynamicMapping": {
                "spreadsheetId": "1haWhtvMKMX0KUnZyYBmUmh55JL2egZANT9aFOp2mtPA",
                "worksheetName": "prod dec 19 - dec28"
              },
              "mapping": {
                "no": "*{aIfmF0NZRz__no%no}*",
                "total": "*{aIfmF0NZRz__total%total}*",
                "batchsize": "*{aIfmF0NZRz__batch%batch}*",
                "time": "*{aIfmF0NZRz__time%time}*"
              },
              "canDraft": true,
              "stepName": "Create Spreadsheet Row",
              "parentNode": "0",
              "throwConfigError": false,
              "currentTab": "mapping",
              "rule": {},
              "parse": {},
              "position": 2,
              "code": {},
              "repeater": {},
              "id": "3",
              "appId": "Sheets2000",
              "appType": [
                "communication",
                "marketing"
              ],
              "appName": "Google Sheet (New)",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg",
              "description": "Spreadsheet platform for data storage and analysis",
              "isBeta": false,
              "eventId": "create-spreadsheet-row",
              "eventName": "Create Spreadsheet Row",
              "isSearchAction": false,
              "account": {
                "accountId": "RyeMSZEKqF",
                "accountName": "sandy"
              },
              "skipOnFailure": false,
              "testEvent": {
                "outputSchema": [],
                "status": "idle"
              }
            }
          ]
        },
        "name": "3 update batch size",
        "configuration": {
          "nodes": [
            {
              "hasConfigured": true,
              "fieldsConfigured": true,
              "mapping_meta": {},
              "dynamicMapping_meta": {},
              "s_id": "aIfmF0NZRz",
              "type": "trigger",
              "canDraft": false,
              "dynamicMapping": {},
              "stepName": "Catch hook",
              "mapping": {},
              "parentNode": "0",
              "throwConfigError": false,
              "currentTab": "mapping",
              "rule": {},
              "parse": {},
              "code": {},
              "repeater": {},
              "position": 1,
              "appId": "k0nwbhook",
              "appType": [
                "konnectify-app"
              ],
              "appName": "Konnectify Webhook",
              "iconUrl": "https://storage.googleapis.com/konnectify-form-files/logo/konnectify-webhook.svg",
              "description": "Webhook by Konnectify",
              "isBeta": true,
              "eventId": "catch-hook",
              "eventName": "Catch hook",
              "isSearchAction": false,
              "account": {
                "accountId": "",
                "accountName": ""
              },
              "skipOnFailure": false,
              "testEvent": {
                "outputSchema": [],
                "status": "idle"
              },
              "id": "1",
              "webhookId": "ZaWKHI8Nme"
            },
            {
              "hasConfigured": true,
              "fieldsConfigured": true,
              "mapping_meta": {},
              "dynamicMapping_meta": {
                "spreadsheetId": "eventLog migration",
                "worksheetName": "prod dec 19 - dec28"
              },
              "s_id": "G5ux7hokQn",
              "type": "action",
              "dynamicMapping": {
                "spreadsheetId": "1haWhtvMKMX0KUnZyYBmUmh55JL2egZANT9aFOp2mtPA",
                "worksheetName": "prod dec 19 - dec28"
              },
              "mapping": {
                "no": "*{aIfmF0NZRz__no%no}*",
                "total": "*{aIfmF0NZRz__total%total}*",
                "batchsize": "*{aIfmF0NZRz__batch%batch}*",
                "time": "*{aIfmF0NZRz__time%time}*"
              },
              "canDraft": true,
              "stepName": "Create Spreadsheet Row",
              "parentNode": "0",
              "throwConfigError": false,
              "currentTab": "mapping",
              "rule": {},
              "parse": {},
              "position": 2,
              "code": {},
              "repeater": {},
              "id": "3",
              "appId": "Sheets2000",
              "appType": [
                "communication",
                "marketing"
              ],
              "appName": "Google Sheet (New)",
              "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg",
              "description": "Spreadsheet platform for data storage and analysis",
              "isBeta": false,
              "eventId": "create-spreadsheet-row",
              "eventName": "Create Spreadsheet Row",
              "isSearchAction": false,
              "account": {
                "accountId": "RyeMSZEKqF",
                "accountName": "sandy"
              },
              "skipOnFailure": false,
              "testEvent": {
                "outputSchema": [],
                "status": "idle"
              }
            }
          ]
        },
        "config_status": "Saved",
        "folderId": "qKSumCTZkH",
        "dtUpdated": "2025-03-03T15:00:36.434Z",
        "status": "active"
      },
      {
        "config_status": "in_draft",
        "configuration": {
          "nodes": []
        },
        "draft": {
          "nodes": [
            {
              "s_id": "WXPVGy8v95",
              "type": "trigger",
              "hasConfigured": true,
              "canDraft": true,
              "dynamicMapping": {},
              "stepName": "New Contact Added",
              "mapping": {},
              "mapping_meta": {},
              "dynamicMapping_meta": {},
              "parentNode": "0",
              "throwConfigError": false,
              "currentTab": "mapping",
              "rule": {},
              "parse": {},
              "code": {},
              "repeater": {},
              "position": 1,
              "appId": "AMVr3a4T9G",
              "appType": [
                "crm"
              ],
              "appName": "Freshsales Suite",
              "iconUrl": "https://d1myhw8pp24x4f.cloudfront.net/software_logo/1628326810_Logo_mid.png",
              "description": "Freshsales App to manage Leads",
              "isBeta": false,
              "eventId": "new-contact-trigger",
              "eventName": "New Contact Added",
              "eventSource": "schedule",
              "isSearchAction": false,
              "account": {
                "accountId": "g2fW95fSVx",
                "accountName": "sandy"
              },
              "fieldsConfigured": false,
              "skipOnFailure": false,
              "testEvent": {
                "outputSchema": [],
                "status": "idle"
              },
              "id": "1"
            },
            {
              "s_id": "pMazKO1AzY",
              "type": "action",
              "hasConfigured": false,
              "dynamicMapping": {},
              "mapping": {},
              "mapping_meta": {},
              "dynamicMapping_meta": {},
              "canDraft": false,
              "stepName": "",
              "parentNode": "0",
              "throwConfigError": false,
              "currentTab": "configure",
              "rule": {},
              "parse": {},
              "position": 2,
              "code": {},
              "repeater": {},
              "id": "3"
            }
          ]
        },
        "name": "Untitled",
        "status": "inactive",
        "tenantId": "116868507383358899857",
        "version": "v1",
        "createdBy": "santhosh D",
        "updatedBy": "santhosh D",
        "folderId": "qKSumCTZkH",
        "subTenantId": false,
        "connections": [
          "g2fW95fSVx"
        ],
        "connectedApps": [
          "AMVr3a4T9G"
        ],
        "id": "NjSt9wBY3I",
        "dtCreated": "2025-03-03T15:04:29.358Z",
        "dtUpdated": "2025-03-03T15:04:29.358Z"
      }
    ],
    "totalItems": 0,
    "pageNumber": 1
   },
  "status": 200
}

exports = {

  getAppSchema: async function(options){
    try {
      const app_id = options.app_name === "freshservice" ? freshservice_app_id : ukg_app_id;
      const url = `${base_url}/apps/${app_id}`;
      const response = await axios.get(url);
      const result = response;
      renderData(null, {data:result.data});
    } catch (error) {
      console.log("failed to fetch app schema", error);
      renderData(error.data);
    }
  },

  createConnection: async function(){ // // options
    try {
      // const url = `${base_url}/connections/${options.appId}/authenticate`;
      // const response = await axios.post(url, options);
      // const result = response;
      // renderData(null, {data:result.data});
      renderData(null, {data:true});
    } catch (error) {
      console.log("failed to create connection", error);
      renderData(error.data);
    }
  },

  saveConnection: async function(){ // options
    try {
      // const url = `${base_url}/connections`;
      // const response = await axios.post(url, options);
      // const result = response;
      // renderData(null, {data:result.data});
      renderData(null, {data:true});
    } catch (error) {
      console.log("failed to save connection", error);
      renderData(error.data);
    }
  },

  editConnection: async function(){ // options
    try {
      // const url = `${base_url}/connections/${options.appId}/authenticate`;
      // const response = await axios.post(url, options);
      // const result = response;
      // renderData(null, {data:result.data});
      renderData(null, {data:true});
    } catch (error) {
      console.log("failed to save connection", error);
      renderData(error.data);
    }
  },

  onAppInstallCallback: async function(){
    try {
      // const url = `${base_url}/folders`;
      // const request_body = {"name": folder_name};
      // const response = await axios.post(url, request_body);
      // console.log('response from folder creation', response.data);
      renderData(null, {data:true});
    } catch (error) {
      console.log("failed to create a folder", error);
    }
  },

  sampleSmi: async function(){ // options
    try {
      // const payload = JSON.stringify({...options,isSuccess:true});
      // console.log('options from smi', payload);
      // throw new Error(":)")
      // renderData(null, payload);
      // console.log("data sent to fe")
      renderData(null, {data:true});
    } catch (error) {
      renderData({status:400, message:"error in smi test function"});
      console.error("error in smi test function", error);
    }
  },

  listKonnectors: async function(options){ // options
    try {
      console.log("list connectors called",options)
      // const url = `${base_url}/konnectors?pageNumber=1&pageSize=10`;
      // const response = await axios.get(url, options);
      // const result = response;
      // console.log('response for list konnectors', result);
      renderData(null, {data:list.data.items});
      // renderData(null, {data:true});
    } catch (error) {
      console.error("error in list Konnector function", error);
      renderData({status:400, message:"error in list Konnector function"});
    }
  },

  activateKonnector: async function(options){ // options
    try {
      console.log("activate kon", options)
      // const konnector_id = options.konnector_id;
      // const url = `${base_url}/konnectors/${konnector_id}/activate`;
      // const response = await axios.post(url, options);
      // console.log('response for activating konnector', response);
      // renderData(null, {data:result.data});
      renderData(null, {data:true, message:"konnector activated"});
    } catch (error) {
      renderData({status:400, message:"error in activating konnector"});
      console.error("error in activating konnector", error);
    }
  },

  deactivateKonnector: async function(options){ // options
    try {
      console.log("deactivate kon", options)
      // const konnector_id = options.konnector_id;
      // const url = `${base_url}/konnectors/${konnector_id}/deactivate`;
      // const response = await axios.post(url, options);
      // console.log('response for deactivating konnector', response);
      // renderData(null, {data:result.data});
      renderData(null, {data:true, message:"konnector deactivated"});
    } catch (error) {
      renderData({status:400, message:"error in deactivating konnector"});
      console.error("error in deactivating konnector", error);
    }
  },

  connectFreshservice: async function(options){
    try {
      const response = await axios.get(options.url, options.headers);
      console.log('response for freshservice', response);
    
    } catch (error) {
      renderData({status:400, message:"error in connecting freshservice"});
      console.error("error in connecting freshservice", error);
    }
  },

  connectFreshdesk: async function(){ // options
    try {
      console.log("error in connecting freshservice", error);
    } catch (error) {
      renderData({status:400, message:"error in connecting freshdesk"});
      console.error("error in connecting freshdesk", error);
    }
  }

};
