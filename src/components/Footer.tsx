import { FunctionComponent, useCallback } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://www.facebook.com/goInvithi");
  }, []);

  const onItemLinkClick1 = useCallback(() => {
    window.open("https://www.linkedin.com/in/invithi-software-0a7116209/");
  }, []);

  const onItemLinkClick2 = useCallback(() => {
    window.open("https://www.instagram.com/invithi_software/");
  }, []);

  return (
    <section
      className={[styles.footer, className].join(" ")}
      data-scroll-to="footer"
    >
      <h1 className={styles.getInTouch}>Get In Touch</h1>
      <div className={styles.overlay} />
      <div className={styles.contactFormContainer}>
        <div className={styles.formAndInfo}>
          <div className={styles.formContainer}>
            <div className={styles.formFields}>
              <div className={styles.messageField}>
                <div className={styles.pleaseFillOut}>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </div>
                <div className={styles.formContainer1}>
                  <div className={styles.nameEmailInputs}>
                    <div className={styles.input}>
                      <input
                        className={styles.name}
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div className={styles.input1}>
                      <div className={styles.email}>Email</div>
                    </div>
                  </div>
                  <div className={styles.textarea}>
                    <div className={styles.message}>Message</div>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.sendMessage}>Send Message</div>
              </button>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.heading3}>Contact Info</div>
            <div className={styles.contactDetails}>
              <div className={styles.addressContainer}>
                <div className={styles.addressBlock}>
                  <div className={styles.addressIcon}>
                    <img className={styles.icon} alt="" src="/icon-21.svg" />
                  </div>
                  <div className={styles.address}> Address</div>
                </div>
                <div className={styles.coSukanContainer}>
                  <p className={styles.coSukan}>
                    C/O - Sukan Thakur Ward- 03 , Village
                  </p>
                  <p className={styles.nahasRupauliNorth}>
                    - Nahas Rupauli North, Bihar, 847222
                  </p>
                </div>
              </div>
              <div className={styles.phoneContainer}>
                <div className={styles.phoneBlock}>
                  <div className={styles.phoneIcon}>
                    <img className={styles.icon1} alt="" src="/icon-22.svg" />
                  </div>
                  <div className={styles.phone}> Phone</div>
                </div>
                <div className={styles.phoneNumber}>+91 7033016880</div>
              </div>
              <div className={styles.emailContainer}>
                <div className={styles.emailBlock}>
                  <div className={styles.emailIcon}>
                    <img className={styles.icon2} alt="" src="/icon-23.svg" />
                  </div>
                  <div className={styles.email1}> Email</div>
                </div>
                <div className={styles.supportinvithisoftwarecom}>
                  support@invithisoftware.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.list}>
            <div className={styles.itemLink} onClick={onItemLinkClick}>
              <img
                className={styles.logosfacebookIcon}
                loading="lazy"
                alt=""
                src="/logosfacebook.svg"
              />
            </div>
            <div className={styles.itemLink1} onClick={onItemLinkClick1}>
              <img
                className={styles.skillIconslinkedin}
                loading="lazy"
                alt=""
                src="/skilliconslinkedin.svg"
              />
            </div>
            <div className={styles.itemLink2} onClick={onItemLinkClick2}>
              <img
                className={styles.skillIconsinstagram}
                loading="lazy"
                alt=""
                src="/skilliconsinstagram.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
