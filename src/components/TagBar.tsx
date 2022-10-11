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
          {filters?.map((item: any) => (
            <div className="filters">
              <p className="tag" key={item}>
                {item}
                <button
                  className="cross-button"
                  onClick={() => removeFilter(item)}
                >
                  X
                </button>
              </p>
            </div>
          ))}
          <button className="clear-button" onClick={() => clearAllFilters()}>
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default TagBar;
