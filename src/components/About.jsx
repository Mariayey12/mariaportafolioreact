import React from "react";
//import React, { Component } from 'react';

import { AboutS,Avatar,Img,Name,H2,Profesion,Location } from '../styled/AboutStyled'

const About = () => {
  return (
    <AboutS>
      <div className="About-container">
        <Avatar>
          <figure>
            <Img src="/" alt="Avatar Maria"/>
          </figure>
        </Avatar>

        <Name>
          <H2> Maria Martinez </H2>
        </Name>
        <Profesion>
          <p>Desarrolladora Web</p>
        </Profesion>
        <Location>
          <p> Bogota, Colombia</p>
        </Location>
        <div className="About-social">
            Redes Sociales
        </div>
      </div>
    </AboutS>
  );
};
export default About;
