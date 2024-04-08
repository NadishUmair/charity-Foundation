import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './about.css'
const   About=()=> {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='  p-4' id='aboutus'>
       
        <div className='container'>
            <div className='' data-aos="fade-up"  data-aos-duration="1500">
            <h3 className='text-center'>About Naseem Shams Foundation</h3>
                <p className='mt-4'>
                    Welcome to the Naseem Shams Foundation (NSF) - a charitable organization committed to making a positive impact in Pakistan. Under the able leadership of Chairman Ahtasham Ul Haq, NSF is dedicated to uplifting the lives of individuals and communities across the nation. Registered under the Social Welfare Office Act of 1961, NSF possesses the legal authorization to carry out charitable and welfare activities for the betterment of society. About Naseem Shams Foundation:
                    The Naseem Shams Foundation (NSF) is established in 2023 with a vision to create a brighter future for the people of Pakistan. The foundation firmly believes in the power of compassion, empathy, and generosity in transforming lives. With a strong focus on charity and welfare, NSF works tirelessly to address pressing social issues and provide support to those in need.
                </p>
             
              
            </div>
            <div className='mt-4'>
                <div data-aos="fade-up"  data-aos-duration="1700">
                    <h3 className='text-center'>Our Mission</h3>
                    <p>NSF's mission is to promote social welfare, alleviate poverty, & contribute to the overall development of Pakistan. By implementing various projects and initiatives, the foundation aims to create sustainable solutions that address the root causes of poverty, Improve healthcare access, empower vulnerable communities, and enhance educational opportunities.</p>
                   </div>
                <div data-aos="fade-up"  data-aos-duration="1800">
              <h5>Holistic Education Initiatives</h5>
              <p>Naseem Shams Foundation recognizes education as a cornerstone for societal progress. In its commitment to providing equitable opportunities, the organization will be launching various educational initiatives. These will include scholarships for underprivileged students, the establishment of learning centers in marginalized communities, and innovative programs to enhance digital literacy. By investing in education, Naseem Shams Foundation will be sowing the seeds for a more enlightened and empowered society.</p>
              </div>
              <div data-aos="fade-up"  data-aos-duration="1500">
                <h5>Healthcare Access for All</h5>
                <p>Ensuring access to quality healthcare is a fundamental tenet of NSF’s mission. Through health camps, medical outreach programs, and collaborations with healthcare providers, the organization will be working tirelessly to bridge the healthcare gap in underserved communities. By prioritizing preventive care and health education, fostering a culture of well-being and resilience.</p>
              </div>
              <div data-aos="fade-up"  data-aos-duration="1500">
                <h5>Empowering Vulnerable Populations</h5>
                <p>Naseem Shams Foundation has a strong focus on empowering vulnerable and marginalized populations. This includes initiatives aimed at supporting women, children, the elderly, and individuals with disabilities. Through skill development programs, vocational training, and advocacy efforts, the organization is creating pathways for these groups to lead dignified and fulfilling lives.</p>
              </div>
                </div>

        </div>
    </div>
  )
}
export default About;
