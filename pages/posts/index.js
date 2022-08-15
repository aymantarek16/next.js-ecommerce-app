import Link from "next/link";
import Head from "next/head";

const posts = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <button>
            <Link href={`/posts/${post.id}`}>
              <a className="btn">View Details</a>
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default posts;

// getInitialProps is a function that is called on server side and client side.
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
  const data = await res.json();

  return {
    props: {
      posts: data, 
    },
  };
}
