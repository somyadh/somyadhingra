import "./style.css";
import Header from '../components/header'
import { EXPERIENCE } from "../components/experience";
import { SIDEBAR } from "../components/sidebar";
import React from "react";

function CV() {
  return (
    <>
      <Header text={"Somya Dhingra"} homeLink={true} blogsLink={true}></Header>
      <div className="OUTERDIV">
        <div className="EXPDETAIL">
          <p className="SECTION_HEADING">Experience</p>
          <EXPERIENCE
            role={`SOFTWARE DEVELOPER II`}
            companyName={`LEAD SCHOOL`}
            timeLine={`FEBRUARY,2022 – PRESENT, Bengaluru`}
            responsibilities={`Working as Backend Developer to build and maintain In-house Content Creation and Delivery System which is the core of all products offered by the school Ed-tech unicorn startup. Worked with Node.JS, PostgreSQL, Redis, S3, EC2, Docker, Jenkins, Angular, React, Python, New Relic for daily project needs`}
          />
          <EXPERIENCE
            role={`SOFTWARE DEVELOPER`}
            companyName={`PINGSPACE `}
            timeLine={`JULY,2020-JANUARY,2022, Penang`}
            responsibilities={`Was one of the founding Backend Developer in Warehouse Management Team for 1st robot-warehousing startup of Malaysia. Utilized Node.JS, PostgreSQL, Redis, RabbitMQ, WebSocket, Docker and more.`}
          />
          <EXPERIENCE
            role={`SDET `}
            companyName={`CISCO`}
            timeLine={`MAY,2018-DECEMBER,2019, Bengaluru`}
            responsibilities={`Authored test cases and test scripts for networking hardware. Utilized Python, Flask, Bootstrap Jenkins and more.`}
          />
          <EXPERIENCE
            role={`SDET `}
            companyName={`WIPRO TECHNOLOGIES`}
            timeLine={`AUGUST,2015-APRIL,2018, Bengaluru`}
            responsibilities={`Conducted Regression Testing for CISCO VoIP phones, automating test cases to for field issues`}
          />
          <p className="SECTION_HEADING">EDUCATION</p>
          <EXPERIENCE
            role={`BACHELOR OF TECHNOLOGY- ELECTRONICS AND INSTRUMENTATION`}
            companyName={`MEERUT INSTITUTE OF ENGINEERING AND TECHNOLOGY`}
            timeLine={`2011-2015 , MEERUT`}
          />
        </div>
        <div className="right-column">
          <SIDEBAR
            contact={`
              som.dhingra@yahoo.in
              Bengaluru, India`}
            industryKnowledge={`
              Web Development
              API Design
              Product Design
              Infra setup and maintenance`}
            toolsAndTechnologies={`
              Javascript  
              Python
              Node.JS
              PostgreSQL
              Redis
              Docker
              WebSocket
              RabbitMq`}
            otherSkills={`
              React JS
              Angular JS`}
            socials={`
              linkedin.com/in/somyadhingra
              github.com/somyadh`} />
        </div>
      </div>
    </>
  );
};

export default CV;
