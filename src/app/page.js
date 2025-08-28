"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setposts] = useState([]);

  async function fetchData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts");
    const data = await res.json();
    setposts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <section className="max-w-5xl mx-auto">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post, id) => (
            <Link href={"/post/" + post.id}>
              <article
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.short_desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <a
                      href="#"
                      className="text-blue-600 hover:underline font-medium text-sm"
                    ></a>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
