import { styled } from 'styled-components'
import Todoitem from './Todoitem'
import TodoEdit from './Todoedit'
import { useState } from 'react'

const TopHeader = styled.section`
  margin-bottom: 20px;
`

const DataInfo = styled.section`
  display: flex;
  justify-content: space-between;

  >span{
    color: #fff;
    background-color: var(--point-color);
    font-size: 0.8rem;
    border-radius: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const TodoEditBtn = styled.button`
  position: absolute;
  bottom: 90px;
  left: 0; right: 0;
  background-color: var(--point-color);
  border-radius: 50px;
  width: 70px;
  height: 70px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
`;


function TodoList() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [day, setDay] = useState('0000년 0월 0일 요일');

  const deleteBtn = (e) => {
    console.log(e.target.parentElement)
  }

  const editForm = (e) => {
    e.preventDefault();
    console.log('dfd', inputValue)
    setTodoList([...todoList, inputValue])
    setInputValue('')
  }

  const showModal = () => {
    setEditModal(!editModal)
  }

  const getDay = () => {
    const weekDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const date = new Date;
    const Year = date.getFullYear()
    const Month = date.getMonth() + 1
    const Day = date.getDate()
    const week = weekDay[date.getDay()]
    setDay(`${Year}년 ${Month}월 ${Day}일 ${week}`)
  }


  //1초 이후 실행되기 때문에 getClock을 미리 실행 시킨다.
  setInterval(getDay, 1000);


  return (
    <>
      <TopHeader>
        <h2>To Do List</h2>
        <DataInfo>
          <div>{day}</div>
          <span>03</span>
        </DataInfo>
      </TopHeader>
      {/* {
        todoList.map((el, idx) => {
          <div></div>
        })
      } */}

      <Ul>
        <Todoitem todoList={todoList} deleteBtn={deleteBtn} />
      </Ul>
      {!editModal
        ?
        <TodoEditBtn onClick={showModal}>
          <span className="material-symbols-outlined">edit</span>
        </TodoEditBtn>
        :
        <TodoEdit editForm={editForm} showModal={showModal} TodoEditBtn={TodoEditBtn} setInputValue={setInputValue} inputValue={inputValue} />
      }

    </>
  )
}

export default TodoList