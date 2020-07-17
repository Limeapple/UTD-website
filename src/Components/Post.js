import React from 'react'

const Post = () =>{
  return (
    <div style={positioningPostStyle}>
    <div style={container}>
      <div style={titleFontStyle}>Title</div>
      <div style={dateFontStyle}>Date</div>
      <div style={descriptionFontStyle}>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
      quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
      nulla pariatur?"
      </div>
    </div>
    </div>
  )
}
const positioningPostStyle={
  display:'flex',
  justifyContent:'center',
  padding:10
}
const container={
  background:'white',
  width:"80%",
  minHeight:300,
  boxShadow: "0px 0px 5px -1px hsla(31, 100%, 85%, 1)",
  borderRadius:15,
  padding:20
}
const titleFontStyle={
  fontSize:35,
  fontWeight:'bold'
}
const dateFontStyle={
  fontSize:15,
  padding:2,
  color:'gray',
}
const descriptionFontStyle={
  fontSize:18,
  lineHeight:1.3,
  padding:2,

}
export default Post
