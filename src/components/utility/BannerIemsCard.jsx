import { motion } from "framer-motion";
import { TbCurrencyTaka } from "react-icons/tb";

const BannerIemsCard = ({ image, title, description, price }) => {
  return (
    <div className="cursor-pointer min-h-[140px] lg:min-h-[210px] min-w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 backdrop-blur-md rounded-xl flex flex-col items-center justify-center bg-white bg-opacity-40">
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.1 }}
        src={image}
        alt="icecream"
        className="w-24 lg:w-40 -mt-10 lg:-mt-20"
        draggable="false"
      />
      <p className="text-base lg:text-lg font-semibold text-textColor">
        {title}
      </p>
      <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3">
        {description}
      </p>
      <p className="text-sm font-semibold text-headingColor flex items-center gap-1">
        <span className="text-xs text-red-600">
          <TbCurrencyTaka className="text-xl" />{" "}
        </span>{" "}
        {price}
      </p>
    </div>
  );
};

export default BannerIemsCard;
