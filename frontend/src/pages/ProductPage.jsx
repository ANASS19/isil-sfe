import React from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Counter from '../components/Counter';

function ProductPage() {
  return (
    <div>
        <Announce />
    <Navbar />


    <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Cream Hoody Orignal
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
            doloribus dolore aliquam veniam. Natus totam odit consequatur
            consectetur delectus nihil!
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Prix: <b>70 MAD</b>
            </p>

            <div className="colors flex mt-7 text-2xl">
            Couleurs
              <div className="colorSelect bg-black "></div>
              <div className="colorSelect bg-white "></div>
              <div className="colorSelect bg-yellow-400 "></div>
            </div>

            <div className="mt-7 text-2xl">
             Taille
              <select className="border-[2px] border-silver rounded-md ml-5">
              <option selected disabled>Select</option>
                    <option>S</option>
                    <option >M</option>
                    <option >L</option>
                    <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#111acd] rounded-md shadow-md mb-[30px]  mt-[30px] p-3">
          Ajouter au panier
          </button>
        </div>
      </div>



    <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductPage