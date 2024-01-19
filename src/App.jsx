import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Mehmet",
      email: "ferhat38@gmail.com",
      age: 18,
    },
    {
      name: "Zekeriya",
      email: "zek@gmail.com",
      age: 55,
    },
  ]);

  const addUser=(newUser)=>{
    setUsers([...users, newUser])
  }
  



  return (
    <div className="container">
      <h2 className="text-center">Kullanıcı Paneli</h2>
      <Form  addUser={addUser}/>

      <List users={users} />
    </div>
  );
};

export default App;
