
// import React, { Component } from 'react'

// export default class Test extends Component {

//     state = {
//         name: "ck",
//         age: 20
//     }
//     setAge = () => {
//         let {age} = this.state;
//         console.log(1)
//         this.setState({
//             age: ++age
//         })
//     }

//     render() {

//         const { name, age } = this.state
//         return (
//             <div>
//                 <p>姓名: {name}</p>
//                 <p onClick={this.setAge}>点击年龄: {age}</p>
//             </div>
//         )
//     }
// }


import React, {useState} from 'react';

function Test () {
  const [age, setAge] = useState(20)
  const [name,] = useState("jack")

  const handleMe = () => {
      setAge(age +1 )
  }
    return (
                <div>
                <p>姓名: {name}</p>
                <p onClick={handleMe}>点击年龄: {age}</p>
            </div>
    )
}
export default Test;

