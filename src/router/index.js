import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GetWeekData from "../components/week/getWeekData"
import Form from "../components/week/form"
import Calendar from "../components/week/calendar/calendar";
import Technicians from "../components/technician/technician"
import TechForm from "../components/technician/index"


function AppRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Form />
            <Calendar />
          </Route>
          <Route path="/weeks">
            <GetWeekData />
          </Route>
          <Route path="/technicians">
            <TechForm />
            <Technicians />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;
  
//   import Form from "./components/form"
// import Calendar from "./components/calendar/calendar";
// import Home from "./components/getWeekData"
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Form />
//       <Calendar />
//       <Home />
//     </div>
//   );
// }

// export default App;
