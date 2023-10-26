import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";        

const CardComponent = (props) => {
    const { name, description, image} = props;
    return ( 
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  //will be fixed later
                  //src={require('../assets/images/hospital/h1.jpg')}
                  src={require(`${'../assets/images/hospital/h1.jpg'}`)}
                  alt={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Grid>
     );
}
   
export default CardComponent;      