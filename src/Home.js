import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <p>Eyyyyy It Works !!!</p>
        <img
          className="home_image"
          src="//i5.walmartimages.com/dfw/4ff9c6c9-a9d0/k2-_15e6bb2c-40dd-4091-bc31-0ccdbac7a2ea.v1.jpg"
          alt="Walmart_Home"
        />

        <div className="home_row">
          <Product
            id="0001"
            image="https://images-na.ssl-images-amazon.com/images/I/91jU-B-GXDL._AC_UL1500_.jpg"
            alt="Timberland"
            title="Timberland Henniker II Chronograph 14816JLBN/07: Jam Tangan Pria."
            rating={4}
            price={2850000}
          />
          <Product
            id="0002"
            image="https://images-na.ssl-images-amazon.com/images/I/81gyy-ooz0L._AC_UY500_.jpg"
            alt="Tag-Heuer"
            title="TAG Heuer CV2010.BA0786 Carrera Automatic Chronograph: Jam Tangan Pria."
            rating={3}
            price={28600000}
          />
          <Product
            id="0003"
            image="https://cdn2.jomashop.com/media/catalog/product/t/i/tissot-t-sport-v8-black-dial-chronograph-men_s-watch-t1064171105100.jpg"
            alt="Tissot"
            title="Tissot T-Sport V8 Chronograph T1064171105100: Jam Tangan Pria."
            rating={5}
            price={32300000}
          />
        </div>
        <div className="home_row">
          <Product
            id="0004"
            image="https://www.daikopasal.com/wp-content/uploads/2017/03/SONY-KDL-60W600B-600X600.jpg"
            alt="Sony-SmartTV"
            title="Sony BRAVIA KDL-60W600B 60-Inch: Ukuran Layar 60-Inch, Resolusi 1920x1080, Dimensi 1370x811x84, Berat 19.9Kg."
            rating={5}
            price={16800000}
          />
          <Product
            id="0005"
            image="https://static.bmdstatic.com/pk/product/medium/5b03dc322e989.jpg"
            alt="LG-SmartTV"
            title="LG Smart TV UHD 55UK6300PTE 55-Inch: Ukuran Layar 55-Inch, Resolusi 3840×2160 (4K UHD), Konektivitas HDMI/USB."
            rating={4}
            price={10670000}
          />
        </div>
        <div className="home_rowLast">
          <Product
            id="0006"
            image="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/9/25/40410849-1642-4e23-bc81-426e08bf30eb.jpg"
            alt="Nvidia-RTX-3090"
            title="Gigabyte Nvidia GeForce RTX 3090 Gaming OC 24GB GDDR6X: Kartu Grafis Komputer."
            rating={5}
            price={33500000}
          />
          <Product
            id="0007"
            image="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/26/9126088/9126088_e8dd224a-18d7-4262-8f63-3361b666c1f8_700_700"
            alt="Intel-Corei9-10900K"
            title="Intel Core i9 10900K: Jumlah Core/Thread 10/20, Ukuran Cache 20MB."
            rating={4}
            price={9680000}
          />
          <Product
            id="0008"
            image="https://ae01.alicdn.com/kf/HTB1eC06XsfrK1RkSnb4q6xHRFXaf.jpg"
            alt="G.Skill-Trident"
            title="G.Skill Trident Z RGB 16GB DDR4: Kecepatan 3200Mhz, Kapasitas 16GB (8GBx2)."
            rating={5}
            price={2300000}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
