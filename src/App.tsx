import { useState } from 'react';
import './App.css';

import datas from '../src/data.json';

import Card from './components/Card';

function App() {
    const [job, setJob] = useState(datas);

  return (
    <div className="wrapper">
      <div className="container">
        <Card job={job} />
      </div>
    </div>
  );
}

export default App;
