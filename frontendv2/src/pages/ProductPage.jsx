import React, { useState, useEffect } from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [quantity, setCount] = useState(1);

  const [Product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get("/api/Product/" + id);
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...Product, quantity, color, size }));
  };

  return (
    <div>
      <Announce />
      <Navbar />

      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img src={Product.image} alt="product_image" />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            {Product.name}
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            {Product.description}
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Prix: <b>{Product.price}</b>
            </p>

            <div className="colors flex mt-7 text-2xl">
              Couleurs
              <select
                className="border-[2px] border-silver rounded-md ml-5"
                onChange={(e) => setColor(e.target.value)}
              >
                <option>select</option>
                {Product.color?.map((c) => (
                  <option>{c.color}</option>
                ))}
              </select>
            </div>

            <div className="mt-7 text-2xl">
              Taille
              <select
                className="border-[2px] border-silver rounded-md ml-5"
                onChange={(e) => setSize(e.target.value)}
              >
                <option>select</option>
                {Product.size?.map((s) => (
                  <option>{s.size}</option>
                ))}
              </select>
            </div>
            <div className="mt-7">
              <div>
                <div className="counter flex items-center text-2xl justify-start">
                  Qualité
                  <div className="ml-5 shadow-md flex">
                    <div
                      className="bg-[#2825d8] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
                      onClick={() => quantity > 1 && setCount(quantity - 1)}
                    >
                      -
                    </div>
                    <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
                      {quantity}
                    </div>
                    <div
                      className="bg-[#2825d8] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
                      onClick={() => setCount(quantity + 1)}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="text-white bg-[#111acd] rounded-md shadow-md mb-[30px]  mt-[30px] p-3"
            onClick={handleClick}
          >
            Ajouter au panier
          </button>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
