import { Link } from "react-router-dom";

const ViewAllProjects = () => {
    return (
        <section className="m-auto max-w-lg my-10 px-6">
            <Link
                to="/projects"
                className="block bg-2 text-white text-center py-4 px-6 rounded-xl hover:bg-3"
            >View All Jobs
            </Link>
        </section>
    )
}

export default ViewAllProjects