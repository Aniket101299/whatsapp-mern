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
      delete isUserExist.password;
      if(!isUserExist) return sendError(res, {}, "Invalid Credentials");
      sendResponse(res, isUserExist, "User logged in successfully", true, 200);
};

const createChannel = async (req, res) => {
 const channelModel = new ChannelModel(req.body);
 await channelModel.saveData();
 sendResponse(res, channelModel, "Channel created successfully", true, 200);
};

const getChannels = async (req, res) => {
  const requestData = req.query;
  const channelList = await ChannelModel.findData({
    "channelUsers._id": requestData.userId,
  });
  sendResponse(res, channelList, "Channel List fetched successfully", true, 200);
};

const searchUser = async (req, res) => {
  const requestData = req.query;
  const isUserExist = await UserModel.findOneData({
     phoneNumber: requestData.phone,
  });
  if (!isUserExist) return sendError(res, {}, "No user found");
  sendResponse(res, isUserExist, "User found successfully", true, 200);
};

const sendMessage = async (req, res) => {
 const requestData = req.body;
 await ChannelModel.findAndUpdateData(
    { _id: requestData.channelId },
    { $push: { messaegs: requestData.messages } },
    );
    sendResponse(res, {}, "Message sent successfully", true, 200);
};




export { createUser, loginUser, createChannel, getChannels, searchUser, sendMessage };