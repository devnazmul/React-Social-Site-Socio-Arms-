import "./App.css";
import { Authenticated } from "./pages/Authenticated/Authenticated";
import { UnAuthenticated } from "./pages/UnAuthenticated/UnAuthenticated";


function App() {
  let isAuthenticated = true;
  return (
    <div className="App overflow-x-hidden">
      {isAuthenticated ? <Authenticated /> : <UnAuthenticated />}
    </div>
  );
}

export default App;
