import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export default function Main() {

  return (
    <div>
      <div style={container}>
      <div style={alignImageContainer}>
        <div style={imageCircleContainer}></div>
      </div>
      <div style={informationAboutYouContainer}>
      <div style={nameFontStyle}>B. P. S. Murthi</div>
      <div style={titleFontStyle}>
          <div><i>Professor of Marketing</i></div>
          <div><i>Director, Morris Hite Center</i></div>
          <br/>
          <div>Office: 13.320 (New Building) Naveen Jindal School of Management</div>
          <div>University of Texas at Dallas</div>
          <br/>
          <div>Tel 972-883-6355</div>
          <div>Fax 972-883-6727</div>
          <div>murthi@utdallas.edu</div>
      </div>
      </div>
      </div>
    </div>
  );
}
const container={
  width:265,
  height:"53vh",
  background:"hsla(120, 86%, 92%, 1)",
  position:"relative",
  top:-30,
  borderRadius:10,
  boxShadow: "0px 0px 5px -1px rgba(0,0,0,0.75)"
}
const imageCircleContainer={
  width:170,
  height:170,
  background:"white",
  borderRadius:"100%"
}
const alignImageContainer={
  display:"flex",
  justifyContent:"center",
  position:'relative',
  top:-85
}
const informationAboutYouContainer={
  position:'relative',
  top:-85
}
const nameFontStyle={
  textAlign:'center',
  fontWeight:'bold',
  fontSize:25
}
const titleFontStyle={
  textAlign:'center',
  fontSize:15
}
