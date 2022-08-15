import React from "react";
import Styles from "../../styles/singleProduct.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const singleProduct = ({ product }) => {
  const { title, price, description, category, image } = product;
  return (
    <div className={Styles.product}>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <Image src={image} alt={title} width="300px" height="300px" />
      </div>
      <div>
        <h2 className={Styles.title}>{title}</h2>
        <h3>{category}</h3>
        <h1 className={Styles.price}>{price},00$</h1>
        <p>{description}</p>
        <button style={{ margin: "20px 0", border: "none" }} onClick={(e)=>{e.preventDefault()}}>
          <Link href="/">
            <a className="btn">Continue shopping</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default singleProduct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await req.json();

  return {
    props: { product },
  };
}
