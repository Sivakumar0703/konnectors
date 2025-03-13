const axios = require("axios");
const freshservice_app_id = "123";
const ukg_app_id = "456";
const base_url = "https://konnectify.com";
const folder_name = "freshservice+ukg";

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

  listKonnectors: async function(){ // options
    try {
      // const url = `${base_url}/konnectors?pageNumber=1&pageSize=10`;
      // const response = await axios.get(url, options);
      // const result = response;
      // console.log('response for list konnectors', result);
      // renderData(null, {data:result.data});
      renderData(null, {data:true});
    } catch (error) {
      renderData({status:400, message:"error in list Konnector function"});
      console.error("error in list Konnector function", error);
    }
  },

  activateKonnector: async function(){ // options
    try {
      // const konnector_id = options.konnector_id;
      // const url = `${base_url}/konnectors/${konnector_id}/activate`;
      // const response = await axios.post(url, options);
      // console.log('response for activating konnector', response);
      // renderData(null, {data:result.data});
      renderData(null, {data:true});
    } catch (error) {
      renderData({status:400, message:"error in activating konnector"});
      console.error("error in activating konnector", error);
    }
  },

  deactivateKonnector: async function(){ // options
    try {
      // const konnector_id = options.konnector_id;
      // const url = `${base_url}/konnectors/${konnector_id}/deactivate`;
      // const response = await axios.post(url, options);
      // console.log('response for deactivating konnector', response);
      // renderData(null, {data:result.data});
      renderData(null, {data:true});
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
