import React from "react";
import Section from "./Section";
import VideoSection from "./VideoSection";
const FinalDisplay = () => {
  return (
    <div>
      <Section
        title="Model 3"
        description="Lease starting at $329/mo*"
        more_description=""
        leftBtnText="Custom Order"
        rightBtnText="learn more"
        bgImage="model3"
      />
      <VideoSection
        title="Model Y"
        description="Lease starting at $379/mo*"
        more_description=""
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
        bgImg="modelY.mp4"
      />
      {/* <Section 
            title="Model Y"
            description='Order online for Touchless Delivery'
            more_description="after federal tax credit & est. gas savings"
            leftBtnText='Custom Order'
            rightBtnText='demo drive'
            bgImage='modelY'       
        /> */}
      <Section
        title="Model X"
        description="From $68,590*"
        more_description="after federal tax credit & est. gas savings"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        bgImage="modelX"
      />
      <Section
        title="Model S"
        description="From $71,090*"
        more_description="after est. gas savings"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        bgImage="modelS"
      />
      <Section
        title=""
        description=""
        more_description=""
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        bgImage="cyberTruck"
      />
      <VideoSection
        title="Experience Tesla"
        description=""
        more_description="Schedule a Demo Drive Today"
        leftBtnText="Demo Drive"
        rightBtnText=""
        bgImg="demo_drive.webm"
      />
      <Section
        title="Solar Panels"
        description=""
        more_description="Schedule a Virtual Consultation"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        bgImage="solar-panel"
      />
      <Section
        title="Solar Roof"
        description=""
        more_description="Produce Clean Energy From Your Roof"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        bgImage="solarRoof"
      />
      <Section
        title="Powerwall"
        description=""
        more_description=""
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        bgImage="powerWall"
      />
      <Section
        title="Accessories"
        description=""
        more_description=""
        leftBtnText="Shop Now"
        rightBtnText=""
        bgImage="accessories"
      />
    </div>
  );
};

export default FinalDisplay;
