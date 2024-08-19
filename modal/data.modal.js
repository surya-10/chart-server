import mongoose from "mongoose";

let dataModal = new mongoose.Schema({
    timing:{
        type:String,
        required:true
    },
    usage:{
        type:Number,
        required:true
    },
    deviceName:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})

let Data = mongoose.model("Data", dataModal);
export default Data;