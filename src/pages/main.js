import styled from "styled-components"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { HiOutlineTrash } from "react-icons/hi"
import { LuPencil } from "react-icons/lu"
import { GrClose } from "react-icons/gr"
import IcChekOff from "../img/ic-check-off.svg"
import IcChekOn from "../img/ic-check-on.svg"

import { toggleModal, setDay, setInputValue, setTodoItem, deleteTodo } from "../Reducers/index"


function Main() {

  const dispatch = useDispatch()
  const isModal = useSelector(state => state.todo.isModal)
  const day = useSelector(state => state.todo.day)
  const inputValue = useSelector(state => state.todo.inputValue)
  const todoItem = useSelector(state => state.todo.todoItem)

  const inputRef = useRef(null)

  const weekDay = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  const TODO_LIST = "TODO_LIST"

  const inputHandler = (event) => {
    dispatch(setInputValue(event.target.value))

  }

  const modalHandler = () => {
    dispatch(toggleModal())
  }

  const handlePaintTodo = (event) => {
    event.preventDefault()
    const newTodo = { id: todoItem.length, text: inputValue };
    dispatch(setTodoItem(newTodo));
    dispatch(setInputValue(""));
    dispatch(toggleModal())
  }

  const handleDeleteTodo = (event) => {
    const targetId = Number(event.currentTarget.id);
    dispatch(deleteTodo(targetId))
  }

  const getDay = () => {
    const date = new Date();
    const Year = date.getFullYear();
    const Month = date.getMonth() + 1;
    const Day = date.getDate();
    const Week = weekDay[date.getDay()]
    dispatch(setDay(`${Year}년 ${Month}월 ${Day}일 ${Week}`))
  }

  useEffect(() => {
    const storedTodo = localStorage.getItem(TODO_LIST);
    if (storedTodo) {
      dispatch(setTodoItem(JSON.parse(storedTodo)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_LIST, JSON.stringify(todoItem));
  }, [todoItem]);

  useEffect(() => {
    getDay()
  }, [])

  useEffect(() => {
    inputRef.current.focus()
  }, [isModal])

  return (
    <>
      <TopHeader>
        <h2>To Do List</h2>
        <DataInfo>
          <div>{day}</div>
          <span>{todoItem.length}</span>
        </DataInfo>
      </TopHeader>

      {!todoItem.length
        ? <NotListCont><p>리스트가 존재하지 않습니다 :(</p></NotListCont>
        :
        <Ul>
          {todoItem?.map((el) => (
            <li key={el.id}>
              <TodoCheck type="checkbox" id={el.id}></TodoCheck>
              <label htmlFor={el.id}><span>{el.text}</span></label>
              <TrashBtn id={el.id} onClick={handleDeleteTodo}><HiOutlineTrash /></TrashBtn>
            </li>
          ))}
        </Ul>
      }

      <WriteBtn type="button" onClick={modalHandler}>
        <LuPencil />
      </WriteBtn>

      <WriteModal className={isModal ? "active" : ""}>
        <Writeform onSubmit={handlePaintTodo}>
          <CloseBtn type="button"><GrClose onClick={modalHandler} /></CloseBtn>
          <input
            type="text"
            id="wirteText"
            value={inputValue}
            onChange={inputHandler}
            ref={inputRef}
            placeholder="할 일을 작성해 주세요(최대 20자)" />
          <label htmlFor="wirteText"></label>
          <WriteModalBtn type="submit"><LuPencil /></WriteModalBtn>
        </Writeform>
        {isModal && <Dorpbg />}
      </WriteModal>
    </>
  );
}

export default Main;


const TopHeader = styled.section`
  position: sticky;
  top: 0;
  padding-bottom: 1.25rem;
  padding-top: .3125rem;
  background-color: #fff;
`

const DataInfo = styled.section`
  display: flex;
  justify-content: space-between;

  >span{
    color: #fff;
    background-color: var(--point-color);
    font-size: 0.8rem;
    border-radius: 3.125rem;
    padding: .125rem .625rem;
    display: flex;
    align-items: center;
  }
`
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  height: 70%;
  overflow-y: auto;
  padding-bottom: 10%;

  >li {
    background-color: #f6f6f6;
    border-radius: 0.3125rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.3125rem;
  }

  >li label{
    width: 100%;
  }
`

const TodoCheck = styled.input`
  display: none;

  & + label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .625rem;
    
  }

  & + label > span {
    color: #000;
    transition: 0.3s;
  }

  & + label::before {
    content: "";
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    border: 1px solid #c8c8c8;
    background-color: #fff;
    background-image: url(${IcChekOff});
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 3.125rem;
    vertical-align: middle;
    transition: 0.3s;
  }

  &:checked + label::before {
    content: "";
    background-color: #a1a1a1;
    border-color: #a1a1a1;
    background-image: url(${IcChekOn});
  }

  &:checked + label > span {
    color: #ababab;
    text-decoration: line-through;
  }
`

const NotListCont = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 30%);

  >p {
    color: #cfcfcf;
    font-size: 1.2rem;
  }
`

const TrashBtn = styled.button`
  display: flex;
  align-items: center; 
  color: #c8c8c8;
  font-size: 1.5rem;
`

const Button = styled.button`
  background-color: var(--point-color);
  border-radius: 50px;
  width: 60px;
  height: 60px;
  color: #fff;
  font-size: 1.3rem;
`

const WriteBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 6.625rem;
  left: 0; right: 0;
  margin-left: auto;
  margin-right: auto;
`

const WriteModalBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
`

const CloseBtn = styled.button`
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  font-size: 2rem;
`

const WriteModal = styled.article`
  position: fixed;
  left:0; right:0;
  height: 100%;
  width: 100%;
  bottom: -100%;
  transition: bottom 0.3s ease-out;

  &.active{
    bottom: 0;
  }
  
`

const Dorpbg = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100vh;
  left:0; top: 0; right:0; bottom:0;
  z-index: -1;
`

const Writeform = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem 0;
  background-color: #fff;
  left: 0; right: 0;
  z-index: 1;
  width: 100%;
  height: calc(100% - 20%);
  bottom: 4.5rem;

  >input {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    outline: none;
    margin-top: 3rem;
    padding: 0.625rem;
  }
`