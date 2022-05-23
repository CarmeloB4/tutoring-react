import "./App.css";
import Card from "./Card";
import { useState } from "react";
import LoggedPage from "./LoggedPage";

function App() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    birthday: new Date(),
  });

  const [isLogged, setLogin] = useState(false);

  const login = (data) => {
    setUser(data);
    setLogin(true);
  };

  return (
    <div className="App font-sans flex p-4 justify-center	">
      {!isLogged && <Card login={login} />}
      {isLogged && <LoggedPage user={user} />}
    </div>
  );
}

export default App;
