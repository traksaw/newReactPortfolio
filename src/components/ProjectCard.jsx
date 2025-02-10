import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';



const ProjectCard = ({project}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {project.description}
          </Typography>
          <Link href={project.link} target="_blank">Check it out</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard