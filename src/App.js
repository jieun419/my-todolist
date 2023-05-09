import './App.css';
import Intro from './component/Intro';
import TodoList from './component/Todolist';
import Nav from './component/Nav'
import styled from "styled-components"

const ContentBox = styled.article`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
  padding: 20px;
`;

function App() {
  return (
    <ContentBox>
      {/* <Intro /> */}
      <TodoList />
      <Nav />
    </ContentBox>
  );
}

export default App;
