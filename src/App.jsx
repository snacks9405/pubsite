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
    title: "/pubsite/",
    date: "2024",
    github: "https://github.com/snacks9405/pubsite",
    summary: "A need for a portfolio platform realized its own solution by becoming a personal project culminating in a stronger understanding of React based website design.",
    type: "ReactJS",
    description: "",
    details: "",
    images: [
      ""
    ],
    collaborators: [
      {
        name: "None... Yet!",
        github: "https://github.com/snacks9405/"
      }
    ],
    technologies: [
      "https://ms-dotnettools.gallerycdn.vsassets.io/extensions/ms-dotnettools/dotnet-maui/0.12.42/1717604145155/Microsoft.VisualStudio.Services.Icons.Default",
      "https://freepngimg.com/download/android/58550-mobile-development-android-studio-app-free-download-image.png",
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      "https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo-2012.jpg",
      "https://static-00.iconduck.com/assets.00/postgresql-plain-wordmark-icon-1024x1021-3tzxcisn.png",
    ]
  },
  {
    id: 1,
    title: "Full CPU implemented in Software",
    date: "2023",
    github: "https://github.com/snacks9405/Multi-Cycle-Pipelined-CPU",
    summary: "A full implementation of a 16-bit operating system with pipelining and multi-cycle functionalities designed with the NAND gate as its core.",
    type: "Hardware Simulator",
    description: "Computer Organization and Design was a deep dive into how data is passed around at the circuit level. Throughout this course we developed a " + 
                 "complex simulation of a Multi-Cycle CPU with pipelining built completely from combined NAND gates. The CPU implemented a 16-bit ISA called LARC. " + 
                 "which was designed for such scenarios but modeled after the MIPS instruction set.",
    details: "microprogrammed",
    images: [
      "https://i.ibb.co/BLjVmsM/networking-schematic.png",
      "https://i.ibb.co/RPjrdNZ/networking-truthtable.png",
      "https://i.ibb.co/db1ZyBt/networking-diagram.png",
      "https://i.ibb.co/1KHCx9X/networking-code-Example.png"
    ],
    collaborators: [
      {
        name: "Nick Miller",
        github: "https://github.com/millen91"
      },
    ],
    technologies: [
      "https://i.ibb.co/2K7nbbc/networking-tech.png",
      "https://play-lh.googleusercontent.com/jD8waDJPN1yv4OdcB6_ILw9M4kyNPdtgBYtoTiPrYhxA1l4FLSKXXe4kAcDCjmtZmQ4"
    ]
  },
  {
    id: 2,
    title: "Birdz Mobile/Desktop App",
    date: "2022",
    github: "https://github.com/ahmadd60/CS341-Group-Project",
    summary: "A multi-platform app targeting the growing bird watching community developed within a class meant to simulate the full design process.",
    type: "C# .NET MAUI",
    description: "In the fall of 2022, I took a class called Software Engineering with Dr. Michael Rogers. We broke into groups that " + 
                 "he'd assigned based on a brief questionairre. Duaa, D'Asia and I got right to work. During course lecture" +
                 ", our class discussed the concept of a birdwatching app meant to journal entries and identify birds based on call. Our ambitious group " +
                 "decided to pursue this idea. We faced challenges such as adapting to a newly deployed framework riddled with errors, learning division of " + 
                 "duties and layering in software architecture, and finding time to meet up in a semester that seemed busier than ever for each of us. Our final " +
                 "product lacked some premium advertised features, but we were proud of the result none the less.",
    details: "We first used a Gantt chart to outline development goals. Versioning was done with Git and we'd employed a code review process. Code was primarily" + 
             "keyed in Visual Studio. Code was tested by deploying to Android and Apple mobile emulators, and to Windows as a desktop application. Back end database " +
             "was through a web hosting service to display server-client login and sync functionality. Databasing was done via PostgreSQL.",
    images: [
      "https://i.ibb.co/R09cjr5/birdz-login.png",
      "https://i.ibb.co/M7w24MW/birdz-analog-template.png",
      "https://i.ibb.co/93QcLzZ/birdz-digital-template.png",
      "https://i.ibb.co/FwmKqDY/birdz-gantt.png"
    ],
    collaborators: [
      {
        name: "D'Asia Harvey",
        github: "https://github.com/DAsiaHarvey"
      },
      {
        name: "Duaa Ahmad",
        github: "https://github.com/ahmadd60"
      }
    ],
    technologies: [
      "https://ms-dotnettools.gallerycdn.vsassets.io/extensions/ms-dotnettools/dotnet-maui/0.12.42/1717604145155/Microsoft.VisualStudio.Services.Icons.Default",
      "https://freepngimg.com/download/android/58550-mobile-development-android-studio-app-free-download-image.png",
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      "https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo-2012.jpg",
      "https://static-00.iconduck.com/assets.00/postgresql-plain-wordmark-icon-1024x1021-3tzxcisn.png",
    ]
  },
  {
    id: 3,
    title: "Connect 4 Game",
    date: "20xx",
    github: "",
    summary: "MyFirstGame.java. Michael and I teamed up to create this replica of Connect 4 in Java with UI components designed in JavaFX.",
    type:"Java",
    description: "",
    details: "",
    images: [

    ],
    collaborators: [
      {
        name: "Michael Hulbert",
        github: "https://github.com/CloseRange"
      }
    ],
    technologies: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/BlueJ_Logo.svg/1200px-BlueJ_Logo.svg.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NkHVCdQ8j003gxChxXIDHEOivCDDNRE7pg&s",
      "https://sdtimes.com/wp-content/uploads/2018/03/jfxlogopad1.png",
    ]
  }
  
  
];

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/pubsite/" element={<MainLayout />}>
        <Route path="/pubsite/" element={<HomePage />} />
        <Route path="/pubsite/projects/" element={<ProjectsPage />} />
        <Route path="/pubsite/projects/:id" element={<ProjectPage />} />
        <Route path="/pubsite/experiment/" element={<ExperimentPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      )
  )

  


  return (
    
    <RouterProvider router={router}/>
  )


}





export {App as default, projectsList}
