import React,{useState, useCallback, useEffect} from "react";
import MyHeader from "./components/Header"
import AddInput from "./components/AddInput";
import TodoItem from "./components/TodoItem";
// import {Father} from "./components/props/Father"  Father

function App() {
  const [isInputShow, setIsInputShow] = useState(true),
        [todoList, setTodoList] = useState([]);



  const openInput = () => {
    setIsInputShow(!isInputShow)
  }

  useEffect(() => {
     const todoData = JSON.parse(localStorage.getItem("todoData")|| "[]")
     setTodoList(todoData)
  }, [])

  useEffect(() => {
      localStorage.setItem("todoData", JSON.stringify(todoList))
  }, [todoList])

  const addItem = useCallback((inputValue) => {
    console.log(inputValue, "inputValue")
    const dataItem = {
      id: new Date().getTime(),
      content: inputValue,
      completed: true
    }
    setTodoList((todoList) => [...todoList, dataItem])
    // setIsInputShow(false)
  }, [])

  return (
    <div className="App">
      <MyHeader openInput={openInput}/>
      <AddInput isInputShow={isInputShow} addItem={addItem}/>
      <ul>
      {
        todoList.map((item) => {
          return (
            <TodoItem  data={item} key={item.id}/>
          )
        })
      }
      </ul>
    </div>
  );
}

export default App;
