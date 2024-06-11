import ProjectListing from './ProjectListing';

import { projectsList } from '../App';

const ProjectListings = ({ isHome = false }) => {

  const projects = isHome ? projectsList.slice(0, 3) : projectsList;
  


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-1 mb-6 text-center">
          { isHome ? "Recent Projects" : "Browse Projects" }
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { projects.map((project) => (
              <ProjectListing key={project.id} project={project} />
            )) }
        </div>
      
      </div>
    </section>

  )
}

export default ProjectListings