import { response } from "express";
import Data from "../modal/data.modal.js";

export let addData = async (req, res) => {
    try {

        let { timing, usage, deviceName } = req.body;
        let isAvailable = await Data.findOne({ timing });
        if (isAvailable) {
            let update = await Data.findByIdAndUpdate(isAvailable._id, {
                timing,
                usage,
                deviceName
            },
                { new: true })
            return res.status(201).json({ ok: true, response: "created", update });
        }
        else {
            let add = new Data({
                timing,
                usage,
                deviceName
            })
            await add.save();
            return res.status(201).json({ ok: true, response: "created" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ response: "server error", ok: false });
    }
}

export let editData = async(req, res)=>{
    try {
        let {id} = req.params;
        let {deviceName, timing, usage} = req.body;
        let update = await Data.findByIdAndUpdate(id, {
            timing,
            usage,
            deviceName
        },
            { new: true }
        )
        return res.status(201).json({ ok: true, response: "updated"});
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({ response: "server error", ok: false });
    }
}
export let getdata = async (req, res) => {
    try {
        let allData = await Data.find();
        return res.status(200).json({ response: "found", ok: true, data: allData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ response: "server error", ok: false });
    }
}

export let deleteData = async (req, res) => {
    try {
        let { id } = req.params;
        let findAndDel = await Data.findByIdAndDelete(id);
        if (!findAndDel) {
            return res.status(404).json({ response: "Error, refresh the page", ok: false });
        }
        return res.status(200).json({ response: "deleted", ok: true });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ response: "server error", ok: false });
    }
}