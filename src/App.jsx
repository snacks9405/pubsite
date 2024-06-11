import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import ExperimentPage from './pages/ExperimentPage';
import NotFoundPage from './pages/NotFoundPage';

const projectsList = [
  {
    id: 0,
    title: "project 1",
    date: "2022",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    logo: "/demo.webp",
  },
  {
    id: 1,
    title: "project 2",
    date: "2021",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    image: "",
  },
  {
    id: 2,
    title: "project 3",
    date: "2020",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    image: "",
  },
  {
    id: 3,
    title: "project 4",
    date: "2019",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    image: "",
  },
  {
    id: 4,
    title: "project 4",
    date: "2019",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    image: "",
  },
  {
    id: 5,
    title: "project 4",
    date: "2019",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    image: "",
  },
  {
    id: 6,
    title: "project 4",
    date: "2019",
    summary: "wait till you see this cool stuff holy cow it's so insane off the freakin chain mother freaker come react to the tailscript wind magic of",
    type: "java",
    description: "i did so much cool stuff with this one you have no idea I put the spatula through the ring of the leopard shirt it was nuts.",
    image: "",
  }
];

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects/" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/experiment/" element={<ExperimentPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      )
  )

  


  return (
    
    <RouterProvider router={router}/>
  )


}





export {App as default, projectsList}
