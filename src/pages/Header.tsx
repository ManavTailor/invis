import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FeatureBlock from "../components/FeatureBlock";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import OurClintSection from "../components/OurClintSection";
import Footer from "../components/Footer";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='middle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.header}>
      <FrameComponent3 />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.mainText}>
            <h1 className={styles.experienceAiAdvancementContainer}>
              <p className={styles.experienceAiAdvancement}>
                Experience AI Advancement
              </p>
              <p className={styles.withInvithisAiProducts}>
                <span>{`with `}</span>
                <span className={styles.invithisAiProducts}>
                  Invithi's AI Products
                </span>
                <span className={styles.span}> !</span>
              </p>
            </h1>
            <div className={styles.invithiIsAContainer}>
              <span>
                <p className={styles.invithiIsA}>
                  Invithi is a leading AI product company that offers AI
                </p>
                <p className={styles.solutionsForBusinesses}>
                  solutions for businesses to automate their operations and
                </p>
                <p className={styles.improveProductivityWe}>
                  improve productivity. We offer AI products that are designed
                </p>
                <p className={styles.toHelpBusinesses}>
                  to help businesses grow and succeed in the digital age.
                </p>
              </span>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.learnMore}>Learn More</div>
          </button>
        </div>
      </div>
      <div className={styles.headerChild} />
      <FeatureBlock />
      <section className={styles.middle} data-scroll-to="middle">
        <div className={styles.container}>
          <FrameComponent2 />
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
      <OurClintSection />
      <Footer />
    </div>
  );
};

export default Header;
