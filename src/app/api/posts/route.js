import { NextResponse } from "next/server";
import connectdb from "../../../utils/connectdb";
import postModel from "../../../models/postModel";

export async function GET() {
  try {
    await connectdb();
    const postData = await postModel.find({});
    return NextResponse.json(postData);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
