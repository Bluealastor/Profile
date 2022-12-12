import React, {useState, useEffect} from "react";
 import { getData } from "../fetch/fetch";
const url = "https://api.github.com/users";

const Profile = () => {
  const [users, setUsers] = useState([])

  // const getData = async () => {
  //   const response = await axios.get(url)
  //   const rest = await response.data
  //  console.log(rest);
  //   setUsers(rest);
  // }

  useEffect(() => {
    /*
    *********************************
    RICORDARE DI METTERE LE QUADRE []   altrimenti loop infinito
    *********************************
    */
    getData(url).then(data => setUsers(data))
  },[])

  return (
    <div>
      <h1>Profile</h1>
      <ul className="users">
        {users.map((el) => {
          const {id,
           login ,
          /*
            **************************************
              possiamo dare un nuovo nome alle variabili nome alla destrutturizzazione 
              da avatar_url lo trasformiamo in img
            ************************************** 
          */
           avatar_url: img, 
           html_url} = el
          return(
          <li key={id} className="shadow">
          <img src={img} alt={login}/>
          <div>
            <h5 >{login}</h5>
            <a href={html_url}>Profile</a>
          </div>
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Profile;
