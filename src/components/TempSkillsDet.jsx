import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import "@fontsource/roboto";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";
import frame25 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-25.png";
import frame28 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-28.png";
import frame29 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-29.png";
import noAssessment from "/Users/sabhinav/nearbuzz/skills/src/images/no_assessment.png";
import edit from "/Users/sabhinav/nearbuzz/skills/src/images/edit.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SkillCheckBox } from "./MarkExpertSkill";
import { ManageSkills } from "./ManageSkills";
import { Details } from "./SkillDetails";

// const navigateManageSkills = () => {
//   navigate("/src/components/ManageSkills.jsx");
// };

// const ManageSkillsPage = lazy(() => import("./ManageSkills"));

const Comp1 = styled.div`
  margin-left: 0px;
  display: inline-flex;
`;

const Comp2 = styled.div`
  //   margin-left: 440px;
  display: inline-flex;
`;

const CompInside = styled.div`
  margin-left: 10px;
  display: inline-flex;
`;

export const TempDetails = (props) => {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" fixed="top">
          <Container>
            <Navbar.Brand className="navbar">My Skills</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="heading">
          <p>{props.name1}</p>
          <p>{props.name2}</p>
        </div>
        {/* 1st row */}
        <Row>
          <Col>
            <Comp1>
              <div className="details">
                <p>
                  <b>Javascript</b>
                </p>

                <img src={verified} className="imageVerified" alt="verified" />
              </div>
              <div>
                <SkillCheckBox />
              </div>
            </Comp1>
          </Col>

          <Col>
            <Comp2>
              <div>
                <img
                  src={frame28}
                  className="imageAssessment"
                  alt="profiency %"
                />
                <CompInside>
                  <div>
                    <b>Master</b> Level with <b>30%</b> profiency,
                    <br />
                    <p>10 Assessments</p>
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>

          <Col md="4">
            <Comp2>
              <div>
                <CompInside>
                  <div>
                    Self Assessment,
                    <Link to="/manageSkills">
                      <img src={edit} className="imageEdit" alt="profiency %" />
                    </Link>
                    <br />
                    <b>5</b> years, <b>Expert</b> Level with <b>90%</b>
                    profiency
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>
        </Row>

        {/* 2nd row */}

        <Row>
          <Col>
            <Comp1>
              <div className="details">
                <p>
                  <b>Frontend Development</b>
                </p>
                <img src={pending} className="imagePending" alt="pending" />
              </div>
            </Comp1>
          </Col>

          <Col>
            <Comp2>
              <div>
                <img
                  src={frame25}
                  className="imageAssessment"
                  alt="profiency %"
                />
                <CompInside>
                  <div>
                    <b>Master</b> Level with <b>30%</b> profiency,
                    <br />
                    <p>10 Assessments</p>
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>

          <Col md="4">
            <Comp2>
              <div>
                <CompInside>
                  <div>
                    Self Assessment,
                    <Link to="/manageSkills">
                      <img src={edit} className="imageEdit" alt="profiency %" />
                    </Link>
                    <br />
                    <b>3</b> years, <b>Advanced</b> Level with <b>70%</b>
                    profiency
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>
        </Row>

        {/* 3rd row */}

        <Row>
          <Col>
            <Comp1>
              <div className="details">
                <p>
                  <b>UX Design</b>
                </p>
                <img src={pending} className="imagePending" alt="pending" />
              </div>
            </Comp1>
          </Col>

          <Col>
            <Comp2>
              <div>
                <img
                  src={frame29}
                  className="imageAssessment"
                  alt="profiency %"
                />
                <CompInside>
                  <div>
                    <b>Master</b> Level with <b>30%</b> profiency,
                    <br />
                    <p>10 Assessments</p>
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>

          <Col md="4">
            <Comp2>
              <div>
                <CompInside>
                  <div>
                    Self Assessment,
                    <Link to="/manageSkills">
                      <img src={edit} className="imageEdit" alt="profiency %" />
                    </Link>
                    <br />
                    <b>10</b> years, <b>Master</b> Level with <b>70%</b>
                    profiency
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>
        </Row>

        {/* 4th row */}

        <Row>
          <Col>
            <Comp1>
              <div className="details">
                <p>
                  <b>App Developer</b>
                </p>
                <img src={pending} className="imagePending" alt="pending" />
              </div>
            </Comp1>
          </Col>

          <Col>
            <Comp2>
              <div>
                <img
                  src={noAssessment}
                  className="imageAssessment"
                  alt="profiency %"
                />
                <CompInside>
                  <div>
                    <b>Master</b> Level with <b>30%</b> profiency,
                    <br />
                    <p>10 Assessments</p>
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>

          <Col md="4">
            <Comp2>
              <div>
                <CompInside>
                  <div>
                    Self Assessment,
                    <Link to="/manageSkills">
                      <img src={edit} className="imageEdit" alt="profiency %" />
                    </Link>
                    <br />
                    <b>3</b> years, <b>Advanced</b> Level with <b>70%</b>
                    profiency
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>
        </Row>

        {/* 5th row */}

        <Row>
          <Col>
            <Comp1>
              <div className="details">
                <p>
                  <b>Frontend Development</b>
                </p>
                <img src={pending} className="imagePending" alt="pending" />
              </div>
            </Comp1>
          </Col>

          <Col>
            <Comp2>
              <div>
                <img
                  src={noAssessment}
                  className="imageAssessment"
                  alt="profiency %"
                />
                <CompInside>
                  <div>
                    <b>Master</b> Level with <b>30%</b> profiency,
                    <br />
                    <p>10 Assessments</p>
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>

          <Col md="4">
            <Comp2>
              <div>
                <CompInside>
                  <div>
                    Self Assessment,
                    <Link to="/manageSkills">
                      <img src={edit} className="imageEdit" alt="profiency %" />
                    </Link>
                    <br />
                    <b>5</b> years, <b>Expert</b> Level with <b>90%</b>
                    profiency
                  </div>
                </CompInside>
              </div>
            </Comp2>
          </Col>
        </Row>

        {/* <Button onClick={(e) => manageSkills(e)}> */}
        <div className="linkButton">
          <Link to="/manageSkills">
            <img src={edit} className="imageEdit" alt="profiency %" />
            Edit Skills
          </Link>
        </div>
        {/* </Button> */}
      </Container>
    </>
  );
};
