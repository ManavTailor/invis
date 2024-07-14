import React from "react";
import { Button, Card } from "antd";
import { motion } from "framer-motion";
import { GlareCard } from "./glare-card";
import { BackgroundBeams } from "./BackgroundBeams";

const Career = () => {
  return (
    <div className="bg-gray-50 h-screen ">
      <BackgroundBeams />
      <div
        style={{
          padding: "0 50px",
        }}
      >
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center"
        >
          <div
            style={{
              fontFamily: "Arial",
              color: "gray",
              textAlign: "center",
              padding: "50px",
              paddingTop: "100px",
            }}
          >
            Directly apply for jobs by sending resume to{" "}
            <span
              style={{
                color: "blue",
                textDecoration: "underline",
              }}
            >
              hr@invithisoftware.com
            </span>
          </div>
          <div
            style={{
              width: "100%",
              // maxWidth: "600px",
            }}
          >
            <div className="text-xl font-medium mb-5">
              We have following openings:
            </div>
            <div className="flex flex-row justify-between gap-16 mb-10">
              <Card className="flex flex-col items-center justify-center shadow-lg">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      width: "70%",
                      color: "blue",
                    }}
                    className="font-semibold"
                  >
                    (Paid Training) Basic & Advanced Python (using Python 3.7,
                    MySQL/MongoDB, etc.) (With Internship Certificate)
                  </h4>
                  <Button className="z-[999999]" type="primary">
                    Apply
                  </Button>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Location:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Remote- PAN INDIA
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Open Position:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      500
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Job ID :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PYTHON2023
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Job Added On :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      19/06/2024
                    </span>
                  </div>
                </div>
                <div className="py-2 pb-4">
                  <div style={{ color: "blue" }}>Job Description</div>
                  <span>
                    Invithi Software invites application from BE/B.Tech/BCA/MCA
                    Students of 2022/2023 Batch For Python Development Training
                    Program. Fee for this 2 Month Course is : 8,000/- INR
                  </span>
                </div>
                <div>
                  <div style={{ color: "blue" }}>Our Requirement</div>
                  <span>
                    Have keen interest in Development. 2. Have basic Knowledge
                    of programming.
                  </span>
                </div>
              </Card>
              <Card className="flex flex-col items-center justify-center shadow-lg">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      width: "70%",
                      color: "blue",
                    }}
                    className="font-semibold"
                  >
                    (Paid Training) Basic & Advanced Python (using Python 3.7,
                    MySQL/MongoDB, etc.) (With Internship Certificate)
                  </h4>
                  <Button className="z-[999999]" type="primary">
                    Apply
                  </Button>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Location:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Remote- PAN INDIA
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Open Position:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      500
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Job ID :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PYTHON2023
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Job Added On :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      19/06/2024
                    </span>
                  </div>
                </div>
                <div className="py-2 pb-4">
                  <div style={{ color: "blue" }}>Job Description</div>
                  <span>
                    Invithi Software invites application from BE/B.Tech/BCA/MCA
                    Students of 2022/2023 Batch For Python Development Training
                    Program. Fee for this 2 Month Course is : 8,000/- INR
                  </span>
                </div>
                <div>
                  <div style={{ color: "blue" }}>Our Requirement</div>
                  <span>
                    Have keen interest in Development. 2. Have basic Knowledge
                    of programming.
                  </span>
                </div>
              </Card>
            </div>
            <div className="flex flex-row justify-between gap-16 mb-10">
              <Card className="flex flex-col items-center justify-center shadow-lg">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      width: "70%",
                      color: "blue",
                    }}
                    className="font-semibold"
                  >
                    (Paid Training) Basic & Advanced Python (using Python 3.7,
                    MySQL/MongoDB, etc.) (With Internship Certificate)
                  </h4>
                  <Button className="z-[999999]" type="primary">
                    Apply
                  </Button>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Location:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Remote- PAN INDIA
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Open Position:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      500
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Job ID :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PYTHON2023
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Job Added On :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      19/06/2024
                    </span>
                  </div>
                </div>
                <div className="py-2 pb-4">
                  <div style={{ color: "blue" }}>Job Description</div>
                  <span>
                    Invithi Software invites application from BE/B.Tech/BCA/MCA
                    Students of 2022/2023 Batch For Python Development Training
                    Program. Fee for this 2 Month Course is : 8,000/- INR
                  </span>
                </div>
                <div>
                  <div style={{ color: "blue" }}>Our Requirement</div>
                  <span>
                    Have keen interest in Development. 2. Have basic Knowledge
                    of programming.
                  </span>
                </div>
              </Card>
              <Card className="flex flex-col items-center justify-center shadow-lg">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      width: "70%",
                      color: "blue",
                    }}
                    className="font-semibold"
                  >
                    (Paid Training) Basic & Advanced Python (using Python 3.7,
                    MySQL/MongoDB, etc.) (With Internship Certificate)
                  </h4>
                  <Button className="z-[999999]" type="primary">
                    Apply
                  </Button>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Location:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Remote- PAN INDIA
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Open Position:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      500
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Job ID :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PYTHON2023
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Job Added On :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      19/06/2024
                    </span>
                  </div>
                </div>
                <div className="py-2 pb-4">
                  <div style={{ color: "blue" }}>Job Description</div>
                  <span>
                    Invithi Software invites application from BE/B.Tech/BCA/MCA
                    Students of 2022/2023 Batch For Python Development Training
                    Program. Fee for this 2 Month Course is : 8,000/- INR
                  </span>
                </div>
                <div>
                  <div style={{ color: "blue" }}>Our Requirement</div>
                  <span>
                    Have keen interest in Development. 2. Have basic Knowledge
                    of programming.
                  </span>
                </div>
              </Card>
            </div>
            <div className="flex flex-row justify-between gap-16">
              <Card className="flex flex-col items-center justify-center shadow-lg">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      width: "70%",
                      color: "blue",
                    }}
                    className="font-semibold"
                  >
                    (Paid Training) Basic & Advanced Python (using Python 3.7,
                    MySQL/MongoDB, etc.) (With Internship Certificate)
                  </h4>
                  <Button className="z-[999999]" type="primary">
                    Apply
                  </Button>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Location:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Remote- PAN INDIA
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Open Position:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      500
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Job ID :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PYTHON2023
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Job Added On :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      19/06/2024
                    </span>
                  </div>
                </div>
                <div className="py-2 pb-4">
                  <div style={{ color: "blue" }}>Job Description</div>
                  <span>
                    Invithi Software invites application from BE/B.Tech/BCA/MCA
                    Students of 2022/2023 Batch For Python Development Training
                    Program. Fee for this 2 Month Course is : 8,000/- INR
                  </span>
                </div>
                <div>
                  <div style={{ color: "blue" }}>Our Requirement</div>
                  <span>
                    Have keen interest in Development. 2. Have basic Knowledge
                    of programming.
                  </span>
                </div>
              </Card>
              <Card className="flex flex-col items-center justify-center shadow-lg">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      width: "70%",
                      color: "blue",
                    }}
                    className="font-semibold"
                  >
                    (Paid Training) Basic & Advanced Python (using Python 3.7,
                    MySQL/MongoDB, etc.) (With Internship Certificate)
                  </h4>
                  <Button className="z-[999999]" type="primary">
                    Apply
                  </Button>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Location:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      Remote- PAN INDIA
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Open Position:</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      500
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="py-2"
                >
                  <div>
                    <span style={{ color: "blue" }}>Job ID :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      PYTHON2023
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "blue" }}>Job Added On :</span>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      19/06/2024
                    </span>
                  </div>
                </div>
                <div className="py-2 pb-4">
                  <div style={{ color: "blue" }}>Job Description</div>
                  <span>
                    Invithi Software invites application from BE/B.Tech/BCA/MCA
                    Students of 2022/2023 Batch For Python Development Training
                    Program. Fee for this 2 Month Course is : 8,000/- INR
                  </span>
                </div>
                <div>
                  <div style={{ color: "blue" }}>Our Requirement</div>
                  <span>
                    Have keen interest in Development. 2. Have basic Knowledge
                    of programming.
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
