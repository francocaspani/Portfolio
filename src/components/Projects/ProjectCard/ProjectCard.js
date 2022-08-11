import React, { useState } from "react";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCard({list}) {
  const [hover, setHover] = useState(false)
  return (
    <>
        <Card>
          <CardLeft
          onMouseEnter={()=> setHover(true)}
          onMouseLeave={()=> setHover(false)}
          onClick={()=> setHover(!hover)}
          >
            {hover? <img src={list.video} alt={list.name} className='imgMobile'/>:<img src={list.img} alt={list.name} className='imgMobile'/>}
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                className="btn PrimaryBtn"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
    </>
  );
}

export default ProjectCard;
