import { styled } from 'styled-components'
import { useState } from 'react'

const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 90px;
  left: 0; right: 0;
  
  input{
    width: 95%;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }  
`;

const BgColor = styled.div`
  background-color: rgba(0, 0, 0, 0.16);
  left: 0; right: 0; top: 0; bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TodoEditBtn = styled.button`
  background-color: var(--point-color);
  border-radius: 50px;
  width: 70px;
  height: 70px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
`;

function TodoEdit({ editForm, todoList, showModal, inputValue, setInputValue }) {
  
  return (
    <section onClick={showModal}>
      <BgColor />
      <Form onSubmit={editForm} onClick={(event) => event.stopPropagation()}>
        <label htmlFor='todoedit'></label>
        <input
          type='text'
          id='todoedit'
          value={inputValue}
          placeholder='할 일 작성 후 Enter를 입력해 주세요'
          onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <TodoEditBtn onClick={showModal} type='button'>
            <span className="material-symbols-outlined" onClick={(event) => event.stopPropagation()}>close</span>
          </TodoEditBtn>
      </Form>
    </section>
  )
}

export default TodoEdit;