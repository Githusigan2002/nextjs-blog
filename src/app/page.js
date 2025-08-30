"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [posts, setposts] = useState([]);
  const [inputText, setinputText] = useState("");
  const [search, setsearch] = useState(false);

  async function fetchData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts");
    const data = await res.json();
    setposts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleinputQuery = (e) => {
    setinputText(e.target.value);
  };

  const searchPost = async (e) => {
    if (e.type == "keydown" && e.key !== "Enter") {
      return;
    }
    setsearch(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `/posts?q=${inputText}`
      );
      const data = await res.json();
      setposts(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setsearch(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-4 px-4">
      <section className="max-w-5xl mx-auto">
        <div className="flex justify-center md:justify-end mb-4 p-1">
          <input
            onChange={handleinputQuery}
            onKeyDown={searchPost}
            disabled={search}
            type="text"
            className="w-full max-w-[200px]  border-blue-500 border-[1px] outline-none bg-white rounded-[5px] text-base text-gray-500"
          />
          <button
            onClick={searchPost}
            disabled={search}
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1 rounded-xl ml-1"
          >
            {search ? "..." : "Search"}
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post, id) => (
            <Link key={id} href={"/post/" + post.id}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-96">
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
                    {/* <span className="text-sm text-gray-500">{post.author}</span> */}
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
      {!posts.length > 0 && inputText && (
        <h3 className="mt-28 text-gray-700 font-bold text-center text-4xl md:grid-cols">
          No post Found for the Query : "{inputText}"
        </h3>
      )}
    </main>
  );
}
