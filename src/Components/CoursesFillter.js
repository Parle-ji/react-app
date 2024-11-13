import React from 'react';

const CoursesFilter = ({ filterData, setCategory, category }) => {

  return (
    <div className="flex items-center justify-center w-full mt-4 flex-wrap">
      {filterData.map((data) => (
        <button
          type="button"
          key={data.id}
          onClick={() => setCategory(data.title)}
          className={`
            bg-gray-800 mr-4 p-1 mb-4 rounded px-2 text-white font-semibold 
               focus:outline-none focus:border-white focus:ring-1 focus:ring-white
            ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-60 border-transparent"}
          `}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default CoursesFilter;
