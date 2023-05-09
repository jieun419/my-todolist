import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";
const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  border-top: 1px solid #dcdcdc;
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 2;
  background-color: #fff;
  
  > button span{
    font-size: 2rem;
  }

  .todo-edit-btn{
    background-color: var(--point-color);
    border-radius: 50px;
    position: absolute;
    top: -30px;
    width: 70px;
    height: 70px;
    color: #fff;
  }

`;

function Nav() {

  return (
    <BrowserRouter>
      <NavBar>
        <button>
          <span className="material-symbols-outlined">home</span>
        </button>
        {/* <button className="todo-edit-btn">
          <span className="material-symbols-outlined">edit</span>
        </button> */}
        <button>
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </NavBar>
    </BrowserRouter>


  )
}

export default Nav;