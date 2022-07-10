import { useEffect } from "react";
import { useRef, useState } from "react";
import { CollapseProps } from "./Collapse.interface";
import styles from "./Collapse.module.scss";

const Collapse = ({ title, content, defaultOpen = false }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const element = contentRef.current;
      if (element) setHeight(element.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef]);
  return (
    <div className={styles.container}>
      <button className={styles.topBar} onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <div
          className={styles.icon}
          style={{ transform: `rotate(${isOpen ? "180" : "0"}deg)` }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              fill="white"
              d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"
            />
          </svg>
        </div>
      </button>
      <div
        className={styles.collapsingContainer}
        style={{ height: isOpen ? height : "0px" }}
      >
        <div className={styles.collapsing} ref={contentRef}>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
