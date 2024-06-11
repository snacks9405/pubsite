import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projectsList } from '../App';



const ProjectPage = ({}) => {

  const { id } = useParams();
  var project = projectsList[id];


  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/projects"
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
                <div className="flex justify-center md:justify-center">
                <img className="w-48"
                     src={project.logo} />
                </div>
                <div
                  className="text-1 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <p>{project.summary}</p>
                  
                </div>

                
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">
                  {project.description}
                </p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Details</h3>

                <p className="mb-4">idk more here</p>
              </div>
            </main>

            <aside style={{ float: "right", marginLeft: "0.5rem" }}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Technologies</h3>

                <h2 className="text-2xl">details here</h2>

                <p className="my-2">
                  more details here
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Collaborators:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold text-2 ">
                  <Link className="hover:text-3 cursor-pointer" to="https://github.com/CloseRange" target="_blank">
                    Michael Hullbert
                  </Link>
                  <br />
                  <Link className="hover:text-3 cursor-pointer" to="https://github.com/CloseRange" target="_blank">
                    Michael Hullbert
                  </Link>
                </p>

                {/* <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  get rid of this? 
                </p> */}
              </div>

              {/* <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/projects/${project.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
                </Link>
                <button
                  
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div> */}
            </aside>
          </div>
        </div>
      </section>



    </>

    
  );
}


export default ProjectPage