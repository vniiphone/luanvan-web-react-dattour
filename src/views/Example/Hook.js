import {useState} from 'react';

const Hook = () => {

  let [name, setName] = useState('quocvu');

  const handleOnClick = (event) => {

    setName('hoidanit');

  }


  //re - render
  return (
    <>
      <div>
        <h1>Hello From Hooks.js</h1>
      </div>
      <div>

        <input type="text" value={setName} />

        <button onClick={(event) => handleOnClick(event)}>Submit</button>
      </div>
    </>

  )

}
export default Hook