import { BiListCheck } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { styled } from "styled-components";


function Nav() {
  return (
    <NavBar>
      <Link to="list">
        <BiListCheck />
      </Link>
      <Link to="/">
        <HiHome />
      </Link>
      <Link to="more">
        <FiMoreHorizontal />
      </Link>
    </NavBar>
  )
}

export default Nav;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  border-top: 1px solid #dcdcdc;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 2;
  background-color: #fff;
  
  >a {
    font-size: 2rem;
    color: #b5b5b5;
  }

  >a.active{
    color: #000;
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