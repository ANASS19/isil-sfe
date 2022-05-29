import React, { useState, useEffect } from "react";
import Colors from "../components/Colors";
import DetailsThumb from "../components/DetailsThumb";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Designer from "../components/Designer";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Mondesign extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "PERSONNALISEZ VOTRE T-SHIRT",
        src: [
          "./image/image/tshirt.png",
          "./image/image/lkhadma.png",
          "./image/image/9abiya.png",
          "./image/image/TRIKOSITE.png",
        ],
        size: ["S", "XL", "XS", "L"],
        description:
          "Que vous soyez un particulier ou un professionnel, le t-shirt personnalisé est un produit apprécié par tous.",
        content:
          "si vous adorez customiser vos vêtements, personnaliser votre t-shirt, soyez unique en ayant ",
        price: 125,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }
  render() {
    const { products, index } = this.state;

    return (
      <div>
        <Announce />
        <Navbar />

        <div className="appd">
          {products.map((item) => (
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>

              <div className="box">
                <div className="row text-3xl">
                  <h2>{item.title}</h2>
                </div>
                <p className="mt-7 text-2xl">
                  Prix: <b>{item.price} DH</b>
                </p>

                <p>{item.description}</p>
                <p>{item.content}</p>
                <DetailsThumb
                  images={item.src}
                  tab={this.handleTab}
                  myRef={this.myRef}
                />
                <Colors colors={item.colors} />
                <div className="mt-7 text-2xl">
                  Taille
                  <select className="border-[2px] border-silver rounded-md ml-5 ">
                    <option>select</option>
                    {item.size.map((s) => (
                      <option>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-7 text-2xl">
                  Quantité:
                  <input
                    type="number"
                    className="border-[2px] border-silver rounded-md ml-4"
                  />
                </div>
                <div className="mt-7  ">
                  <span className=" text-[2xl] text-lg ">
                    {" "}
                    Ajouter votre design
                  </span>
                  <input
                    type="file"
                    className="border-[2px] border-silver rounded-md ml-5 "
                  />
                </div>

                <Link to="/shipping">
                  <button className="cart">Continuer vos achats</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Designer />
        <Footer />
      </div>
    );
  }
}

export default Mondesign;
