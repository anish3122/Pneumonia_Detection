// import React from 'react'
import React, { useEffect, useState } from 'react';
import myImage from '../images/examination.jpeg';
function Home() {
  
  const [position, setPosition] = useState(null);
  return (
  <><div>
      <h3 className='text-info mt-3 ps-5 pe-5  text-center'>Govt Board of Secondary Education, Telangana state (Also known as:Govt Board of Secondary Education, Hyderabad)</h3>
      <p className='text-center mt-2 mb-2 ps-5 pe-5'>
        Govt Board of Secondary Education, Telangana state (Also known as: Govt Board of Secondary Education, Hyderabad) is an independent department functioning for the development of education of Secondary Examination (10TH Class Equ.) , Senior Secondary Examination (12TH Class Equ) and Diploma programme like D.Ed. etc. The Board of Secondary Education , Telangana is responsible for conducting the Examinations and a number of major and minor examinations as given below.
      </p>
    </div><div className='child mt-5'>
        <h2 className='text-sucess text-center pb-3 pt-2'>Major Examinations</h2>

        <div className='row'>

          <div className='col'>
            <p className='col text-center  ps-5 pe-5 mt-2 '>Govt Board of Secondary Education, Telangana state
              (Also known as: Govt Board of Secondary Education, Hyderabad) examinations twice in a year.
              This is the major examination with a registration of 12.15 lakh candidates for Annual (March -2014)
              examinations and 3.34 lakh candidates for Advanced Supplementary Examinations(May / June -2014)
            </p>
          </div>

          <div className='col'>
            <img className='imgk d-block mx-auto' src={myImage} />
          </div>
        </div>

      </div><div className='child2 bg-success row mt-5 text-center'>
        <div className='col mt-3 ps-5'>
          <h3>APPLY FOR VERIFICATION</h3>
          <p>NOTE: VERIFICATION BY E-MAIL ALSO ENTERTAINED FREE OF COST DUE TO NEW TECHNOLOGY OF SCIENCE AND THE MISSION OF SAVE PAPER , SAVE TREE.</p>
        </div>
        <div className='col mt-3 pe-5 text-center foot'>
          <h3>Govt Board Of Secondary Education, Telangana State (Also Known As: Govt Board Of Secondary Education, Hyderabad)</h3>
          <p className='pb-2'>
            Govt Board of Secondary Education, Telangana state (Also known as: Govt Board of Secondary Education, Hyderabad)
            came into existence in 2000 as per Telangana Act of 2000 with its head-quarter at Hyderabad.
            The Board started with a staff of 40 officials which has subsequently increased to 467.
            The Education Board prescribes syllabus, courses of instructions and text books for school education in Telangana besides
            conducting examinations based on courses listed.
          </p>
        </div>
        <br></br>
      </div></>
  // </div>  
  )
}

export default Home