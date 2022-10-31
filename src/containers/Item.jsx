import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from "react-router-dom";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function Item({product}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Card sx={{ width: 280, height:"350px", background:'#1e1e1e', margin:'10px 0'}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140px"
                    width="100%"
                    image={product.image}
                    alt={product.title}
                    />
                    <CardContent >
                        <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        height="100px"
                        overflow="hidden"
                        >
                            {product.title}
                        </Typography>
                        <Typography 
                        variant="body2" 
                        color="text.secondary"
                        >
                        ${product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/producto/${product.id}`}>
                    <Button 
                    size="medium" 
                    color="primary"
                    >
                        Detalles
                    </Button>
                        </Link>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}