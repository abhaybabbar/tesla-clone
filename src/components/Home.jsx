import React from "react";
import styled from "styled-components";
import Section from "./Section";
import homeData from "./../helper/homePage.json";

const Home = () => {
  console.log(homeData);
  return (
    <Container>
      {homeData.map(
        ({ title, description, image, leftBtnText, rightBtnText }, index) => {
          return (
            <Section
              key={index}
              index={index}
              title={title}
              desc={description}
              backgroundImg={image}
              leftBtnText={leftBtnText}
              rightBtnText={rightBtnText}
            />
          );
        }
      )}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
