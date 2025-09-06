"use client";

import { useRouter } from "next/navigation";

export default function CreatePost() {
  const router = useRouter();

  return (
    <div>
      <h1 onClick={() => alert("Yes")}>Create post page</h1>
      <button onClick={() => router.push("/posts")}>Back to posts</button>
    </div>
  );
}
