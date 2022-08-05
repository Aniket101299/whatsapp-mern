const applyRoutes = (app) => {
app.get("/", (req, res) => 
    res.send("Api is running fine.")
);

// below apis we need to create
//create-user, login user, channel creation, search-user, channel-list, send-message 

app.post("/user", (req, res) => 
    res.send("create-user")
);

app.post("/login", (req, res) => 
    res.send("login")
);

app.post("/channel", (req, res) => 
    res.send("channel")
);

app.get("/search-user", (req, res) => 
    res.send("search-user")
);

app.get("/channel-list", (req, res) => 
    res.send("channel-list")
);

app.post("/message", (req, res) => 
    res.send("message")
);

};

export default applyRoutes;