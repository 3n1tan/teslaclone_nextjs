import React from 'react'
import { Fade } from 'react-awesome-reveal'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
const Section = () => {
  return (
    <div>
        <Fade>
            <div>
                <h1>Model s</h1>
                <p>Model S</p>
            </div>
        </Fade>
        <div>
            <Fade>
                <div className='md:flex mb-[30px] flex flex-col'>
                    <LeftButton>

                    </LeftButton>
                    {<RightButton></RightButton>}

                </div>
            </Fade>
        </div>

    </div>
  )
}

export default Section