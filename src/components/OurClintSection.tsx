import { FunctionComponent } from "react";
import TestimonialItems from "./TestimonialItems";
import styles from "./OurClintSection.module.css";

export type OurClintSectionType = {
  className?: string;
};

const OurClintSection: FunctionComponent<OurClintSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.ourClintSection, className].join(" ")}>
      <div className={styles.whatOurClintSay}>
        <div className={styles.testimonialContentWrapper}>
          <div className={styles.testimonialContent}>
            <h1 className={styles.whatOurClients}>What our clients say</h1>
            <div className={styles.gradient} />
          </div>
        </div>
        <div className={styles.testimonials}>
          <TestimonialItems p6jpg="/p6jpg@2x.png" johnDoe="- John Doe" />
          <TestimonialItems p6jpg="/p5jpg@2x.png" johnDoe="- Johnathan Doe" />
          <TestimonialItems p6jpg="/p4jpg@2x.png" johnDoe="- John Doe" />
          <TestimonialItems p6jpg="/p3jpg@2x.png" johnDoe="- Johnathan Doe" />
          <TestimonialItems p6jpg="/p2jpg@2x.png" johnDoe="- John Doe" />
          <TestimonialItems p6jpg="/p1jpg@2x.png" johnDoe="- Johnathan Doe" />
        </div>
      </div>
    </section>
  );
};

export default OurClintSection;
