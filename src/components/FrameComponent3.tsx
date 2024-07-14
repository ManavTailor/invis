import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const onFeaturesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='featureBlock']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={[styles.navWrapper, className].join(" ")}>
      <header className={styles.nav}>
        <div className={styles.invithiSoftwareLogopngWrapper}>
          <img
            className={styles.invithiSoftwareLogopngIcon}
            loading="lazy"
            alt=""
            src="/invithi-software-logopng@2x.png"
          />
        </div>
        <nav className={styles.navListWrapper}>
          <nav className={styles.navList}>
            <div className={styles.featuresCareerLink}>
              <a className={styles.home}>Home</a>
            </div>
            <a className={styles.features} onClick={onFeaturesTextClick}>
              Features
            </a>
            <div className={styles.featuresCareerLink1}>
              <a className={styles.product}>Product</a>
            </div>
            <a href="/career" className={styles.career}>
              Career
            </a>
          </nav>
        </nav>
        <button className={styles.button} onClick={onButtonClick}>
          <a className={styles.contact}>Contact</a>
        </button>
      </header>
    </section>
  );
};

export default FrameComponent3;
