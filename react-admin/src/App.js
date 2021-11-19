import React, { useState, useCallback, useEffect } from "react";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import TodoItem from "./components/TodoItem";
import CheckModal from "./components/Modal/CheckModal";
import EditModal from "./components/Modal/EditModal";
// import Modal from "./components/Modal";
// import {Father} from "./components/props/Father"  Father

function App() {
  const [isInputShow, setIsInputShow] = useState(true),
    [todoList, setTodoList] = useState([]),
    [isShowCheckModal, setCheckShowModal] = useState(false),
    [currentData, setCurrentData] = useState({}),
    [isShowEditModal, setShowEditModal] = useState(false);

  const openInput = () => {
    setIsInputShow(!isInputShow);
  };

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]");
    setTodoList(todoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
  }, [todoList]);

  const addItem = useCallback((inputValue) => {
    console.log(inputValue, "inputValue");
    const dataItem = {
      id: new Date().getTime(),
      content: inputValue,
      completed: true,
    };
    setTodoList((todoList) => [...todoList, dataItem]);
    // setIsInputShow(false)
  }, []);

  const openCheckModal = useCallback(
    (id) => {
      _setCurrentData(id);
      setCheckShowModal(true);
    },
    [todoList]
  );

  const editCheckModal = useCallback(
    (id) => {
      _setCurrentData(id);
      setShowEditModal(true);
    },
    [todoList]
  );

  function _setCurrentData(id) {
    setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
  }

  const submitEditData = useCallback((data, id) => {
      // setTodoList((todoList) => {
      
        console.log(data, "data========>")
        todoList.map((item) => {
          if (item.id === id) {
            // item = data;
            item.content = data.content;
          
          }
          console.log(item, "item========>")
          return item;
        });
      // });
      setShowEditModal(false);
    },[todoList]
  );

  return (
    <div className="App">
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        data={currentData}
        closeModal={() => setCheckShowModal(false)}
      />
      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEditData={submitEditData}
      />
      <MyHeader openInput={openInput} />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul>
        {todoList.map((item) => {
          return (
            <TodoItem
              data={item}
              key={item.id}
              openCheckModal={openCheckModal}
              editCheckModal={editCheckModal}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
