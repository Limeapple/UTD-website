import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Post from './Post'
const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <main>
        <div >
          <MainFeaturedPost   />

          <div style={{display:"flex"}}>
            <Main />
            <AboutMe/>
          </div>
          </div>
          <div style={{fontSize:45, fontWeight:400, textAlign:'center'}}>Posts</div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>

        </main>
      </Container>
      <Footer description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
