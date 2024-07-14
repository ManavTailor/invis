import { FunctionComponent } from "react";
import styles from "./TestimonialItems.module.css";

export type TestimonialItemsType = {
  className?: string;
  p6jpg?: string;
  johnDoe?: string;
};

const TestimonialItems: FunctionComponent<TestimonialItemsType> = ({
  className = "",
  p6jpg,
  johnDoe,
}) => {
  return (
    <div className={[styles.testimonialItems, className].join(" ")}>
      <img className={styles.p6jpgIcon} loading="lazy" alt="" src={p6jpg} />
      <div className={styles.p6}>
        <blockquote className={styles.loremIpsumDolorContainer}>
          <span className={styles.loremIpsumDolorContainer1}>
            <p className={styles.loremIpsumDolor}>
              ""Lorem ipsum dolor sit amet,
            </p>
            <p className={styles.consecteturAdipiscingElit}>
              consectetur adipiscing elit. Duis sed
            </p>
            <p className={styles.dapibusLeoNec}>
              dapibus leo nec ornare diam sedasd
            </p>
            <p className={styles.commodoNibhAnte}>
              commodo nibh ante facilisis bibendum
            </p>
            <p className={styles.dolorFeugiatAt}>dolor feugiat at.""</p>
          </span>
        </blockquote>
        <div className={styles.johnDoe}>{johnDoe}</div>
      </div>
    </div>
  );
};

export default TestimonialItems;
