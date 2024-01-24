import { useState } from "react";

import "./App.css";
import { AuthPage } from "./components";

function App() {
  const [user, setUser] = useState(undefined);
  return <>{!user && <AuthPage onAuth={(user) => setUser(user)} />}</>;
}

export default App;
