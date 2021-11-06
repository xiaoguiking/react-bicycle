import React,{useState, useCallback} from "react";
import MyHeader from "./components/Header"
import AddInput from "./components/AddInput";
// import {Father} from "./components/props/Father"  Father

function App() {
  const [isInputShow, setIsInputShow] = useState(true),
        [todoList, setTodoList] = useState([]);

  const openInput = () => {
    setIsInputShow(!isInputShow)
  }

  const addItem = useCallback((inputValue) => {
    console.log(inputValue, "inputValue")
    const dataItem = {
      id: new Date().getTime(),
      content: inputValue,
      complete: false
    }
    setTodoList((todoList) => [...todoList, dataItem])
    console.log(todoList)
    setIsInputShow(false)
  }, [])

  return (
    <div className="App">
      <MyHeader openInput={openInput}/>
      <AddInput isInputShow={isInputShow} addItem={addItem}/>
    </div>
  );
}

export default App;
