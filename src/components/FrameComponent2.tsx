import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.scholarRankContentWrapper, className].join(" ")}>
      <div className={styles.scholarRankContent}>
        <img
          className={styles.scholrrank2pngIcon}
          loading="lazy"
          alt=""
          src="/scholrrank2png@2x.png"
        />
        <div className={styles.gradientParent}>
          <div className={styles.gradient} />
          <div className={styles.scholarRankDescription}>
            <h1 className={styles.scholarrankEmpowerYourContainer}>
              <p className={styles.scholarrankEmpowerYour}>
                <span className={styles.scholarrank}>ScholarRank:</span>
                <span> Empower Your</span>
              </p>
              <p className={styles.educationWithScholarranks}>
                Education with ScholarRank's AI
              </p>
              <p className={styles.technology}>Technology</p>
            </h1>
            <div className={styles.listWrapper}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.featureDetails}>
                    <div className={styles.featureIcons}>
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                    <div className={styles.aiDrivenTestScheduling}>
                      AI-Driven Test Scheduling: Automatically schedules exams
                      based on teacher input,
                    </div>
                  </div>
                  <div className={styles.ensuringEfficientAnd}>
                    ensuring efficient and error-free exam planning.
                  </div>
                </div>
                <div className={styles.item1}>
                  <div className={styles.frameParent}>
                    <div className={styles.iconWrapper}>
                      <img className={styles.icon1} alt="" src="/icon-1.svg" />
                    </div>
                    <div className={styles.intuitiveTestCreation}>
                      Intuitive Test Creation: Teachers can easily create exams
                      by uploading files or text,
                    </div>
                  </div>
                  <div className={styles.streamliningTheTestMaking}>
                    streamlining the test-making process.
                  </div>
                </div>
                <div className={styles.item2}>
                  <img className={styles.icon2} alt="" src="/icon.svg" />
                  <div className={styles.realTimeNotificationsStude}>
                    Real-Time Notifications: Students receive instant alerts
                    about upcoming exams, keeping
                  </div>
                  <div className={styles.themInformedAnd}>
                    them informed and prepared.
                  </div>
                </div>
                <div className={styles.item3}>
                  <img className={styles.icon3} alt="" src="/icon.svg" />
                  <div className={styles.studentTailoredLearningEna}>
                    Student-Tailored Learning: Enables students to ask questions
                    and clear doubts, fostering a
                  </div>
                  <div className={styles.supportiveLearningEnvironmen}>
                    supportive learning environment.
                  </div>
                </div>
                <div className={styles.item4}>
                  <div className={styles.frameGroup}>
                    <div className={styles.iconContainer}>
                      <img className={styles.icon4} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.customizableExamSettings}>
                      Customizable Exam Settings: Offers flexibility in setting
                      exam parameters, catering to
                    </div>
                  </div>
                  <div className={styles.differentTeachingStyles}>
                    different teaching styles and requirements.
                  </div>
                </div>
                <div className={styles.item5}>
                  <div className={styles.frameContainer}>
                    <div className={styles.iconFrame}>
                      <img className={styles.icon5} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.smartAnalyticsProvides}>
                      Smart Analytics: Provides insightful analytics post-exam
                      to help teachers track student
                    </div>
                  </div>
                  <div className={styles.performanceAndProgress}>
                    performance and progress.
                  </div>
                </div>
                <div className={styles.item6}>
                  <div className={styles.frameDiv}>
                    <div className={styles.iconWrapper1}>
                      <img className={styles.icon6} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.secureExamEnvironment}>
                      Secure Exam Environment: Ensures a safe and cheat-proof
                      examination setting,
                    </div>
                  </div>
                  <div className={styles.maintainingAcademicIntegrity}>
                    maintaining academic integrity.
                  </div>
                </div>
                <div className={styles.item7}>
                  <div className={styles.frameParent1}>
                    <div className={styles.iconWrapper2}>
                      <img className={styles.icon7} alt="" src="/icon.svg" />
                    </div>
                    <div className={styles.secureExamEnvironment1}>
                      Secure Exam Environment: Ensures a safe and cheat-proof
                      examination setting,
                    </div>
                  </div>
                  <div className={styles.maintainingAcademicIntegrity1}>
                    maintaining academic integrity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
