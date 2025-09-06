import { fetchPostById } from "@/lib/posts-api";
import { Metadata } from "next";

type Props = {
  params: Promise<{ postId: string }>;
};

// export const metadata: Metadata = {
//   title: "Single post page",
//   description: "qweqweqwe",
// };

export async function generateMetadata({ params }: Props) {
  const { postId } = await params;
  const post = await fetchPostById(postId);

  return {
    title: post.title,
    description: "qweqweqwe",
  };
}

export default async function PostDetailsPage({ params }: Props) {
  const { postId } = await params;
  const post = await fetchPostById(postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
