import mongoose, { model, Schema } from "mongoose";

const enquirySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const enquiryModel = mongoose.models.Enquiry || model("Enquiry", enquirySchema);
export default enquiryModel;
