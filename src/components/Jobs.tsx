import { useState} from 'react';
import TagBar from './TagBar';
import Card from './Card';
import job from '../data'

const Jobs=() => {
  const [jobs] = useState<any>(job);
  const [filters, setFilters] = useState<string[]>([]);

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

  // Handle add filters
  const handleFilters = (filter: string) => {
    setFilters((item: any) => {
      const newFilters = [...item];
      if (!newFilters.includes(filter)) {
        newFilters.push(filter);
      }
      return newFilters;
    });
  };

  // Remove filters one by one from filter list
  const removeFilter = (filter: any) => {
    setFilters((item: any) => {
      let newFilters = [...item];
      newFilters.splice(newFilters.indexOf(filter), 1);
      return newFilters;
    });
  };

  // Clear all selected filters
  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
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
  );
};

export default Jobs;
