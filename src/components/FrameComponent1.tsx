import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.restaurantContentWrapper, className].join(" ")}>
      <div className={styles.restaurantContent}>
        <div className={styles.restaurantContentInner}>
          <div className={styles.gradientParent}>
            <div className={styles.gradient} />
            <div className={styles.smartRestaurantDescription}>
              <h1 className={styles.empoweringRestaurantsWithContainer}>
                <p className={styles.empoweringRestaurantsWith}>
                  Empowering Restaurants with
                </p>
                <p className={styles.cuttingEdgeSolutionsFor}>
                  Cutting-Edge Solutions for
                </p>
                <p className={styles.seamlessOperationsAnd}>
                  Seamless Operations and
                </p>
                <p className={styles.enhancedCustomer}>Enhanced Customer</p>
                <p className={styles.experiences}>Experiences</p>
              </h1>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.restaurantFeatureDetails}>
                    <div className={styles.restaurantFeatureIcons}>
                      <img className={styles.icon} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.streamliningMenuManagement}>
                      Streamlining menu management is effortless, allowing
                      restaurants to
                    </div>
                  </div>
                  <div className={styles.updateMenusInContainer}>
                    <p className={styles.updateMenusIn}>
                      update menus in real-time and respond to changing customer
                      preferences
                    </p>
                    <p className={styles.promptly}>promptly.</p>
                  </div>
                </div>
                <div className={styles.item1}>
                  <div className={styles.frameParent}>
                    <div className={styles.iconWrapper}>
                      <img className={styles.icon1} alt="" src="/icon-1.svg" />
                    </div>
                    <div className={styles.orderManagementBenefits}>
                      Order management benefits from technology by automating
                      order
                    </div>
                  </div>
                  <div className={styles.processingReducingErrorsContainer}>
                    <p className={styles.processingReducingErrors}>
                      processing, reducing errors, and speeding up service,
                      resulting in better
                    </p>
                    <p className={styles.customerExperiences}>
                      customer experiences.
                    </p>
                  </div>
                </div>
                <div className={styles.item2}>
                  <div className={styles.frameGroup}>
                    <div className={styles.iconContainer}>
                      <img className={styles.icon2} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.optimizingTableManagement}>
                      Optimizing table management is simplified, as technology
                      helps maximize
                    </div>
                  </div>
                  <div className={styles.restaurantCapacityThroughContainer}>
                    <p className={styles.restaurantCapacityThrough}>
                      restaurant capacity through seating arrangements, waitlist
                      management, and
                    </p>
                    <p className={styles.reservations}>reservations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.smartrestaurantpngIcon}
          loading="lazy"
          alt=""
          src="/smartrestaurantpng@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
