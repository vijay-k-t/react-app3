import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

const Status = ({ value }) => {
  return (
          <span key={value} className={value}>
            {value}
          </span>
  );
};

const Action = ({ value }) => {
  return (
          <button onClick={() => markComplete(value)}>Complete</button>
  );
};

let markComplete = (data) => { 
    console.log(data);
    axios.get('https://api.tvmaze.com/search/shows?q=snow')
      .then(result => console.log(result));
 
};


function App() {
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "taskName"
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => <Status value={value} />
          },
          {
            Header: "Status",
            accessor: "taskId",
            Cell: ({ cell: { value } }) => <Action value={value} />
          }
        ]
      }
    ],
    []
  );

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
      <button onClick={fetchData}>Fetch Data</button>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
