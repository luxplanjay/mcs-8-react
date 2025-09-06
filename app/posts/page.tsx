import { fetchPosts } from "@/lib/posts-api";
import Link from "next/link";

export default async function PostsPage() {
  // await new Promise((r) => setTimeout(r, 3000));
  const posts = await fetchPosts();

  return (
    <div>
      <Link href="/posts/create">Create new post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
