import { Paper } from "@mui/material"
import {Typography} from "@mui/material"

const AboutMe = () => {
  return (
    <>
    <Paper elevation={3} className="p-6 text-center">
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography variant="body1" color="textSecondary">Hello World! My name is Waskar Miguel Paulino. I am a Full Stack Developer driven to learn about new techologies and develop tools for my community.</Typography>
    </Paper>
    </>
  )
}

export default AboutMe