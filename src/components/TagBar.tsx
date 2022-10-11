import { FC } from 'react';

interface TagBarType {
  filters: any;
  removeFilter: any;
  clearAllFilters: any;
}

const TagBar: FC<TagBarType> = ({ filters, removeFilter, clearAllFilters }) => {
  return (
    <>
      {filters?.length > 0 && (
        <div className="tagBox">
          <div className="filters">
            {filters.map((item: any) => (
              <>
                <p className="tag" key={item}>
                  {item}
                </p>
                <button
                  className="cross-button"
                  onClick={() => removeFilter(item)}
                >
                  X
                </button>
              </>
            ))}

            <button className="clear-button" onClick={() => clearAllFilters()}>
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TagBar;
