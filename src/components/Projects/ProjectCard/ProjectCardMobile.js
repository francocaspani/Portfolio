import React from "react";
import { ProjectListMobile } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ProjectCardElements";
function ProjectCardMobile() {
  return (
    <>
      {ProjectListMobile.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
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
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCardMobile;
