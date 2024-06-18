
import React from "react";
import HeroSection from "./HeroSection/Index";
import WorkExp from "./Work-Experience/Work-ex";
import Skills from "./Skills/Index";
import styled,{ThemeProvider} from "styled-components";
import Navbar from "./Navbar/Index";
import { darkTheme } from '../utils/Themes';

const Body=styled.div`
   width: 100%;
   color: white;
   overflow-x:hdden;
`;

const Home = () => {
  return (
      <div>
        <Navbar />
        <Body>
          <HeroSection />
          <section id="workexp">
          <WorkExp />
         </section>
          <section id="skills">
          <Skills/>
          </section>
        </Body>
      </div>
  );
};

export default Home;