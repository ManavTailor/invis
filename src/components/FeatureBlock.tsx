import { FunctionComponent } from "react";
import styles from "./FeatureBlock.module.css";

export type FeatureBlockType = {
  className?: string;
};

const FeatureBlock: FunctionComponent<FeatureBlockType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.featureBlock, className].join(" ")}
      data-scroll-to="featureBlock"
    >
      <div className={styles.featuresContentWrapper}>
        <div className={styles.featuresContent}>
          <h1 className={styles.features}>Features</h1>
          <div className={styles.gradientBackground}>
            <div className={styles.gradient} />
          </div>
        </div>
      </div>
      <div className={styles.weAreThrilledToAnnounceThWrapper}>
        <blockquote className={styles.weAreThrilledContainer}>
          <span className={styles.weAreThrilledContainer1}>
            <p
              className={styles.weAreThrilled}
            >{`"We are thrilled to announce that our organization has secured substantial funding from AWS & Google Startup`}</p>
            <p className={styles.acceleratorProgramsMarking}>
              accelerator programs, marking a significant milestone in our
              journey towards innovation and growth."
            </p>
          </span>
        </blockquote>
      </div>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.itemsList}>
          <img
            className={styles.itemIcon}
            loading="lazy"
            alt=""
            src="/item.svg"
          />
          <div className={styles.subItems}>
            <img className={styles.itemIcon1} alt="" src="/item-1.svg" />
            <img className={styles.itemIcon2} alt="" src="/item-1.svg" />
          </div>
          <img className={styles.itemIcon3} alt="" src="/item-1.svg" />
          <img className={styles.itemIcon4} alt="" src="/item-1.svg" />
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
