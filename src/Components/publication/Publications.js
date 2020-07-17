import React from 'react'
import backgroundImage from '../../images/student-page-background.png'
import Footer from '../Footer'
const Publications =() =>{
  return (
    <div style={container}>
      <div style={studentListContainer}>
        <div style={adjustTextPositionContainer}>
          <div style={researchTitleFontStyle}>Research Areas</div>
          <div style={researchAreaContainer}>
          <div>
          <div>Customer Lifetime Value</div>
          <div>Brand Choice models</div>
          <div>Marketing Efficiency</div>
          <div>Consumer promotions</div>
          <div>Affinity and reward cards</div>
          </div>
          </div>
          <div style={publicationTitleFontStyle}>Publications</div>
          <div  style={publicationListStyle}>Download Vita here</div>
          <div  style={publicationListStyle}>1. “Maximizing Revenue Through Two-Dimensional Shelf Space Allocation” with C. Sriskandarajah, Milind Dawande and Neil Geismar,
           accepted for publication in Production and Operations Management, 2014.</div>
           <div  style={publicationListStyle}>2. “Note on Shift in Demand for Music: Online Music Piracy, Physical Music Sales, and Digital Music Sales” with Byungwan
            Koh and Srinivasan Raghunathan, accepted for publication in Journal of Organizational Computing and Electronic Commerce, 2014.</div>
           <div  style={publicationListStyle}>3. “Evaluating the Effect of Affinity Card Programs on Customer Profitability Using Propensity Score Matching,” with Bakhtiari
            Ali and Erin Steffes, Journal of Interactive Marketing, 27 (2), 83-97, May 2013.</div>
           <div  style={publicationListStyle}>4. “Developing a Measure of Risk Adjusted Revenue (RAR) in Credit Cards Market: Implications for Customer Relationship
             Management” with Shweta Singh and Erin Steffes, European Journal of Operational Research, 224 (2) 425-434, January 2013.</div>
           <div  style={publicationListStyle}>5. "An Empirical Analysis of Strategic Groups in the Airline Industry Using Latent Class Regressions," with Abdul Rasheed and
           Irene Goll, Managerial and Decision Economics, 34 (2): 59-73 March 2013.</div>
           <div  style={publicationListStyle}>6. "Price Awareness and Consumers' Use of Deals in Brand Choice," with Ram C. Rao, Journal of Retailing, Vol. 88 (1), 34-46, 2012.</div>
        </div>
        <Footer/>

      </div>
    </div>
  )
}

const container={
  width:"100vw",
  backgroundImage:`url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display:'flex',
  justifyContent:'center',
  overflowY:'auto',
}
const studentListContainer={
  width:"80vw",
  height:"auto",
  background:'hsla(0, 0%, 97%, 1)',
  boxShadow: "0px 0px 5px -1px rgba(0,0,0,0.6)",
}
const adjustTextPositionContainer={
  marginTop:100,
  color:'gray',
  fontWeight:500,
  lineHeight:2,
  marginBottom:40,
  textAlign:'center'
}
const researchTitleFontStyle={
  fontSize:27,
  fontWeight:'bold',
  color:'hsla(27, 100%, 43%, 1)',
  textAlign:'center',
  lineHeight:1.2
}
const researchAreaContainer={
  display:'flex',
  justifyContent:'center',
  textAlign:'left'
}
const publicationTitleFontStyle={
  color:'hsla(101, 100%, 37%, 1)',
  fontSize:23,
  fontWeight:500,
  textAlign:'center',
  fontWeight:'bold',
}
const publicationListStyle={
  textAlign:'left',
  padding:"10px 10px 0 15px"
}
export default Publications
