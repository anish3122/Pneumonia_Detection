import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
function contact() {
  return (
    <div>

      <div>
        <h3 className='text-center'>Pneumonia detection and near by doctors suggestions</h3>
        <p className='text-center ps-4 pe-5 pb-5 mx-auto'>
         The website is designed for pneumonia detection and suggestions for nearby doctors with basic medication typically has a user-friendly interface the website may provide 
         suggestions for nearby doctors who specialize in treating pneumonia. The suggestions may be based on the user's location, and may include contact information for the doctors along with reviews from previous patients.
          In addition to suggesting doctors, the website may also provide basic medication recommendations for users to manage their symptoms before and after seeing a doctor.
        </p>
        <div>
            <h3 className='text-center'>Govt Board of Secondary Education</h3>
            <p className='text-center ps-4 pe-5 pb-5 mx-auto'>
            VJ Board of Secondary Education, Telangana came into existence in 2000 as per Telangana Act of 2000
             with its head-quarter at Hyderabad. The Board started with a staff of 44 officials which has subsequently 
             increased to 467. The Education Board prescribes syllabus, courses of instructions and text books for school
              education in Telangana besides conducting examinations based on courses listed. At present, the Board conducts 
              examination for the following classes and courses: 6-10th classes and Courses. As many as 5 Lakh candidates
               annually appear in the examination conducted by the Board. 
            </p>
            <div className='cont text-light'>
             <h3 className=' text-center pb-2 pt-2'>CONTACT US</h3>
             <h4 className='text-center pb-2'>
                If you have any futher queries please contact the following:
             </h4>
             <h4 className='text-center pb-2'>
                <BsFillTelephoneFill className='pe-2'/>Principal: +91 237092809
                <h4 className='text-center pt-2'><BsFillTelephoneFill className='pe-2'/>Adim: +91 233338799</h4>
                <h4 className='text-center pt-2'><HiOutlineMail /> Email : vjinfo@gmail.com</h4>
                <div className='pt-3 pb-5'>
                  <a href="https://github.com/"><FaGithub className='me-2 icon2'/></a>
                
                <BsFacebook className='icon2'/>
                <a href="https://www.youtube.com"><BsYoutube className='ms-2 icon1'/></a>
                
                </div>
             </h4>
            </div>
          {/* </h4> */}
        </div>
      </div>
    </div>
  )
}

export default contact