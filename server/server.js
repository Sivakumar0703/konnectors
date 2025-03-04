const axios = require("axios");
const freshservice_app_id = "123";
const ukg_app_id = "456";
const base_url = "https://konnectify.com";



exports = {

  // args is a JSON block containing the payload information.
  // args['iparam'] will contain the installation parameter values.
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

  createConnection: async function(options){
    try {
      const url = `${base_url}/connections/${options.appId}/authenticate`;
      const response = await axios.post(url, options);
      const result = response;
      renderData(null, {data:result.data});
    } catch (error) {
      console.log("failed to create connection", error);
      renderData(error.data);
    }
  },

  saveConnection: async function(options){
    try {
      const url = `${base_url}/connections`;
      const response = await axios.post(url, options);
      const result = response;
      renderData(null, {data:result.data});
    } catch (error) {
      console.log("failed to save connection", error);
      renderData(error.data);
    }
  },

  editConnection: async function(options){
    try {
      const url = `${base_url}/connections/${options.appId}/authenticate`;
      const response = await axios.post(url, options);
      const result = response;
      renderData(null, {data:result.data});
    } catch (error) {
      console.log("failed to save connection", error);
      renderData(error.data);
    }
  },

  onAppInstallCallback: async function(){
    try {
      const url = `${base_url}/folders`;
      const request_body = {"name": 2};
      const response = await axios.post(url, request_body);
      console.log('response from folder creation', response.data);
    } catch (error) {
      console.log("failed to create a folder", error);
    }
  }

};
