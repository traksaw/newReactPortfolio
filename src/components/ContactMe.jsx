import { Paper } from "@mui/material"
import {Typography} from "@mui/material"
import {Button} from "@mui/material"

const ContactMe = () => {
  return (
    <Paper elevation={3} className="p-6 text-center">
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Typography variant="body1" color="textSecondary">Feel free to reach out via email or connect on LinkedIn!</Typography>
      <div className="mt-4">
        <Button href="mailto:waskar.paulino@gmail.com" variant="contained" color="primary" className="mr-4">Email Me</Button>
        <Button href="https://www.linkedin.com/in/waskar-m-paulino/" variant="contained" color="secondary">LinkedIn</Button>
      </div>
    </Paper>
  );
}

export default ContactMe