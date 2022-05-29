import React, { useState } from "react";
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useSelector } from "react-redux";
import {Link } from 'react-router-dom';

function Cart() {
  const [quantity, setCount] = useState(1);
  const cart = useSelector((state) => state.cart);

    const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";
    const ProductDivStyle = "flex w-[100%] h-auto items-center mobile:flex-col";
    const PriceQuantityStyle =
      "flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7";
  return (
    <div>
 <Announce />
    <Navbar />


      <div className="p-3">
        <div className="flex justify-center text-5xl mobile:text-[40px]">Panier</div>

        {/* upper buttons div */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
        <Link to="/shipping">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0 mobile:text-[14px]">
          Continuer vos achats
          </button>
          </Link>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5 mobile:text-[13px]">
            <p>Articles dans votre panier: 3</p>
            <p className="ml-5">Articles supprimer: 0</p>
          </div>
          <Link to="/catalogue">
          <button className="btn mt-0 mobile:text-[15px]">Régler maintenant</button>
          </Link>
        </div>

        {/* vertically center parent div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          
          {/* product div */}

          

          <div className="flex flex-col flex-1">
            {/* 1st product div */}
            {cart.products.map((product) => (
              <div>
            <div className={ProductDivStyle}>
              <div className=" product flex pl-5 self-start">
                <img
                  className="product_img w-[7rem]"
                  src={product.image}
                  alt="product_img"
                />

                <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                  <p>
                    <b className="mr-2">ID:</b>{product.id}
                  </p>
                  <p>
                    <b className="mr-2">Produit:</b>{product.name}
                  </p>
                  <p className="flex items-center justify-center">
                    <b className="mr-2">Couleur:</b>
                    {product.color}
                  </p>
                  <p>
                    <b className="mr-2">Taille :</b>{product.size}
                  </p>
                </div>
              </div>

              {/*Price and Quantity Div*/}
              <div className={PriceQuantityStyle}>
              <div className="ml-5 shadow-md flex">
        
        
        <div className="bg-[#2825d8] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
        onClick={() => product.quantity>1 && setCount(product.quantity - 1)}>
          -
        </div>
        <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
        { product.quantity}
        </div>
        <div className="bg-[#2825d8] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
        onClick={() => setCount(product.quantity + 1)}>
          +
        </div>
        </div>



                <p className="flex items-center justify-center text-4xl mt-3">
                  <b> $ {product.price * product.quantity} MAD</b>
                </p>
              </div>
              </div>
              <hr className="mb-7 mt-7 mobile:mt-0" />
            </div>
           
            
 ))}
            
           
          </div>






          <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[50vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
            <h1 className="text-[2rem]">SUMMARY</h1>
            <div className={SummaryItemStyle}>
              <p>SubTotal:</p>
              <p>{cart.total} MAD</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping:</p>
              <p>10 MAD</p>
            </div>
            <div className={SummaryItemStyle}>
              <p>Shipping Discount:</p>
              <p>-10 MAD</p>
            </div>
            <div className={SummaryItemStyle + " text-3xl font-bold"}>
              <p>Total:</p>
              <p>{cart.total} MAD</p>
            </div>
          </div>
        </div>
       
    <Newsletter />
        <Footer />

    </div>
    </div>
  )
}

export default Cart