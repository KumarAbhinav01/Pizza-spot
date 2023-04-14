import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleItemAction } from '../../React-Redux/Action/CartAction';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@mui/material/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  veg: {
    backgroundColor: '#00e600',
    color: 'white',
    borderRadius: '5px',
    padding: '3px',
    marginRight: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  nonveg: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    borderRadius: '5px',
    padding: '3px',
    marginRight: '5px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  ratingStar: {
    color: '#ffc107',
    marginRight: '5px',
  },
});

const CardComponent = ({ pizzaData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const getSingleData = (item) => {
    dispatch(singleItemAction(item));
  };

  return (
    <Grid container spacing={2}>
      {pizzaData &&
        pizzaData.map((data) => {
          const { id, name, description, isVeg, rating, price, img_url } = data;
          return (
            <Grid item xs={6} sm={6} md={4} lg={3} key={id}>
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={img_url} title={name} />
                <CardContent>
                  <div>
                    <Typography variant="subtitle1">
                      {isVeg ? (
                        <span className={classes.veg}>Veg</span>
                      ) : (
                        <span className={classes.nonveg}>Non-Veg</span>
                      )}
                      {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {description}
                    </Typography>
                    <Typography variant="subtitle1">Price: ₹ {price}</Typography>
                    <div className={classes.rating}>
                      <Rating name="read-only" value={rating} precision={0.5} readOnly />
                      <span className={classes.ratingStar}>{rating}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Link to={`/product/${id}`}>
                      <span className="card-tag subtle" onClick={() => getSingleData(data)}>
                        <AddIcon style={{ fontSize: '32px', color: 'green', cursor: 'pointer' }} />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default CardComponent;
