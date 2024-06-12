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
    summary: "A need for a portfolio platform realized its own solution by becoming a personal project culminating in a stronger understanding of React based websites " + 
             "and hopefully a great first impression on MCC, Inc.",
    type: "ReactJS",
    description: "",
    details: "",
    images: [
      "https://i.ibb.co/mzcGycK/pubsite-screencap.png",
      "https://i.ibb.co/pfXwMVq/structure.png",
      "https://i.ibb.co/m83cmMV/parameter-Passing.png",
      "https://i.ibb.co/PcNwhc1/routing.png",
    ],
    collaborators: [
      {
        name: "None... Yet!",
        github: "https://github.com/snacks9405/"
      }
    ],
    technologies: [
      "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/800px-Vitejs-logo.svg.png",
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      "https://logowik.com/content/uploads/images/visual-studio-code4470.jpg",
      "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png",
    ]
  },
  {
    id: 1,
    title: "Full CPU Software Implementation",
    date: "2023",
    github: "https://github.com/snacks9405/Multi-Cycle-Pipelined-CPU",
    summary: "A full implementation of a 16-bit operating system with pipelining and multi-cycle functionalities designed with the NAND gate as its core.",
    type: "Hardware Simulator",
    description: "Equipped with a fundamental understanding of bit handling, initial steps were taken towards our ultimate goal of a CPU. We studied how simple NAND gates " + 
             "could be assembled into more complex components ranging from registers for storing data to Arithmetic Logic Units for handling maths. We followed this chain " + 
             "of abstraction and compartmentalization, maintaining careful control of bit paths, to a fully functional multi-cycle CPU with micro-programmed instructions " + 
             "running complex programs that include recursion and looping capabilities. By the end of this project, Nick and I could have described the path of any given bit " + 
             "through the board with absolute precision. This imparted a stronger understanding of low-level hardware and optimizations that result from a closer relationship " + 
             "between a program and the ISA of the target system.",
    details: "Development was primarily done on a whiteboard in a forgotten conference room in the Halsey Science building at UWO. My time with that white" + 
             "board brought my ability to pen the { character from 'absolutely no idea' to the 'barely passable' that I now proudly claim. Nick and I spent countless hours " + 
             "spinning in dusty chairs trying to wrap our brains around vertically encoding our instruction set to reduce the bits required to define it. We burned through " + 
             "a dozen dry-erase pens brainstorming different ways to combine components like registers into arrays that a ROM would require. Keying was primarily done on good old " + 
             "notepad.exe. While this project wasn't a traditional coding project, I can't leave it out. Understanding optimizations at that level inspired a more precise way of " + 
             "approaching most programming problems.",
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
      "https://play-lh.googleusercontent.com/jD8waDJPN1yv4OdcB6_ILw9M4kyNPdtgBYtoTiPrYhxA1l4FLSKXXe4kAcDCjmtZmQ4",
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
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
    date: "2021",
    github: "https://github.com/snacks9405/Connect-4-App",
    summary: "MyFirstGame.java. Michael and I teamed up to create this replica of Connect 4 in Java with a fully functional UI designed in JavaFX. It even comes " +
             "with a rudimentary AI opponent!",
    type:"Java",
    description: "For my first foray into UI development, I was blessed to have a full-blown hobbyist as a guide. Michael proved invaluable in these early projects as " + 
                 "an amazing teacher. You'll see his name pop up in quite a few of my projects as I get more uploaded! As for the game, we'd already designed the underlying " + 
                 "logic in a previous iteration. This was just a fun opportunity to bring our console game to life.",
    details: "Michael and I utilized an event-driven approach to designing this application. All helper classes display strong code reuse and inheritance principles. As this " + 
             "was still near the beginning of our time at UWO, we keyed our code in the BlueJ IDE. I remember really pushing us to begin adopting github. This memory is reinforced " + 
             "by the evidence of it being one of my very first repos! Git and I have been best friends ever since. I think we even got to play around with some deltas in this" + 
             "project.",
    images: [
      "https://i.ibb.co/m6y98fn/c4-screenshot.png",
      "https://i.ibb.co/Z6wrXrr/c4-code.png",

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
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
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
