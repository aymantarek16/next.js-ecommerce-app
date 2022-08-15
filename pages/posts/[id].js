import React from "react";

const manyPosts = ({ post }) => {
  const { id, title } = post;
  return (
    <div>
      <h1>{`Id : ${id}`}</h1>
      <h1>{`Title : ${title}`}</h1>
    </div>
  );
};

export default manyPosts;

export async function getStaticPaths() {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await req.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await req.json();

  return {
    props: { post },
  };
}
