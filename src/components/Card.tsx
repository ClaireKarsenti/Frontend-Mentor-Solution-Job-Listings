import { FC, Key } from 'react';
import { jobCategory } from "../data/data";

export interface CardType {
  jobs: jobCategory;
  handleFilters: any;
}

const Card: FC<CardType> = ({ jobs, handleFilters }) => {
  const newJob = jobs.new;
  const featured = jobs.featured;

  return (
    <div className={featured ? 'featuredCard' : 'card-container'} key={jobs.id}>
      <div className="left">
        <img src={jobs.logo} alt={`${jobs.company}`} />
        <div className="text-container">
          <div className="header">
            <div className="name">{jobs.company}</div>
            {newJob ? <span className="newJob">new!</span> : null}
            {featured ? <span className="featured">featured</span> : null}
          </div>
          <div className="title">{jobs.position}</div>

          <div className="details">
            <ul>
              <li>{jobs.postedAt}</li>
              <span className="dot"></span>
              <li>{jobs.contract}</li>
              <span className="dot"></span>
              <li>{jobs.location}</li>
            </ul>
          </div>
          <div className="middle-line"></div>
        </div>
      </div>

      <div className="right">
        <div className="filters">
          {/* Role */}
          <button
            className="button-filter"
            key={jobs.role}
            value={jobs.role}
            onClick={() => handleFilters(jobs.role)}
          >
            {jobs.role}
          </button>

          {/* Level */}
          <button
            className="button-filter"
            key={jobs.level}
            value={jobs.level}
            onClick={() => handleFilters(jobs.level)}
          >
            {jobs.level}
          </button>

          {/* Languages */}
          {jobs.languages?.map((languages: string, index: Key) => {
            return (
              <button
                className="button-filter"
                key={index}
                value={jobs.languages}
                onClick={() => handleFilters(languages)}
              >
                {languages}
              </button>
            );
          })}

          {/* Tools */}
          {jobs.tools?.map((tools: string, index: Key) => {
            return (
              <button
                className="button-filter"
                key={index}
                value={jobs.tools}
                onClick={() => handleFilters(tools)}
              >
                {tools}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
