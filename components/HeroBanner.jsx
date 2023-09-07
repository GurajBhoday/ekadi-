import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <div className='test'>
        <h3>{heroBanner.midText}</h3>
        </div>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div>
          <div className="desc2">
            <h5>Why are we different? </h5>
            <p>{heroBanner.desc2}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroBanner