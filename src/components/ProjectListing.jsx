import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ProjectListing = ({ project }) => {

  const [showFullSummary, setShowFullSummary] = 
    useState(false);

  function handleShowFullSummaryToggle() {
    setShowFullSummary(s => !s);
  }
  let summary = project.summary;

  if (!showFullSummary) {
    summary = summary.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative ">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{project.type}</div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <img src={project.image} />
      </div>

      <div className="mb-5">
        {summary}
      </div>
      <button className="text-2 mb-5 hover:text-3"
              onClick={handleShowFullSummaryToggle}>
        { showFullSummary ? "Less" : "More" }
      </button>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-1 mb-3">
          <label className="inline text-lg mb-1 mr-1">
            {project.date}
          </label>
        </div>
        <Link
          to={`/pubsite/projects/${project.id}`}
          className="h-[36px] bg-2 hover:bg-3 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ProjectListing