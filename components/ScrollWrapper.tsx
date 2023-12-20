"use client";
import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";

interface ScrollWrapperProps {
  children: React.ReactNode;
}

const ScrollWrapper = ({ children }: ScrollWrapperProps) => {
  const [currentId, setCurrentId] = useState(0);
  //listen to scroll event (with debounce of 300ms) and set currentId to +1 if scroll down and to -1 if scroll up
  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        console.log("Scrolling down");
      } else {
        // Scrolling up
        console.log("Scrolling up");
      }
      lastScrollTop = scrollTop;
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <pre>{currentId}</pre>
      {children}
    </>
  );
};

export default ScrollWrapper;
