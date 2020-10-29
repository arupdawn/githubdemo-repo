import React, { useState, useEffect } from "react";
import "./Home.css";
import { db } from "./firebase";
import Product from "./Product";
import SearchIcon from "@material-ui/icons/Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [input, setInput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({ docid: doc.id, data: doc.data() }))
      ); /// Powerful code in firestore db
    });
  }, []);

  const searchProduct = (data) => {
    let words = [];
    words = data.title.toLowerCase().split(" ");
    console.log(" words >> ", words);
    for (let i = 0; i < words.length; i++) {
      if (searchValue == words[i]) {
        return true;
      }
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
          alt=""
        />

        <form action="" className="home__search">
          <select
            className="home__categoryList"
            name="categoryList"
            id="categoryList"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="shoes">shoes</option>
            <option value="watches">watches</option>
            <option value="speakers">speakers</option>
          </select>
          <input
            className="home__searchInput"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setSearchValue("");
            }}
          />
          <button onClick={(e) => {
              e.preventDefault();
              setSearchValue(input?.toLowerCase());
            }}></button>
          <SearchIcon
            onClick={(e) => {
              setSearchValue(input?.toLowerCase());
            }}
            className="home__searchIcon"
          />
        </form>

        <div className="home__row">
          {products.map(({ docid, data }) => {
            if (data.category == category) {
              let flag = false;
              flag = searchProduct(data);
              if (searchValue == "")
                return <Product docid={docid} data={data} />;
              else {
                if (flag) {
                  return <Product docid={docid} data={data} />;
                }
              }
            }
            if (category == "All") {
              let flag = false;
              flag = searchProduct(data);
              if (searchValue == "")
                return <Product docid={docid} data={data} />;
              else {
                if (flag) {
                  return <Product docid={docid} data={data} />;
                }
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
