import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './component/Intro';
import Nav from './component/Nav'
import styled from "styled-components"
import Main from "./pages/main";
import List from "./pages/list";
import MoreList from "./pages/moreList";
import { GlobalStyle } from "./common/GlobalStyle"
import store from "./Store";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ContentBox>
          {/* <Intro /> */}
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/More" element={<MoreList />}></Route>
          </Routes>
          <Nav />
        </ContentBox>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
const ContentBox = styled.article`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  padding: 20px;
`;
