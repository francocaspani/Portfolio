import React from "react";
import img from '../../Assets/img.png'
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  TechImg,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={img}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Franco Caspani</strong> I am a Full Stack MERN developer and an electromechanical technician. I had a few years doing system engineering, where I learned the basis of logical thinking. Then, I traveled and lived in different countries, something that made me grow since I exposed myself to constant changes. The adrenaline of living in a new country, where there are new rules and a different way to live life, it’s a challenge that I’m always happy to face.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
                <TechImg src={stack.img} alt={stack.name} key={index}/>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
