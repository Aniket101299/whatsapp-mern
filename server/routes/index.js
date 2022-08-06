// import { createUser, loginUser, createChannel, getChannelList, searchUser, sendMessage } from "../app/controllers";
import { createUser, loginUser, createChannel, getChannelList, searchUser, sendMessage } from "../app/controllers/index.js";
import { validateCreateUser, validateLogin, validateGetChannelList, validateSearchUser, validateCreateChannel, validateAddMessage } from "../utility/validations.js";

const applyRoutes = (app) => {
app.get("/", (req, res) => 
    res.send("Api is running fine.")
);

// below apis we need to create
//create-user, login user, channel creation, search-user, channel-list, send-message 

app.post("/user", validateCreateUser, createUser);

app.post("/login", validateLogin, loginUser);

app.post("/channel", validateCreateChannel, createChannel);

app.get("/search-user", validateSearchUser, getChannelList);

app.get("/channel-list", validateGetChannelList, searchUser);

app.post("/message", validateAddMessage, sendMessage);

};

export default applyRoutes;