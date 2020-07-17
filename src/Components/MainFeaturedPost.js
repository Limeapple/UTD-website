import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import imageOfAtec from '../images/image-of-utd-near-atec.jpg'
const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: {imageOfAtec},
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    top: 65,
    height:'40vh'
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <div className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${imageOfAtec})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={imageOfAtec} />}
    </div>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
