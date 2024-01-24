import { useState } from "react";

import "./App.css";
import { AuthPage, ChatsPage } from "./components";

function App() {
  const [user, setUser] = useState(undefined);
  return (
    <>
      {!user ? (
        <AuthPage onAuth={(user) => setUser(user)} />
      ) : (
        <ChatsPage user={user} />
      )}
    </>
  );
}

export default App;
