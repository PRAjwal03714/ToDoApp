import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoProject.js";
import { useState } from "react";
import SelectedProject from './components/SelectedProject.js';
import Project from "./components/NewProject.js";


function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],

  });
  function handleProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: null,
      };
    });
  }
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDelete()
    {
      setProjectState((prevProject) => {
        return {
          ...prevProject,
          selectedProject: undefined,
          projects:prevProject.projects.filter((project)=>project.id!==projectState.selectedProject)

        };
      });
    }
  function handleCancel() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProject: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }
  function handleAddProject(data) {
    setProjectState((prevProject) => {
      const newProject = {
        ...data,
        id: Math.random(),
      };
      return {
        ...prevProject,
        selectedProject: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  let content = <SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}/>;
  if (projectState.selectedProject === null) {
    content = <Project onClick={handleCancel} onAdd={handleAddProject} />;
  } else if (projectState.selectedProject === undefined)
    content = <NoProject onStart={handleProject} />;


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelectProject={handleSelectProject}
        project={projectState.projects}
        onStart={handleProject}
        selectedProjectId={projectState.selectedProject}

      />
      {content}
    </main>
  );
}

export default App;
