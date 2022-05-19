import React from 'react';
import { ApiTopPropduct } from '../apifolder/TopProducts';
import Product from './Product';
const Products = () => {
  return <div className='p-5 flex flex-wrap'>
      {
          ApiTopPropduct.map((product, index)=>(
              <Product item={product} key={index}/>
          ))
      }
  </div>;
};

export default Products