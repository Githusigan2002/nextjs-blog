"use client";
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const [post, setpost] = useState(null);
  const id = params.id;

  async function fetchData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id);
    const data = await res.json();
    setpost(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {post && (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
          <img
            className="w-full h-64 object-cover rounded-md mb-6"
            src={post.img}
            alt="Blog post cover"
          />
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="mr-4">
              <span className="font-semibold text-gray-700">{post.autor}</span>{" "}
              Jane Doe
            </span>
            <span className="mr-4">
              <span className="font-semibold text-gray-700">{post.date}</span>{" "}
            </span>
            {/* <span>
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              Technology
            </span> */}
          </div>
          <div className="prose max-w-none">
            <p>{post.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
