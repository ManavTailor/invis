import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.onlinetestpngWrapper}>
        <img
          className={styles.onlinetestpngIcon}
          loading="lazy"
          alt=""
          src="/onlinetestpng@2x.png"
        />
      </div>
      <div className={styles.gradientParent}>
        <div className={styles.gradient} />
        <div className={styles.qsRankDescription}>
          <h1 className={styles.qsrankElevateYourContainer}>
            <p className={styles.qsrankElevateYourTesting}>
              <span className={styles.qsrank}>QSrank:</span>
              <span> Elevate Your Testing</span>
            </p>
            <p className={styles.experienceWithLive}>
              Experience with Live Monitoring
            </p>
            <p className={styles.andExcitingRewards}>and Exciting Rewards</p>
          </h1>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.qsRankFeatureDetails}>
                <div className={styles.qsRankFeatureIcons}>
                  <img className={styles.icon} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.aiPoweredExamPreparation}>
                  AI-Powered Exam Preparation: Tailored for students preparing
                  for various exams, from
                </div>
              </div>
              <div className={styles.competitiveToHigh}>
                competitive to high school levels.
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.frameGroup}>
                <div className={styles.iconWrapper}>
                  <img className={styles.icon1} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.liveScheduledExams}>
                  Live Scheduled Exams: Engage in real-time, scheduled exams to
                  simulate actual test
                </div>
              </div>
              <div className={styles.conditionsAndImprove}>
                conditions and improve time management skills.
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.frameContainer}>
                <div className={styles.iconContainer}>
                  <img className={styles.icon2} alt="" src="/icon-13.svg" />
                </div>
                <div className={styles.instantPerformanceFeedback}>
                  Instant Performance Feedback: Receive immediate ranking after
                  each exam, providing a
                </div>
              </div>
              <div className={styles.clearIndicationOf}>
                clear indication of current preparation status.
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.frameDiv}>
                <div className={styles.iconFrame}>
                  <img className={styles.icon3} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.focusOnWeak}>
                  Focus on Weak Areas: AI algorithms identify and help students
                  concentrate on subjects or
                </div>
              </div>
              <div className={styles.topicsWhereImprovement}>
                topics where improvement is needed.
              </div>
            </div>
            <div className={styles.item4}>
              <div className={styles.frameParent1}>
                <div className={styles.iconWrapper1}>
                  <img className={styles.icon4} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.rewardsForTop}>
                  Rewards for Top Performers: Achieve top ranks and earn assured
                  rewards and
                </div>
              </div>
              <div className={styles.recognitionBoostingMotivati}>
                recognition, boosting motivation and competitive spirit.
              </div>
            </div>
            <div className={styles.item5}>
              <div className={styles.frameParent2}>
                <div className={styles.iconWrapper2}>
                  <img className={styles.icon5} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.accessToPast}>
                  Access to Past Questions: Practice with an extensive database
                  of past questions, aiding in
                </div>
              </div>
              <div className={styles.thoroughExamPreparation}>
                thorough exam preparation.
              </div>
            </div>
            <div className={styles.item6}>
              <div className={styles.frameParent3}>
                <div className={styles.iconWrapper3}>
                  <img className={styles.icon6} alt="" src="/icon-17.svg" />
                </div>
                <div className={styles.interactiveDoubtResolution}>
                  Interactive Doubt Resolution: Directly ask and clarify doubts,
                  fostering a collaborative and
                </div>
              </div>
              <div className={styles.supportiveLearningEnvironmen}>
                supportive learning environment.
              </div>
            </div>
            <div className={styles.item7}>
              <div className={styles.frameParent4}>
                <div className={styles.iconWrapper4}>
                  <img className={styles.icon7} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.performanceTrackingOver}>
                  Performance Tracking Over Time: Monitor progress through
                  detailed analytics and
                </div>
              </div>
              <div className={styles.reportsHelpingIn}>
                reports, helping in strategic study planning.
              </div>
            </div>
            <div className={styles.item8}>
              <div className={styles.frameParent5}>
                <div className={styles.iconWrapper5}>
                  <img className={styles.icon8} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.adaptiveLearningPaths}>
                  Adaptive Learning Paths: The system adapts to individual
                  learning styles and paces,
                </div>
              </div>
              <div className={styles.offeringAPersonalized}>
                offering a personalized educational experience.
              </div>
            </div>
            <div className={styles.item9}>
              <div className={styles.frameParent6}>
                <div className={styles.iconWrapper6}>
                  <img className={styles.icon9} alt="" src="/icon-11.svg" />
                </div>
                <div className={styles.communityLearningEngage}>
                  Community Learning: Engage with a community of fellow
                  aspirants, encouraging peer
                </div>
              </div>
              <div className={styles.learningAndSupport}>
                learning and support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
