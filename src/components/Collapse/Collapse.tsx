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
      setTimeout(() => {
        const element = contentRef.current;
        if (element) setHeight(element.clientHeight);
      }, 500);
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
          <span className="material-symbols-outlined">expand_more</span>
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
