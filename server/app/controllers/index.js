import UserModel from "../models/users.js";
import ChannelModel from "../models/channels.js";
import { sendResponse, sendError } from "../../utility/index.js";


const createUser = async (req, res) => {
      const userObj = new UserModel(req.body);
      await userObj.saveData();
      sendResponse(res, userObj, "User added successfully", true, 200); 
    };

const loginUser = async (req, res) => {
      const requestData = req.body;
      const isUserExist = await UserModel.findOne({
        phoneNumber: requestData.phoneNumber,
        password: requestData.password,
      });
      if(!isUserExist) return sendError(res, {}, "Invalid Credentials");
      sendResponse(res, isUserExist, "User logged in successfully", true, 200);
    };

const createChannel = async (req, res) => {

    };

const getChannelList = async (req, res) => {

    };

const searchUser = async (req, res) => {

    };

const sendMessage = async (req, res) => {

    };




export { createUser, loginUser, createChannel, getChannelList, searchUser, sendMessage };