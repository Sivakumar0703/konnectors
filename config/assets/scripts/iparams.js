document.addEventListener("DOMContentLoaded", function () {
  app
    .initialized()
    .then(function (_client) {
      window.client = _client;
    })
    .catch(function (err) {
      console.error("error in app initialization", err);
    });
});
// console.log("iparams", client.iparams)
// varibales declaration
let is_login_successful = false;
let tab2_field_container = document.getElementById("tab2-fields-container"); // the product we are integrating
let tab3_field_container = document.getElementById("tab3-fields-container");
const service_provider = "freshservice.com";
const login_email = document.getElementById("login-email");
const login_password = document.getElementById("login-password");
const login_btn = document.getElementById("login-btn");
const signup_company = document.getElementById("signup-company");
const signup_phone = document.getElementById("signup-phone");
const signup_btn = document.getElementById("signup-btn");
const show_signup_page = document.getElementById("show-signup-page");
const signup_username = document.getElementById("signup-username");
const signup_password = document.getElementById("signup-password");
const signup_email = document.getElementById("signup-email");
const signup_page = document.getElementById("signup-page");
const settings_page = document.getElementById("settings-page");
// const goto_signup = document.getElementById("show-signup-page");
const go_back_btn = document.getElementById("back-btn");
const toast = document.getElementById("toast-msg");
const tab2 = document.getElementById("tab2");
const tab2_validation_btn = document.getElementById("tab2-validate-btn");
const tab3_validation_btn = document.getElementById("tab3-validate-btn");
const login_password_icon = document.getElementById("login-password-icon");
const signup_password_icon = document.getElementById("signup-password-icon");
const settings_tab = document.getElementById("settings-tab");
let access_token;
let base_url = "";
let tab2_connector_type_id = "app-freshservice";
let tab3_connector_type_id = "app-ukg";
const freshservice_app_id = "123";
const ukg_app_id = "456";
const tab2_app_name = "freshservice";
const tab3_app_name = "ukg";
console.log("sign up", show_signup_page);

// adding event listeners
login_btn.addEventListener("click", login);
login_email.addEventListener("fwInput", () => (login_email.state = "normal"));
login_password.addEventListener(
  "fwInput",
  () => (login_password.state = "normal")
);
signup_phone.addEventListener("fwInput", () => {
  signup_phone.errorText = "";
  signup_phone.state = "normal";
});
signup_username.addEventListener(
  "fwInput",
  () => (signup_username.state = "normal")
);
signup_password.addEventListener(
  "fwInput",
  () => (signup_password.state = "normal")
);
signup_company.addEventListener(
  "fwInput",
  () => (signup_company.state = "normal")
);
signup_phone.addEventListener("fwInput", () => (signup_phone.state = "normal"));
signup_email.addEventListener("fwInput", () => (signup_email.state = "normal"));
signup_btn.addEventListener("click", signup);
show_signup_page.addEventListener("click", () => togglePage(true));
go_back_btn.addEventListener("click", () => togglePage(false));
tab2_validation_btn.addEventListener("click", () =>
  validateCredentials("freshservice")
);
tab3_validation_btn.addEventListener("click", () => validateCredentials("ukg"));
login_password_icon.addEventListener("click", () =>
  tooglePasswordVisiblity(login_password, login_password_icon)
);
signup_password_icon.addEventListener("click", () =>
  tooglePasswordVisiblity(signup_password, signup_password_icon)
);


function tooglePasswordVisiblity(inputElement, icon) {
  const input_type = inputElement.type;
  console.log("input type", input_type);
  if (input_type === "password") {
    inputElement.type = "text";
    icon.name = "visible";
  } else {
    inputElement.type = "password";
    icon.name = "hidden";
  }
}

// to toggle between login and signup page
function togglePage(showLogin) {
  console.log("show login page", showLogin);
  settings_page.style.display = showLogin ? "none" : "block";
  signup_page.style.display = showLogin ? "block" : "none";
}

// to validate login credentials
function login() {
  let options = {name:"siva", role:"dev"};
  console.log('opt', options)
  // client.request.invoke("sampleSmi", options)
  // .then((data) => console.log("from server",data))
  // .catch((err) => console.log("err from server", err));
  console.log("validation fired", login_email, login_email.value);
  // if email field is empty
  // if(!login_email.value){
  //     login_email.state = "warning";
  //     login_email.setFocus();
  //     return
  // }
  // if password field is empty
  /*
    if(!login_password.value){
      login_password.state = "warning";
      login_password.setFocus();
      return
    }
    login_btn.loading = true;
    console.log("host",login_email.value.trim().includes(service_provider) ? login_email.value.trim() : login_email.value.trim() + "." + service_provider)
    client.request.invokeTemplate(
        "login",
        {
            context: {
              // todo: add base url
              base_url: base_url,
            },
            body: JSON.stringify({
              email: trimTheString(login_email),
              password: trimTheString(login_password)
            })
        })
        .then((response) => {
          if(response && response.user){
            login_btn.disabled = true;
            // callback(true);
            console.log('response from api', response);
            toast.trigger({type:'success', content: "Login Successful"});
            login_btn.loading = false;
            tab2.disabled = false;
            tab2_field_container.innerHTML = '';
            generateFields(); // todo: get app schema + dynamic field creation
            settings_tab.activeTabIndex = 1; // switching to next tab
          }
        })
        .catch((error) => {
            toast.trigger({type:'error', content: "Invalid Credentials"}) 
            console.error("api error", error);
            login_btn.loading = false;
            login_btn.disabled = false;
            // callback(false);
        });
*/
  toast.trigger({ type: "success", content: "Login Successful" });
  login_btn.loading = false;
  // tab2.disabled = false;
  tab2_field_container.innerHTML = "";
  generateFields("base url", tab2_app_name); // todo: get app schema + dynamic field creation
  settings_tab.activeTabIndex = 1; // switching to next tab
  // todo: store connector id
}

function validate() {
  return false;
}

async function signup() {
  try {
    console.log("signup function called");
    const phone = trimTheString(signup_phone);
    const company = trimTheString(signup_company);
    const username = trimTheString(signup_username);
    const password = trimTheString(signup_password);
    const email = trimTheString(signup_email);
    const is_valid_email = isValidEmail(email);
    let is_valid = true;
    const signup_fields = [
      signup_username,
      signup_email,
      signup_password,
      signup_company,
      signup_phone,
    ];

    for (let i = 0; i < signup_fields.length; i++) {
      if (!signup_fields[i].value) {
        signup_fields[i].state = "warning";
        signup_fields[i].setFocus();
        is_valid = false;
        return;
      }
    }

    // validate email
    if (!is_valid_email) {
      signup_email.state = "error";
      signup_email.setFocus();
      return;
    }

    const payload = {
      username,
      email,
      password,
      phone,
      company,
    };
    // proceed further if all the fields contains value
    if (is_valid) {
      const signup_request = await client.request.invokeTemplate("signup", {
        context: {
          base_url: base_url,
        },
        body: JSON.stringify(payload),
      });
      const signup_response = await signup_request;
      // look for token. If token is avilable then store the token in iparam
      if (signup_response.access_token) {
        const user_email = signup_response.user.email;
        access_token = signup_response.access_token;
        // after successful registeration auto login the user
        login_email.value = email;
        login_password.value = password;
        login_btn.click();
      } else {
        toast.trigger({ type: "error", content: "Token is missing" });
        return;
      }
    }
  } catch (error) {
    console.log("error in signup", error);
    toast.trigger({ type: "error", content: "sorry, signup failed!" });
  }
}

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function trimTheString(element) {
  return element?.value?.trim();
}

async function generateFields(baseUrl, appName) {
  // params - base_url, app-name(service/ukg)
  try {
    console.log("generate fields triggered");
    let parent_container =
      appName === tab2_app_name ? tab2_field_container : tab3_field_container;
    // making smi call to get app schema
    /* 
    const get_app_schema = await client.request.invoke("getAppSchema", 
        {
            url: baseUrl,
            app_name: appName
        }
    );
    const response = await get_app_schema; */
    // const fields = response.fields;
    // appName === "freshservice" ? tab2_connector_type_id = response.connectorTypeId : tab3_connector_type_id = response.connectorTypeId;
    const tab_index = appName === tab2_app_name ? 2 : 3;
    const fields = [
      {
        name: "Base URL",
        pattern: {
          flags: "gm",
          message: "Please enter valid URL",
          value: "^https://.*.myfreshworks.com",
        },
        placeholder: "https://yourdomain.myfreshworks.com",
        type: "textbox | textarea",
        required: {
          message: "Please enter the field value",
          value: true,
        },
      },
      {
        pattern: {
          flags: "gm",
          message: "Invalid ApiKey!! Please provide a valid ApiKey",
          value: "..*",
        },
        name: "API Key",
        type: "Password",
        required: {
          message: "Please enter the field value",
          value: true,
        },
      },
    ];
    let fields_to_add = "";
    for (let i = 0; i < fields.length; i++) {
      const new_Element = createAppFields(fields[i], tab_index);
      // if no field is returned from createAppFields
      console.log("new element", new_Element);
      if (!new_Element) {
        toast.trigger({
          type: "error",
          content: "Error in creating app field",
        });
        return;
      }
      fields_to_add = fields_to_add + new_Element;
    }
    console.log("created fields", fields_to_add);

    const connection_name = `
            <fw-input label="Connection Name" icon-left="link" hint-text="Enter your connection name"
            warning-text="Connection name field should not be empty" 
            placeholder="eg: connect-1" required clear-input id="tab${tab_index}-connection-name"> 
             </fw-input>
         <br>`;
    parent_container.innerHTML = fields_to_add + connection_name;
    console.log("*********", parent_container);
    // add event listener to toggle password visibility
    const api_password_icon = document.getElementById(`tab${tab_index}-password-icon`);
    api_password_icon.addEventListener("click", () =>{
        const tab_api_field = document.getElementById(`tab${tab_index}-api`);
        tooglePasswordVisiblity(tab_api_field, api_password_icon)
    });
  } catch (error) {
    console.log("error in creating app fields", error);
    toast.trigger({ type: "error", content: "Fetching app schema failed" });
  }
}

function createAppFields(fieldData, tabIndex) {
  console.log("create field function", fieldData);
  let element = "";
  const field_type = fieldData.type.includes("|")
    ? fieldData.type.split("|")
    : fieldData.type;
  if (field_type[0].includes("textbox") || field_type[1].includes("textarea")) {
    element = `<fw-input label="${fieldData.name}" hint-text="${fieldData.required.message}" warn-text="${fieldData.pattern.message}"
        required="${fieldData.required.value}" clear-input  placeholder="${fieldData.placeholder}" type="text" id="tab${tabIndex}-url" > 
        </fw-input> <br>`; // id- fieldData.connectorTypeId/fieldData.name
    return element;
  } else if (field_type === "Password") {
    element = `<fw-input label="${fieldData.name}" hint-text="${fieldData.required.message}" 
        required="${fieldData.required.value}" clear-input  type="password" id="tab${tabIndex}-api" > 
          <fw-icon name="hidden" slot="input-suffix" id="tab${tabIndex}-password-icon" class="password-icon"></fw-icon>
        </fw-input> <br>`;
    return element;
  } else {
    return element;
  }
}

async function getValueFromIparams(key) {
  try {
    console.log('ip-',client.iparams);
    console.log("fetching data from iparam", await client.iparams.get(key))
    const value = await client.iparams.get(key);
    return value;
  } catch (error) {
    console.log("error in fetching iparams values", error);
  }
}

// to validate the service credentials
async function validateCredentials(app) {
  try {
    console.log("*****app****",app)
    console.log("tab-", settings_tab.activeTabIndex, " validation triggered");
    const app_id = app === tab2_app_name ? freshservice_app_id : ukg_app_id; // app_id is hard coded
    const connector_type =
      app === tab2_app_name ? tab2_connector_type_id : tab3_connector_type_id; // connectort_type is hard coded
    const container =
      app === tab2_app_name ? tab2_field_container : tab3_field_container; // selecting tab
    const input_fields = container.querySelectorAll("fw-input");
    let field_values = []; // [url, api, connection-name]
    for (let i = 0; i < input_fields.length; i++) { // check for empty field submission
      input_fields[i].addEventListener(
        "fwInput",
        () => (input_fields[i].state = "normal")
      );
      if (input_fields[i].value) {
        field_values.push(input_fields[i].value);
      } else {
        input_fields[i].state = "warning";
        input_fields[i].setFocus();
        field_values = [];
        return;
      }
    }
    
    console.log("field", field_values);
    const options = {
      appId: app_id,
      connectorTypeId: connector_type,
      connectionName: field_values[2],
      fields: [
        {
          name: "Base URL",
          value: field_values[0],
        },
        {
          name: "API Key",
          value: field_values[1],
        },
      ],
    };
    console.log("option", options);
    console.log("app name", app);
    const operation_todo = await isFieldValueChanged(
      app,
      field_values[0],
      field_values[1],
      field_values[2]
    );
    console.log("opertion todo", operation_todo)
    if (operation_todo === "skip") {
      // field values are not changed so skip validation
      settings_tab.activeTabIndex = 2;
      toast.trigger({ type: "success", content: "Connection saved" });
      return;
    }
    /*
    // create/edit connection
    const create_or_edit =
      operation_todo === "create" ? "createConnection" : "editConnection";
    const create_connection = await client.request.invoke(
      create_or_edit,
      options
    );
    const create_connection_response = create_connection;
    console.log("response from create connection", create_connection_response);
    if (!data.data || data.status !== 200) {
      // if data=true & status=200 then proceed
      return toast.trigger({
        type: "error",
        content: "Connection creation failed",
      });
    }
    // save connection
    const save_connection = await client.request.invoke(
      "saveConnection",
      options
    );
    const save_connection_response = await save_connection;
    console.log("response from save connection", save_connection_response);
    if (save_connection_response.status === 200) {
      toast.trigger({ type: "success", content: "Connection saved" });
    }
    */
    // create fields in tab3 for the very first time
    if (settings_tab.activeTabIndex === 1 && operation_todo === "create") {
      generateFields("base url for tab-3", tab3_app_name);
      toast.trigger({ type: "success", content: "Connection saved" });
    }
    settings_tab.activeTabIndex = 2;
  } catch (error) {
    toast.trigger({
      type: "error",
      content: "Connection creation/saving failed",
    });
    console.log("client - error in connection creation/saving", error);
  }
}

// prev is non empty + prev vs current => edit
// prev is empty => create
// prev is non empty + prev=currrent => skip
async function isFieldValueChanged(appName, domain, apikey, connectionName) {
  // current value from parameter
  // previously configured values
  const previous_tab2_domain = await getValueFromIparams("tab2-url");
  const previous_tab2_apikey = await getValueFromIparams("tab2-api");
  const previous_tab2_connection_name = await getValueFromIparams(
    "tab2-connection-name"
  );
  const previous_tab3_domain = await getValueFromIparams("tab3-url");
  const previous_tab3_apikey = await getValueFromIparams("tab3-api");
  const previous_tab3_connection_name = await getValueFromIparams(
    "tab3-connection-name"
  );
  const tab2_field_values = [
    previous_tab2_domain,
    previous_tab2_apikey,
    previous_tab2_connection_name,
  ];
  const tab3_field_values = [
    previous_tab3_domain,
    previous_tab3_apikey,
    previous_tab3_connection_name,
  ];
  const fields =
    appName === tab2_app_name ? tab2_field_values : tab3_field_values;
  console.log("val",fields)
  if (!fields[0] && !fields[1] && !fields[2]) {
    return "create";
  } else if (
    domain !== fields[0] ||
    apikey !== fields[1] ||
    connectionName !== fields[2]
  ) {
    return "edit";
  } else {
    return "skip";
  }
}

