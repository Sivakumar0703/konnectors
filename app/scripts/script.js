console.log("script file is running")

document.addEventListener("DOMContentLoaded", function () {
  app
    .initialized()
    .then(function (_client) {
      console.log("_client",_client)
      window.client = _client;
    })
    .catch(function (err) {
      console.error("error in app initialization", err);
    });
});


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

const toast = document.getElementById("toast-msg");
const iframe_back_btn = document.getElementById("iframe-back-btn");
iframe_back_btn.addEventListener("fwClick", () => {
  const table_container = document.getElementById("list-konnectors-container");
  table_container.classList.remove("hide");
  const iframe = document.getElementById("iframe-container");
  iframe.classList.add("hide"); 
})
// billings
const div = document.getElementsByClassName("semi-donut")[0];
div.innerText = "30000/100000"
div.style.setProperty("--percentage",'30');

// konnectors
let konnector_table_body = document.getElementById("konnector-table-body");
function addKonnectorToTable(){
  const konnectors = list.data.items;
  console.log(list.data.items);
  if(konnectors.length < 1){
    return
  }
  let table_content = konnector_table_body.innerHTML;
  for(let i=0; i<konnectors.length; i++){
    const konnector_id = konnectors[i].id;
    const kebab_value = {
      konnector_name: konnectors[i].name,
      konnector_id: konnector_id
    };
    const konnector = `<tr>
    <td>${i+1}</td>
    <td>${konnectors[i].name}</td>
    <td>  
      <fw-button color="secondary" data-id=${konnector_id} class="preview-btn" id="preview-${konnector_id}"> Preview </fw-button> 
      <fw-button color="primary" data-id=${konnector_id} class="start-btn" id="start-${konnector_id}"> Start </fw-button> 
      <fw-button color="primary" data-id=${konnector_id} class="stop-btn hide" id="stop-${konnector_id}"> Stop </fw-button> 
      <fw-kebab-menu id="standard-kebab-menu-${konnector_id}" class="kebab-menu"></fw-kebab-menu>
    </td>
    </tr>`
    table_content = table_content + konnector;
    // const kebab = document.getElementById(`standard-kebab-menu-${konnector_id}`);
    // kebab.options = [{value: `${kebab_value}` ,text: 'Edit'}];
  }
  konnector_table_body.innerHTML = table_content;
  addClickEvent("Start");
  addClickEvent("Stop");
  addClickEvent("Preview");
}
addKonnectorToTable();

function addClickEvent(btnName){
  let buttonName;
  if(btnName === "Preview"){
    buttonName = "preview";
  } else if(btnName === "Start"){
    buttonName = "start";
  } else if(btnName === "Stop"){
    buttonName = "stop";
  } else {
    return
  }
  const getAllBtn = document.querySelectorAll(`.${buttonName}-btn`);
  console.log(getAllBtn);
  getAllBtn.forEach((btn) => {
    btn.addEventListener("fwClick", handleClick)
  })

}

function handleClick(event){
  const btnName = event.target.innerText;
  const konnector_id = event.target.dataset.id;
  const start_btn = document.getElementById(`start-${konnector_id}`);
  const stop_btn = document.getElementById(`stop-${konnector_id}`);
  start_btn.classList.toggle('hide');
  stop_btn.classList.toggle('hide');
  console.log("click",event,event.target.innerText, start_btn, stop_btn);
  if(btnName === "Start"){
    console.log('start hide,stop disabled')
    stop_btn.disabled = true;
    // startOrStopKonnector("activateKonnector","Start");
  } else if(btnName === "Stop") {
    start_btn.disabled = true;
    // startOrStopKonnector("deactivateKonnector","Stop");
  } else if(btnName === "Preview"){
    const table_container = document.getElementById("list-konnectors-container");
    table_container.classList.add("hide");
    const iframe = document.getElementById("iframe-container");
    iframe.classList.remove("hide"); 
    // todo: add url by attaching konnector_id
  } else {
    return
  } 
}

async function startOrStopKonnector(templateName, operation){ // operation = start | stop
  try {
    console.log("template", templateName)
    const connection = await client.request.invoke(templateName);
    console.log("conenction result", connection)
    toast.trigger({type: "success", content: `${operation === "Start" ? "Connection Activated" : "Connection Deactivated" }`});
    operation === "Start" ? stop_btn.disabled = false : start_btn.disabled = false;
    return connection
  } catch (error) {
    console.log("error from activate/deactivate konnector smi", error);
    if(operation === "Start"){
      stop_btn.disabled = false;
      start_btn.classList.toggle('hide');
      stop_btn.classList.toggle('hide');
      toast.trigger({type: "error", content: "Connection Deactivation Failed"});
    } else {
      start_btn.disabled = false;
      start_btn.classList.toggle('hide');
      stop_btn.classList.toggle('hide');
      toast.trigger({type: "error", content: "Connection Deactivation Failed"});
    }
  }
}








