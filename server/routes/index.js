// import { createUser, loginUser, createChannel, getChannelList, searchUser, sendMessage } from "../app/controllers";
import { createUser, loginUser, createChannel, getChannels, searchUser, sendMessage } from "../app/controllers/index.js";
import { validateCreateUser, validateLogin, validateGetChannels, validateSearchUser, validateAddChannel, validateAddMessage } from "../utility/validations.js";

const applyRoutes = (app) => {
app.get("/", (req, res) => 
    res.send("Api is running fine.")
);

// below apis we need to create
//create-user, login user, channel creation, search-user, channel-list, send-message 

app.post("/user", validateCreateUser, createUser);

app.post("/login", validateLogin, loginUser);

app.get("/search-user", validateSearchUser, searchUser);

app.post("/channel", validateAddChannel, createChannel);

app.get("/channel-list", validateGetChannels, getChannels);

app.post("/message", validateAddMessage, sendMessage);

};

export default applyRoutes;