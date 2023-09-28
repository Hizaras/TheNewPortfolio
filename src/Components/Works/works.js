import React from 'react'
import './works.css';
import da from '../../assets/Landing-page.png';
import fortin from '../../assets/fortin.png';
import fap from '../../assets/fap.png';
import fashion from '../../assets/Group 61.png';
import allu from '../../assets/blog.png';
 





const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='workDesc'>I am a highly motivated Product Designer
                 who possesses excellent interpersonal skills 
                enabling me to collaborate effectively with professionals of all levels and diverse teams.
       </span>

       <div className='worksImgs'>
           <img src={da} alt='' className='worksImg'/>
           <img src={fortin} alt='' className='worksImg'/>
           <img src={fap} alt='' className='worksImg'/>
           <img src={fashion} alt='' className='worksImg'/>
           <img src={allu} alt='' className='worksImg'/>
           <img src={fortin} alt='' className='worksImg'/>
       </div>
       <button className='workBtn'>See More</button>
        
   </section>
  )
}

export default Works;