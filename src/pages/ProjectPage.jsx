import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projectsList } from '../App';



const ProjectPage = ({ }) => {

  const { id } = useParams();
  var project = projectsList[id];


  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/pubsite/projects"
            className="text-2 hover:text-3 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div className="text-gray-500 mb-4">{project.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {project.title}
                </h1>
                <div
                  className="text-1 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <p>{project.date}</p>

                </div>
                <div className="container rounded-lg shadow-md bg-indigo-50 px-12 max-h-96 max-w-96 overflow-y-scroll justify-center md:justify-center">
                  {project.images.map((image, index) => (
                    <div id={index} className="py-2 px-2 rounded-lg">
                      <Link to={image} target="_blank">
                        <img src={image} className="object-scale-down h-96 rounded-lg" />
                      </Link>
                    </div>
                  ))}
                </div>
                <div
                  className="text-1 mb-4 flex align-middle justify-center md:justify-start pt-4"
                >
                  <p>{project.summary}</p>

                </div>


              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-2 text-lg font-bold mb-6">
                  Project Overview
                </h3>

                <p className="mb-4">
                  {project.description}
                </p>

                <h3 className="text-2 text-lg font-bold mb-2">Development Details</h3>

                <p className="mb-4">{project.details}</p>
              </div>
            </main>

            <aside style={{ float: "right", marginLeft: "0.5rem" }}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Technologies</h3>

                {project.technologies.map((tech, index) => (
                  <img src={tech} className="h-24" />
                ))}



                <hr className="my-4" />

                <h3 className="text-xl">Collaborators</h3>


                <p className="my-2 bg-indigo-100 p-2 font-bold text-2 ">
                  {project.collaborators.map((collaborator) => (
                    <div>
                      <Link className="hover:text-3 cursor-pointer" to={collaborator.github} target="_blank">
                        {collaborator.name}
                      </Link>
                    </div>
                  ))}
                </p>

                <h3 className="text-xl">Repo</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  <Link className="hover:text-3 cursor-pointer" to={project.github} target="_blank">
                    {project.github}
                  </Link>
                </p>
              </div>

            </aside>
          </div>
        </div>
      </section>



    </>


  );
}


export default ProjectPage