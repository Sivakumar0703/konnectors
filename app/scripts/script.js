console.log("script file is running")
let appIparams;
document.addEventListener("DOMContentLoaded", async function () {
  app
    .initialized()
    .then(function (_client) {
      console.log("_client",_client)
      window.client = _client;
      client.events.on('app.activated', onAppActivated);
    })
    .catch(function (err) {
      console.error("error in app initialization", err);
    });
});

async function onAppActivated(){
  client.events.off('app.activated', onAppActivated);
  try {
    appIparams = await client.iparams.get();
    renderDashboard();
    bindEvents();
  } catch (error) {
    toast.trigger({type:"error", content:"cannot get iparams"});
    console.log("error in on app activated");
  }
}

function renderDashboard() {
  fetchToken({ type: 'dashboard' });
}


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

// billings
const div = document.getElementsByClassName("semi-donut")[0];
div.innerText = "30000/100000"
div.style.setProperty("--percentage",'30');

// konnectors

function handleErr(err = 'None') {
  console.log(`Error occured. Details:`, err);
  let message;
  try {
    message = err.message ? JSON.parse(err.message).error : JSON.parse(err.response).message;
    if (!message) throw err;
  } catch (error) {
    console.error(error);
    message = 'Something went wrong. Please try again.';
  }
  document.querySelector('#toaster').trigger({
    type: 'error',
    content: message,
    position: 'top-center'
  });
}

function handleRecipesStateChange($targerBtn, showStartOrStop, btnData) {
  $targerBtn
    .addClass('hide')
    .siblings('.' + showStartOrStop + '-recipe')
    .removeClass('hide')
    .removeAttr('disabled');
    setKebabMenu(btnData.index, btnData, btnData.key === 'start');
  document.querySelector('#toaster').trigger({
    type: 'success',
    content: 'Recipe updated successfully.',
    position: 'top-center'
  });
}

function handleTimoutCase($targerBtn, showStartOrStop, btnData) {
  /* 
  client.request.invoke("listKonnectors", appIparams).then(
    function (data) {
      let recipeList = [];
      recipeList = JSON.parse(data.response.response);
      const recipeData = recipeList.find(function (recipe) { return btnData.id === recipe.id; });
      if ((showStartOrStop === 'start' && !recipeData.running) || (showStartOrStop === 'stop' && recipeData.running)) {
        handleRecipesStateChange($targerBtn, showStartOrStop, btnData);
      } else {
        $targerBtn.removeAttr('disabled');
        handleErr();
      }
    },
    function (error) {
      $targerBtn.removeAttr('disabled');
      handleErr(error);
    }
  )
  */
  let recipeList = list.data.items;
  recipeList = JSON.parse(data.response.response);
  const recipeData = recipeList.find(function (recipe) { return btnData.id === recipe.id; });
  if ((showStartOrStop === 'start' && !recipeData.running) || (showStartOrStop === 'stop' && recipeData.running)) {
    handleRecipesStateChange($targerBtn, showStartOrStop, btnData);
  } else {
    $targerBtn.removeAttr('disabled');
    handleErr();
  }
}

function bindEvents() {
  jQuery(document).off(".Dayforce");
  jQuery('#tabs-container, fw-toggle, #entity-fields-list').off(".Dayforce");

  jQuery('#tabs-container').on("fwChange", function (event) {
    if (event.detail.tabIndex === 1) {
      const $tableContainer = jQuery('#list-table-container');
      if ($tableContainer.hasClass('visited')) return;
      $tableContainer.addClass('visited');
      jQuery('#spinner-loader').removeClass('hide');
      console.log('before invoke');
      client.request.invoke("listKonnectors", {method:"listKonnectors"}).then(
        function (data) {
          
          let recipeList = [];
          console.log("data from smi",data)
          recipeList = data.response.data;
          if (recipeList && recipeList.length) {
            const recipeIds = recipeList.map(function (recipe) { return recipe.id });

            // save recipe to stop while app uninstall
            client.db.set('recipeIds', { 'recipe_ids': recipeIds });
            jQuery('#tenant-list-body').empty();
            recipeList.forEach(function (recipe, i) {
              jQuery('#tenant-list-body').append(`<tr>
                  <td>${recipe.name}</td>
                  <td>${recipe.description}</td>
                  <td class="action-btns">
                    <fw-button color="secondary" class="preview-recipe show-iframe" data-type="view" data-id="${recipe.id}" data-name="${recipe.name}"> Preview </fw-button>
                    <fw-button color="primary" class="start-recipe ${recipe.running ? 'hide' : ''}" data-id="${recipe.id}" data-name="${recipe.name}" data-index="${i}" data-key="start"> Start </fw-button>
                    <fw-button color="primary" class="stop-recipe ${recipe.running ? '' : 'hide'}" data-id="${recipe.id}" data-name="${recipe.name}" data-index="${i}" data-key="stop"> Stop </fw-button>
                    <fw-kebab-menu id="standard-kebab-menu-${i}"></fw-kebab-menu>
                  </td>
                </tr>`);
              setKebabMenu(i, recipe, recipe.running);
            });
            jQuery('#list-table-container, #recipe-table-info').removeClass('hide');
            jQuery('#spinner-loader').addClass('hide');
          } else {
            jQuery('#no-workflows').removeClass('hide').siblings('.sibling-container').addClass('hide');
          }

        },
        function (error) {
          console.log("------------------2")
          handleErr(error);
          if ([401, 403].includes(error.status)) {
            jQuery('#no-permission').removeClass('hide').siblings().addClass('hide');
          }
        }
      )
    } else if (event.detail.tabIndex === 2) {
      const $widgetSettingsLoaded = jQuery('#settings-container');
      if ($widgetSettingsLoaded.hasClass('visited')) return;
      $widgetSettingsLoaded.addClass('visited');
      setWidgetToggle();
      showFields();
    }
  }) 

  jQuery(document).on('click.Dayforce', '.start-recipe, .stop-recipe', function (e) {
    const btnData = e.target.dataset;
    console.log("__button", btnData);
    const showStartOrStop = btnData.key === 'start' ? 'stop' : 'start';
    const requestData = jQuery.extend({}, appIparams, { id: btnData.id });
    const $targerBtn = jQuery(e.target);
    $targerBtn.attr('disabled', 'disabled');
    const activateOrDeactivate = btnData.key === 'start' ? "activateKonnector" : "deactivateKonnector" ;
    const options = {operation:activateOrDeactivate, konnector_id:btnData.id}; // todo: add iparams 
    client.request.invoke(activateOrDeactivate, options).then(
      function () {
        handleRecipesStateChange($targerBtn, showStartOrStop, btnData);
      },
      function (error) {
        // Workato takes more than 8s, but freshworks marketplace app timeout in 5s. so, validating the state after freshworks marketplace app timeout.
        if ([408, 502, 504].includes(error.status)) {
          setTimeout(handleTimoutCase($targerBtn, showStartOrStop, btnData), 5000);
        } else {
          $targerBtn.removeAttr('disabled');
          handleErr(error);
        }
      }
    );
  });

  jQuery(document).on('click.Dayforce', '.show-iframe', function (e) {
    handleTenantCrud(jQuery(e.target).data());
  });

  jQuery('fw-toggle').on('fwChange.Dayforce', function (e) {
    e.stopPropagation();
    handleWidgetPreview(e.detail.checked);
  });

  jQuery(document).on('click.Dayforce', '.widget-toggle-btn', function (e) {
    if (jQuery(e.target).hasClass('disabled')) {
      jQuery('#widget-remove-confirm-modal').click();
    } else {
      saveWidgetData(true);
    }
  });

  jQuery(document).on('click.Dayforce', '#turn-off-widget', function () {
    jQuery('.widget-toggle-btn fw-toggle').click();
    saveWidgetData(false);
  });

  jQuery(document).on('click.Dayforce', '#save-fields', function () {
    const selectedFields = [];
    jQuery('#entity-fields-list').find('fw-checkbox[checked]').each(function () {
      const selectedField = $(this).data('value');
      selectedFields.push(selectedField);
    });
    client.db.set('entity_fields', { 'fields_list': selectedFields }).then(
      function () {
        selectedEntityFields = selectedFields;
        document.querySelector('#toaster').trigger({
          type: 'success',
          content: 'Your recent data sync changes updated successfully.',
          position: 'top-center'
        });
      },
      function (error) {
        document.querySelector('#toaster').trigger({
          type: 'error',
          content: 'Your recent data sync changes does not updated, Please refresh this page and try to sync it again.',
          position: 'top-center'
        });
        console.log(error);
      });
    saveWidgetData(jQuery('.widget-toggle-btn fw-toggle')[0].checked);
    // need this api to cache the data in workato side to fix the timeout issue in ticket widget
    client.request.invoke('getFieldsData', {}).then(
      function () {
        console.log('Fields data api cached');
      },
      function (error) {
        console.error(error);
      }
    )
  });

  jQuery(document).on('click.Dayforce', '#reset-fields', function () {
    const fields = jQuery("#entity-fields-list fw-checkbox");
    fields.each(function (index, chkBox) {
      const $field = jQuery(chkBox);
      const fieldValue = jQuery(chkBox).data('value');
      const isPrevStateIsChecked = selectedEntityFields.find(function (sField) { return sField[0] === fieldValue[0] });
      if (isPrevStateIsChecked) {
        !$field[0].checked && $field.attr('checked', 'checked');
      } else {
        $field[0].checked && $field.removeAttr('checked');
      }
    });
  });

};

function setKebabMenu(i, recipe, showLog) {
  const standardDataSource = [
    {
      value: {
        type: 'edit',
        id: recipe.id,
        name: recipe.name
      },
      text: 'Edit',
    }
  ];
  if (showLog) {
    standardDataSource.push({
      value: {
        type: 'log',
        id: recipe.id,
        name: recipe.name
      },
      text: 'View log',
    });
  }
  const standardVariant = jQuery('#standard-kebab-menu-' + i);
  standardVariant[0].options = standardDataSource;
  standardVariant.off('fwSelect.Dayforce').on('fwSelect.Dayforce', function (e) {
    handleTenantCrud(e.detail.value);
  });
}

function handleTenantCrud(data) {
  const $tenant = jQuery('#tenant-' + data.type);
  $tenant.find('.recipe-name').text(data.name);
  switch (data.type) {
    case 'view':
      $tenant.removeClass('hide').find('#edit-tenant-btn').data({ id: data.id, type: 'edit' });
      jQuery('#list-table-container, #recipe-table-info').addClass('hide');
      break;
    case 'edit':
      jQuery('#tenant-view, #list-table-container, #recipe-table-info').addClass('hide');
      $tenant.removeClass('hide');
      break;
    case 'log':
      jQuery('#tenant-log, #list-table-container, #recipe-table-info').toggleClass('hide');
      break;
  }
  fetchToken(data);
}

function fetchToken(data) {
  const $appIframe = jQuery('#' + data.type + '-iframe');
  $appIframe.attr('src', '');
   /* 
  client.request.invoke('getJwtToken', appIparams).then(
    function (resData) {
      const response = JSON.parse(resData.response.response);
      switch (data.type) {
        case 'view':
          $appIframe.attr('src', `${appIparams.base_url}direct_link?workato_dl_path=%2Frecipes%2F${data.id}%23recipe&workato_dl_token=${response.token}`);
          break;
        case 'edit':
          $appIframe.attr('src', `${appIparams.base_url}direct_link?workato_dl_path=%2Frecipes%2F${data.id}%2Fedit&workato_dl_token=${response.token}`);
          break;
        case 'log':
          $appIframe.attr('src', `${appIparams.base_url}direct_link?workato_dl_path=%2Frecipes%2F${data.id}%23jobs&workato_dl_token=${response.token}`);
          break;
        case 'dashboard':
          $appIframe.attr('src', `${appIparams.base_url}direct_link?workato_dl_path=%2Fdashboard%2Fmain&workato_dl_token=${response.token}&folder_id=${appIparams.folder_id}`);
          jQuery('#dashboard-loader').addClass('hide');
          break;
      }
    },
    function (error) {
      console.log("__need token - freshToken")
      handleErr(error);
    }

  ); 
   */
  console.log("fetch token success")
}

function backToTable(type) {
  jQuery('#tenant-' + type + ', #list-table-container, #recipe-table-info').toggleClass('hide');
}


