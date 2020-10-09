// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../CSS/Slider.css";

// export default class SliderImage extends Component {
//   state = {
//     activeSlide: 0,
//     activeSlide2: 0,
//   };
//   render() {
//     const settings = {
//       dots: false,
//       arrows: true,
//       infinite: true,
//       speed: 500,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       draggable: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       className: "slides",
//       beforeChange: (current, next) => this.setState({ activeSlide: next }),
//       afterChange: (current) => this.setState({ activeSlide2: current }),
//     };
//     return (
//       <div className="home">
//         <Slider {...settings}>
//           <img
//             width="100%"
//             className="home__image"
//             src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
//             alt=""
//           />
//           <img
//             width="100%"
//             className="home__image"
//             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//             alt=""
//           />
//           <img
//             width="100%"
//             className="home__image"
//             src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
//             alt=""
//           />
//           <img
//             width="100%"
//             className="home__image"
//             src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
//             alt=""
//           />
//           <img
//             width="100%"
//             className="home__image"
//             src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
//             alt=""
//           />
//         </Slider>
//       </div>
//     );
//   }
// }
