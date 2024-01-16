import React from 'react'
import Section from './Section'
const FinalDisplay = () => {
  return (
    <div>
        <Section 
            title="Model S"
            description='Order online for Touchless Delivery'
            leftBtnText='Custom Order'
            rightBtnText='Existing Inventory'
            backgrndImg={{ src: 'model3'}}
        />
    </div>
  )
}

export default FinalDisplay