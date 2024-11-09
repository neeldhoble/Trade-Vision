import React from 'react'
import CTAButton from  './HighlightText'
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from './HighlightText';
import { TypeAnimation } from 'react-type-animation';
import { VscWhitespace } from 'react-icons/vsc';


const CodeBox = ({position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroungradient, codecolor}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 `}>

          {/* section1 */}
          <div className="flex flex-col gap-5 w-[50%]">
              <div className='text-3xl'>
                  {heading}
              </div>

              <div className='text-richblack-300 font-bold'>
                {subheading}
              </div>

              <div className='fle gap-7 mt-7'>
                  <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                          <div className='flex gap-2 items-center'>
                              {ctabtn1.btnText}
                              <FaArrowRight/>
                          </div>
                  </CTAButton>

                  <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                          {ctabtn2.btnText}
                  </CTAButton>
              </div>
          </div>


          {/* section 2 */}
          <div className='h-fit flex flex-row text-[10px] w-[100%] py-4 lg:w-[500px]'>

            {/* hw bg gredient */}

            <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
            </div>


            <div className={`w-[90%] flex flex-col gap-2 font-mono font-bold ${codecolor} pr-2`}>
                  <TypeAnimation
                      sequence={[codeblock,2000,""]}
                      repeat={Infinity}
                      cursor={true}
                      omitDeletionAnimation={true}

                      style={
                        {
                          whiteSpace:"pre-line",
                          display:"block",
                        }
             
                      }       
                  />
            </div>

          </div>



    </div>
  )
}

export default CodeBox