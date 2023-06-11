import { styled } from 'styled-components';
import introImg from '../img/intro.svg'

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


const Section = styled.section`
  >p{
    text-align: center;
    margin-bottom: 30px;
  }
`;

function Intro() {
  return (
    <Main>
      <section>
        <h1>To Do List</h1>
        <p>나의 투두 리스트를 만들고<br />관리해 보세요</p>
      </section>
      <Section>
        <img src={introImg} alt="intro-img" />
        <p>특별한 하루 보낼 준비 되셨나요?</p>
      </Section>
    </Main>
  )
}

export default Intro;