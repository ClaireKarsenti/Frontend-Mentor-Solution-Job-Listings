import { FC, Key } from 'react';

interface CardType {
  jobs: any;
}

const Card: FC<CardType> = ({ jobs }) => {
  return (
    <>
      {jobs?.map(
        (dataItem: {
          id: number;
          new?: boolean;
          featured?: boolean;
          languages: [];
          tools: [];
          logo: string;
          level: string;
          role: string;
          company: string;
          position: string;
          postedAt: string;
          contract: string;
          location: string;
        }) => {
          const newJob = dataItem.new;

          const {
            id,
            featured,
            logo,
            company,
            position,
            postedAt,
            contract,
            location,
            languages,
            level,
            role,
            tools,
          } = dataItem;

          return (
            <div className="card-container" key={id}>
              <img src={logo} alt={`${company}`} />
              <div className="text-container">
                <div className="header">
                  <div className="name">{company}</div>
                  {newJob ? <span className="newJob">new!</span> : null}
                  {featured ? <span className="featured">featured</span> : null}
                </div>

                <div className="job">
                  <div className="title">{position}</div>
                  <div className="job-details-filters">
                    {/* Role */}
                    <button className="button-filter" key={role} value={role}>
                      {role}
                    </button>

                    {/* Level */}
                    <button className="button-filter" key={level} value={level}>
                      {level}
                    </button>

                    {/* Languages */}
                    {languages?.map((language: string, index: Key) => {
                      return (
                        <button
                          className="button-filter"
                          key={index}
                          value={language}
                        >
                          {language}
                        </button>
                      );
                    })}

                    {/* Tools */}
                    {tools?.map((tools: string, index: Key) => {
                      return (
                        <button
                          className="button-filter"
                          key={index}
                          value={tools}
                          // onClick={(e) => addedFilters(e.target.value)}
                        >
                          {tools}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="details">
                  <ul>
                    <li>{postedAt}</li>
                    <span className="dot"></span>
                    <li>{contract}</li>
                    <span className="dot"></span>
                    <li>{location}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Card;
