import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Main from "./components/Main/Main";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="App bg-gray-100">
      <BrowserRouter>
        <Header />
        <div className='flex bg-gray-100 h-screen'>
          <div className='md:block hidden  w-1/4'>
            <LeftSidebar />
          </div>
          <div className='w-full md:w-2/4 bg-gray-100'>
            <Switch>
              <Route exact path="/">
              <Main />
              </Route>
              <Route exact path="/profile">
                Profile
              </Route>
              <Route exact path="/home">
                <Main />
              </Route>
              <Route exact path="/video">
                Video
              </Route>
              <Route exact path="/store">
                Store
              </Route>
              <Route exact path="/groups">
                Groups
              </Route>
              <Route exact path="/games">
                Games
              </Route>
            </Switch>
          </div>
          <div className='md:block hidden w-1/4'>
            <RightSidebar />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
