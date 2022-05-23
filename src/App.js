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

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const login = () => setLogin(true);
  return (
    <div className="App font-sans flex p-4 justify-center	">
      {!isLogged && <Card handleFormChange={handleFormChange} login={login} />}
      {isLogged && <LoggedPage user={user} />}
    </div>
  );
}

export default App;
