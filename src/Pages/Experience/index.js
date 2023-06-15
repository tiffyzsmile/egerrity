import "./Experience.scss";
import PageTitle from "../../Components/PageTitle";
import React from "react";
import Card from "../../Components/Card";

const Experience = () => {
  return (
    <div className="experience">
      <div className="bg1"></div>
      <div className="bg2"></div>
      <div className="content-max">
        <PageTitle>✏️ Experience</PageTitle>
        <Card className="experience">
          <h1>Senior Product Designer, Design Systems</h1>
          <p className="company">
            Quantum Metric • Remote, Colorado Springs, CO
          </p>
          <p className="date">Aug 2022 ‐ Current</p>
          <p className="role">
            Product Designer, Design Systems, Oct 2021 - Aug 2022
          </p>
          <ul>
            <li>Roadmapping and planning</li>
            <li>Figma library Evaluation and Maintenance</li>
            <li>On-going component library construction</li>
            <li>Button Component</li>
            <li>Custom Icon Library</li>
            <li>Design System user research</li>
            <li>Figma mentorship, training, and troubleshooting</li>
            <li>Design Workflow Optimization</li>
          </ul>
        </Card>
        <Card className="experience closed">
          <h1>Product Designer</h1>
          <p className="company">
            Upside Business Travel • Remote, Washington DC
          </p>
          <p className="date">Nov 2020 ‐ Aug 2021</p>
        </Card>
        <Card className="experience closed">
          <h1>Associate Product Designer</h1>
          <p className="company">
            Callyo/Motorola Solutions • Saint Petersburg, FL
          </p>
          <p className="date">May 2019 ‐ Nov 2020</p>
        </Card>
        <Card className="experience closed">
          <h1>Visual Designer</h1>
          <p className="company">ConnectWise • Tampa, FL</p>
          <p className="date">Sep 2017 ‐ May 2019</p>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
