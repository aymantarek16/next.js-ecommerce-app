import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from '../styles/product.module.scss';

const Product = ({product}) => {
  console.log(product);
  const {title , price , image , id} = product;
  return (
    <div className={Styles.product}>
        <div>
            <Image src={image} width='200px' height='200px' />
        </div>
        <ul>
            <li style={{ margin : '20px auto'}}>{title}</li>
            <li style={{fontWeight : 'bold'}}>{price}$</li> <br/>
        </ul>
        <Link href={`/products/${id}`}><a className = 'btn'>More Details</a></Link>
    </div>
  )
}

export default Product