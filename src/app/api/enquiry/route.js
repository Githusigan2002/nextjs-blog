import { NextResponse } from "next/server";
import connetdb from "../../../utils/connectdb";
import EnquiryModel from "../../../models/enquiryModel";
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const EnquiryData = { name, email, message };

    await connetdb();
    await EnquiryModel.create(EnquiryData);
    return Response.json({ message: "Enquiry has been recorded!" });
  } catch (error) {
    // console.error("Error in POST /api/enquiry:", error);
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
