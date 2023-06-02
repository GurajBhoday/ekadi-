import React from 'react';

import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from '@/components'

const Home = ({ products, bannerData}) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> 
    
   
    <div className="products-heading">
          <h2>Our Products</h2>
          <p>Connect the mordern way! </p>
          </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product.id} product={product} />)}
    </div>

     
    <div className="products-heading">
          <h2>Resellers</h2>
          <p>To become an authorized reseller of our esteemed selection of modern cards,
             we kindly request you to <strong><u><a href="https://forms.gle/AmCJTY3TSZdPCaCq8">click here</a></u></strong> and fill the form.</p>
          </div>
          
    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {  products, bannerData}
  }


}

export default Home