import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    addedOn: { type: Number, default: Date.now() },
});


userSchema.method({
    saveData: async function () {
        return this.save();
    }
});


userSchema.static({
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

const UserModel = mongoose.model("wc-user", userSchema);

export default UserModel;