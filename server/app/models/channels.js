import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
   channelUsers: [
    {
        email: { type: String, default: "" },
        name: { type: String, default: "" },
        profilePic: { type: String, default: "" },
    },
   ],
   messaegs: [
    {
        senderEmail: { type: String, default: "" },
        messageType: { type: String, default: "TEXT"},
        text: { type: String, default: "" },
        addedOn: { type: Number, default: Date.now() },
    },
   ],
   addedOn: { type: Number, default: Date.now() },
});


channelSchema.method({
    saveData: async function () {
        return this.save();
    },
});


channelSchema.static({
    findData: function (findObj) {
        return this.find(findObj);
    },
    findOneData: function (findObj) {
        return this.findOne(findObj);
    },
    findAndUpdateData: function (findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
        })
    }
});

const ChannelModel =  mongoose.model("wc-channel", channelSchema);
export default ChannelModel;