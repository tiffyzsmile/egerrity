import Card from "../../Components/Card";
import Tag from "../../Components/Tag";
import UpsideMobileApp from "./images/upside-mobile-app.png";
import UpsideDesignSystem from "./images/purple.png";
import Monetization from "./images/monetization.png";
import TravelPolicy from "./images/travel-policy.png";
import PolicePhoneContacts from "./images/10-21-police-phone-contacts.png";
import "./Portfolio.scss";
import PortfolioItem from "./Components/PortfolioItem";
import React from "react";
import Button from "../../Components/Button";
import PageTitle from "../../Components/PageTitle";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="content-max">
        <PageTitle>✏️ Portfolio</PageTitle>
        <Card>
          <Tag>Design Systems</Tag> <Tag>Figma</Tag> <Tag>Accessibility</Tag>
          <Tag>Documentation</Tag> <Tag>Research</Tag>
          <Tag>Product Management</Tag>
          <h1>Margarita Design System</h1>
          <p>
            Designing both a process and system from planning through execution
            that enables designers and engineers to work accurately and
            efficiently
          </p>
          <Button
            type="primary"
            target="_blank"
            href="/case-studies/margarita.pdf"
          >
            View Case Study
          </Button>
          <Button
            type="secondary"
            target="_blank"
            href="/case-studies/margarita.pdf"
          >
            Sample Figma File
          </Button>
        </Card>
        <div className="portfolio-items">
          <PortfolioItem
            image={UpsideDesignSystem}
            href="/case-studies/upside-design-system.pdf"
            title={
              <>
                <strong>Purple.</strong> Design System
              </>
            }
            description="How updated style and component libraries, coordinating with
          engineering, and accessibility compliance improved design and
          engineering’s workflow."
            tags={["Design Systems", "Figma", "Accessibility", "Engineering"]}
          />
          <PortfolioItem
            image={UpsideMobileApp}
            href="/case-studies/upside-mobile-app.pdf"
            title="Upside Business Travel App • Self Service"
            description="Upside's mobile app was developed as a convenient way to plan, book, and
        manage business trips."
            tags={[
              "Research",
              "Competitive Analysis",
              "UX Design",
              "UI Design",
            ]}
          />
          <PortfolioItem
            image={TravelPolicy}
            href="/case-studies/upside-travel-policy.pdf"
            title="Travel Policy Permissions Updates"
            description="Upside Business Travel allowed admins to have control over their travel policies without being too restrictive to be usable."
            tags={["User Research", "Prototyping", "UX Design"]}
          />
          <PortfolioItem
            image={Monetization}
            href="/case-studies/10-21-police-phone-monetization.pdf"
            title="10-21 Police Phone Monetization"
            description="How I handled redesigning a previously free product by identifying features of value that would allow for monetization of the product."
            tags={["TBD"]}
          />
          <PortfolioItem
            image={PolicePhoneContacts}
            href="/case-studies/10-21-police-phone-contacts.pdf"
            title="10-21 Police Phone Contacts"
            description="How I evaluated the existing experience of calling saved contacts and improved our users' dialing experience."
            tags={["Research", "Persona Development"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
