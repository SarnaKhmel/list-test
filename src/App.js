import "./App.css";
import UserList from "./coponents/UserList";
import users from "./users.json";

function App() {
  return (
    <div className="App">
      <UserList people={users} />
    </div>
  );
}

export default App;
