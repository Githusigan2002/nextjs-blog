import mongoose, { model, models, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    img: String,
    date: String,
  },
  { toJSON: { virtuals: true } }
);

postSchema.virtual("short_desc").get(function () {
  return this.description.substring(0, 50)+'...';
});

const postModel = mongoose.models.Post || model("Post", postSchema);

export default postModel;
