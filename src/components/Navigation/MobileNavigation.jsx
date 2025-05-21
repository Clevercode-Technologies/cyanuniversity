import React, { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utils/use-dimensions";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import { Nav } from "./Nav/Nav";
import "./styles.css";
import { useDispatch } from "react-redux";
import { updateMobileToggle } from "../../../Redux/Splice/AppSplice";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(17px at 370px 44px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  console.log("height: ", height);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMobileToggle(isOpen));
  }, [isOpen]);

  return (
    <div>
      {/* Mobile - View */}
      <div className={`flex`}>
        <div className="w-full">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={`${isOpen ? "" : ""} max-w`}
          >
            <motion.div
              className={`background ${
                isOpen ? "open-bg block" : "close-bg hidden"
              }`}
              variants={sidebar}
            />
            <Nav toggleOpen={toggleOpen} />
            <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;