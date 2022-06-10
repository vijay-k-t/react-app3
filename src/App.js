import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";
import SelectTableComponent from "./SelectTableComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Status = ({ value }) => {
  return (
          <span key={value} className={value}>
            {value}
          </span>
  );
};




function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    
  }, []);

  const fetchData = () => {    
    //axios.get('https://api.tvmaze.com/search/shows?q=snow')
    //    .then(result => setData(result.data));

    const data = [{"taskName": "Task 1", "taskId": "1", "status": "Completed"},
      {"taskName": "Task 1", "taskId": "2", "status": "New"},
      {"taskName": "Task 1", "taskId": "3", "status": "Inprogress"}
    ]  
    setData(data)  
  }

   
  return (
    <div className="App">
      <SelectTableComponent />
      
    </div>
  );
}

export default App;
