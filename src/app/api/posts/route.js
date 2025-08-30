import { NextResponse } from "next/server";
import connectdb from "../../../utils/connectdb";
import postModel from "../../../models/postModel";
import next from "next";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");
  console.log(query);

  try {
    await connectdb();
    let postData;
    if (query) {
      postData = await postModel.find({
        $or: [
          { title: new RegExp(query, "i") },
          { description: new RegExp(query, "i") },
        ],
      });
    } else {
      postData = await postModel.find({});
    }
    return NextResponse.json(postData);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
