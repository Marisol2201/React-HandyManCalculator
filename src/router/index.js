import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GetWeekData from "../components/week/getWeekData";
import Form from "../components/week/form";
import Calendar from "../components/week/calendar/calendar";
import Technicians from "../components/technician/technician";
import ServiceType from "../components/serviceType/serviceType";
import TechForm from "../components/technician/technicianForm";


function AppRouter() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Form />
            <Calendar />
          </Route>
          <Route path="/report">
            <Technicians />
            <ServiceType />
            <GetWeekData />
          </Route>
          <Route path="/technicians">
            <Technicians />
          </Route>
          <Route path="/services">
            <ServiceType />
          </Route>
          <Route path="/weeks">
            <GetWeekData />
          </Route>
          <Route path="/tech">
            <TechForm />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;
