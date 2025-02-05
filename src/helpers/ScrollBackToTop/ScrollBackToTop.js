import { useState, useEffect } from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const ScrollBackToTop = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isFooterInViewport, setFooterInViewport] = useState(false);

  const isWindowScrolled = () => {
    return window.scrollY > 0;
  };

  const isFooterInViewportFunction = () => {
    const footerTop = document.querySelector('.contact-footer');
    if (footerTop) {
      const rect = footerTop.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewPortHeight = windowHeight;
      return rect.top < viewPortHeight;
    }
    return false;
  };

  const changeButtonState = () => {
    setButtonVisible(isWindowScrolled());
    setFooterInViewport(isFooterInViewportFunction());
    console.log("Scroll")
  };

  useEffect(() => {
    changeButtonState();

    const handleScroll = () => {
      changeButtonState();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
   //  document.body.setAttribute('tabindex', '-1');
   //  document.body.focus(); 
   
  };

  return (
    <button
      className={`scroll-back-to-top ${isButtonVisible ? 'visible' : ''} ${isFooterInViewport ? 'absolute-position' : ''}`}
      onClick={handleClick}
      aria-label="Scroll To Top"
    >
      <ArrowForwardIosIcon />
    </button>
  );
};

export default ScrollBackToTop;
