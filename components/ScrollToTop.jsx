import { useState, useEffect } from "react";
import styles from "../styles/Scrolltotop.module.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className={styles.scroll}>
      {isVisible && (
        <div onClick={ScrollToTop}>
          <FaArrowAltCircleUp />
        </div>
      )}
    </div>
  );
}
