//XXX: Korn, Landing Page Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

interface LandingCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const LandingCard: React.FC<LandingCardProps> = ({
  imageUrl,
  title,
  description,
}: LandingCardProps) => {
  //taken directly from the documentation: https://mui.com/components/cards/
  return (
    <Card sx={{ maxWidth: 345, borderStyle: 'solid', border: 1, boxShadow: 2 }}>
      <CardMedia
        component='img'
        height='140'
        image={imageUrl}
        alt='card image'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default LandingCard;
