import Images from "../exports/Images";
import "../styles/slider.css";
import { motion } from "framer-motion";

export function Slider() {
  return (
    <motion.div className="slider-container">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -2850 }}
      >
        {Images.map((image) => (
          <motion.div className="item">
            <img src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
