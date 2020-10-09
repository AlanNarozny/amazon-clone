import React from "react";
import "../CSS/Discover.css";
function Discover() {
  return (
    <div className="discover">
      <div className="discover__text">
        <h2 className="discover__head">Discover</h2>
        <p>Click to learn more</p>
      </div>
      <div className="discover__features__main">
        <div className="discover__features">
          <img
            className="dicover__featuresImage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
            alt=""
          />
          <img
            className="dicover__featuresImage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg"
            alt=""
          />
        </div>
        <div className="discover__features">
          <img
            className="dicover__featuresImage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg"
            alt=""
          />
          <img
            className="dicover__featuresImage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_ImportFees_en_US_1X._CB451228332_.jpg"
            alt=""
          />
        </div>
        <div className="discover__features">
          <img
            className="dicover__featuresImage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_TrackPackage_en_US_1X._CB451228335_.jpg"
            alt=""
          />
          <img
            className="dicover__featuresImage"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Discover;
