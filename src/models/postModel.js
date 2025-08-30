import mongoose, { model, Schema } from "mongoose";

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

// postSchema.virtual("short_title").get(function () {
//   return this.title.substring(0, 35) + "...";
// });
postSchema.virtual("short_desc").get(function () {
  return this.description.substring(0, 20) + "...";
});

const postModel = mongoose.models.Post || model("Post", postSchema);

export default postModel;
