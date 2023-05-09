import { styled } from "styled-components"

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  border-radius: var(--border-radius);
  gap: 10px;
  padding: 5px 10px;

  >p{
    width: 100%;
    text-align: left;
  }
`

function Todoitem({ todoList, deleteTodo }) {

  return (
    <>
      {todoList.map((item, idx) => (
        <TodoItem key={idx} id={idx}>
          <label htmlFor="todoItem"></label>
          <input type="checkbox" id="todoItem"></input>
          <p>{item}</p>
          <button onClick={deleteTodo}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </TodoItem>
      ))}
    </>
  )
}

export default Todoitem