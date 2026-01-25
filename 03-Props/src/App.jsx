import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Gannu" age={25} img="https://images.unsplash.com/photo-1612813562440-f3f455f77bf7?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Gajju" age={23} img="https://images.pexels.com/photos/15156219/pexels-photo-15156219/free-photo-of-dodge-challenger-on-a-road-in-mountains.jpeg" />
      <Card user="Pammu" age={21} img="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/17q2/678295/2017-dodge-challenger-gt-awd-test-review-car-and-driver-photo-679396-s-original.jpg" />
    </div>
  );
};

export default App;
