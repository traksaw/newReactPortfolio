// import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects"
import { Stack } from "@mui/material"

const Projects = () => {
  return (
    <Stack direction="row" justifyContent='center' alignItems='center' spacing={10}>
    {projects.map((project, index) => (
        <>
      <ProjectCard key={index} project={project}/>
      </>
    ))}
  </Stack>
  )
}

export default Projects