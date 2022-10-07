import { useState } from 'react';
import './App.css';

import datas from '../src/data.json';

import Card from './components/Card';

function App() {
  const [jobs, setJobs] = useState(datas);

  return (
    <div className="wrapper">
      <div className="container">
        <Card jobs={jobs} />
      </div>
    </div>
  );
}

export default App;
