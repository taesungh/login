import mongoose from "mongoose";
import { Model, Schema } from "mongoose";
import { IApplication } from "./Application.d"
import applicationInfoSchema from "./applicationInfoSchema";
import additionalInfoSchema from "./additionalInfoSchema";
import adminInfoSchema from "./adminInfoSchema";
import reviewSchema from "./reviewSchema";
import { STATUS } from "../constants";

export const applicationSchema: Schema = new mongoose.Schema({
    // user id is _id.
    "_id": String,
    "forms": { // can only be modified by user/editors
        "application_info": applicationInfoSchema,
        "additional_info": additionalInfoSchema
    },
    "admin_info": adminInfoSchema, // Only editable by admin.
    "reviews": [reviewSchema], // each review can only be modified by the reviewer who made it.
    "user": {
        "email": String
    },
    "status": {
        type: String,
        default: "incomplete",
        enumValues: [STATUS.INCOMPLETE, STATUS.SUBMITTED, STATUS.WAITLISTED, STATUS.REJECTED, STATUS.ADMISSION_CONFIRMED, STATUS.ADMISSION_DENIED]
    },
    "type": {
        type: String,
        enumValues: ["is", "oos", "stanford"]
    }
});

const model: Model<IApplication> = mongoose.model("Application", applicationSchema);
export default model;