import { styled, createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import introImg from '../img/intro.svg'
import Todolist from '../component/Todolist'

const GlobalStyle = createGlobalStyle`
  h1{
    font-size: 3rem;
    margin-bottom: 0;
  }
  p{
    font-size: 1rem;
    font-weight: 400;
  }
  button{
    cursor: pointer;
  }
  img{
    width: 100%;
  }
`;

const Main = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px;
  background-color: #fff;
`;

const Btn = styled.button`
  font-size: 1.2rem;
  background-color: var(--point-color);
  color: #fff;
  width: 100%;
  font-weight: 600;
  padding: 15px 0;
  border-radius: var(--border-radius);
`;

const Section = styled.section`
  >p{
    text-align: center;
    margin-bottom: 30px;
  }
`;

function Intro() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <section>
          <h1>To Do List</h1>
          <p>나의 투두 리스트를 만들고<br />관리해 보세요</p>
        </section>
        <Section>
          <img src={introImg} alt="intro-img" />
          <p>특별한 하루 보낼 준비 되셨나요?</p>
          <Btn ><Link to="/Todolist"></Link>시작하기</Btn>
        </Section>
      </Main>
    </BrowserRouter>

  )
}

export default Intro;