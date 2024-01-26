import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";

export default function CardDefault({movie}) {
  return (
    <Card className="mt-6 w-96 "  >
      <CardHeader style={{height:"480px"}} color="blue-gray" className="relative h-56" >
        
        <img
          src= {movie.posterUrl}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {movie.title}
        </Typography>

        <Typography 
         style={{height:"120  px"}}
        >
        {movie.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {movie.rating}
       
      </CardFooter>
    </Card>
  );
}
