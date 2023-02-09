import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Olá, Eu sou</p>
              <h1 className="head-text">Angelo</h1>
            </div>
          </div>

          <div tag-cmp app_flex>
            <p className="p-text">Desenvolvedor Web</p>
            <p className="p-text">UI/UX Designer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
        <img src={images.profile_main} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        {[images.fluttering, images.redux, images.javascript, images.sass].map(
          (circle, index) => {
            <div className="circle-cmp app__flex" key={`circle${index}`}>
              <img src={circle} alt="circle" />
            </div>;
          }
        )}
      </motion.div>
    </div>
  );
};

export default Header;
