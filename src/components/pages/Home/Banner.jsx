import BikeDelivery from "../../../assets/images/delivery.png";
import { motion } from "framer-motion";
import HeroBg from "../../../assets/images/hero-bg.png";
import BannerIemsCard from "../../utility/BannerIemsCard";
import image1 from "../../../assets/images/f5.png";
import image2 from "../../../assets/images/f3.png";
import image3 from "../../../assets/images/i5.png";
import image5 from "../../../assets/images/cu6.png";

const Banner = () => {
  return (
    <div className="max-w-screen-xl px-5 mx-auto md:h-[90vh] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
            <p className="text-base text-orange-500 font-bold">Bike Delivery</p>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
              <img
                src={BikeDelivery}
                alt="delivery"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="my-8 text-2xl md:text-5xl font-bold tracking-wide text-headingColor">
            Fastest Food - Fast and Flavorful
            <span className="text-orange-600 text-2xl md:text-5xl">
              {" "}
              Food Delivery
            </span>
          </h1>
          <p className="text-lg mb-4">
            Fastest Food: Your Ultimate Destination for Quick and Delicious
            Meals! Indulge in our wide selection of mouthwatering dishes, from
            savory classics to delectable desserts, all available for swift
            delivery right to your doorstep. Experience convenience and flavor
            like never before with Fastest Food!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 hover:shadow-lg text-white rounded-lg font-semibold transition-all ease-in-out duration-100"
          >
            Order Now
          </motion.button>
        </div>
        <div className="py-2 flex-1 flex items-center relative">
          <img
            src={HeroBg}
            alt="Hero Bg"
            draggable="false"
            className="ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto"
          />
          <div className="w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 md:py-2 gap-8 flex-wrap ">
            <BannerIemsCard
              image={image1}
              title={"Strawberries"}
              description={"Fresh Strawberries"}
              price={100}
            />
            <BannerIemsCard
              image={image3}
              title={"Creamistry"}
              description={"Ice Cream "}
              price={85}
            />
            <BannerIemsCard
              image={image2}
              title={"Grapes"}
              description={"Delightful Juiciness"}
              price={60}
            />
            <BannerIemsCard
              image={image5}
              title={"Strawberries"}
              description={"Fresh Strawberries"}
              price={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
