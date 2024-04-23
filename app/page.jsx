import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";

const getPost = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return posts;
};

const Home = async () => {
  const post = await getPost();
  console.log({ post });
  return (
    <main className={styles.container}>
      <Link href="/add-post"> Add Post </Link>
      <h1>Amazing Blog Post</h1>
      {post.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          authorName={post.author.name}
          content={post.content}
        />
      ))}
    </main>
  );
};

export default Home;
