import { useState } from 'react';
import './App.css';

import data from '../src/data.json';

import Card from './components/Card';
import TagBar from './components/TagBar';
import Footer from './components/Footer';

function App() {
  const [jobs, setJobs] = useState<any>(data);
  const [filters, setFilters] = useState<string[]>([]);

  // Handle add filters
  const handleFilters = (filter: string) => {
    setFilters((item) => {
      const newFilters = [...item];
      if (!newFilters.includes(filter)) {
        newFilters.push(filter);
      }
      return newFilters;
    });
  };

  // Remove filters one by one from filter list
  const removeFilter = (filter: any) => {
    setFilters((item) => {
      let newFilters = [...item];
      newFilters.splice(newFilters.indexOf(filter), 1);
      return newFilters;
    });
  };

  // Clear all selected filters
  const clearAllFilters = () => {
    setFilters([]);
  };

  // Filtering data
  let filteredData = jobs;
  // Loop through all applied filters
  filters?.forEach((item: any) => {
    filteredData = filteredData?.filter(
      (job: any) =>
        job.role === item ||
        job.level === item ||
        job.languages.includes(item) ||
        job.tools.includes(item)
    );
  });

  return (
    <div className="wrapper">
      <div className="container">
        <TagBar
          filters={filters}
          removeFilter={removeFilter}
          clearAllFilters={clearAllFilters}
        />
        {filteredData?.map((item: any) => (
          <Card key={item.id} jobs={item} handleFilters={handleFilters} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
