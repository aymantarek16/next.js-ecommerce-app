import Head from "next/head";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Head>
        <title>About | Ecommerce Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" aboutStyle">
        <Image
          src="/../public/e-commerce.png"
          alt="aboutImage"
          width={1000}
          height={600}
        />
          <p className="paragAbout">
            What is “Retail eCommerce”? When comparing retail and eCommerce,
            you’ll find out that both of those things offer a very similar
            concept – they determine what happens when a product is sold to a
            individual customer, except one of them is executed entirely through
            the internet. Retail can be carried out in a number of ways :
            stores, mails, even direct sales, while eCommerce involves
            commercial transactions that are mostly conducted through the
            internet. There’s also a well-known term that is “retail eCommerce
            sales”, which is defined as the sale of products or services where
            the transaction process is done entirely online. Read more about
            ecommerce websites here.
          </p>
      </div>
    </div>
  );
};

export default about;
