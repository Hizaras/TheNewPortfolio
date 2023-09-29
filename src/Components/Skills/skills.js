import React from 'react';
import './skills.css';
import designImg from '../../assets/phone.png';
import webImg from '../../assets/ui Img.png';
import uiImg from '../../assets/webImg.png';



const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a highly motivated Product Designer
         who possesses excellent interpersonal skills 
         enabling me to collaborate effectively with professionals of all levels and diverse teams.
        </span>

        

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={webImg} alt='' className='skillBarImg'/>
                <div className='skillBarText'></div>

                <div>
                <h2>UI/UX Design</h2>
                <p className='skillContents'>I am a highly motivated Product Designer
                 who possesses excellent interpersonal skills 
                enabling me to collaborate effectively with professionals of all levels and diverse teams.
              </p>
                </div>

            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={uiImg} alt='' className='skillBarImg'/>
                <div className='skillBarText'></div>

                <div>
                <h2>Web Design</h2>
                <p className='skillContents'> am a highly motivated Product Designer
                 who possesses excellent interpersonal skills 
                enabling me to collaborate effectively with professionals of all levels and diverse teams.
              </p>
              </div>

            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={designImg} alt='' className='skillBarImg'/>
                <div className='skillBarText'></div>
              
              <div>
                <h2>App Design</h2>
                <p className='skillContents'> am a highly motivated Product Designer
                 who possesses excellent interpersonal skills 
                enabling me to collaborate effectively with professionals of all levels and diverse teams.
              </p>
              </div>

            </div>
        </div>

     </section>
    )
}

export default Skills;