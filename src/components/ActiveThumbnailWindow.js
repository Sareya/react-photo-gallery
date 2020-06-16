/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'


function renderTextContent(thumbnail) {


let colorIndex = thumbnail.url.split('/')
let color = colorIndex[4]
let colorHex = '#' + color
console.log(colorHex);

return(
  <React.Fragment>
    <h2 style={{paddingLeft:'20px',color:colorHex}}>Image Id</h2>
    <p style={{paddingLeft:'20px',fontSize:'30px'}}>{thumbnail.id}</p>
    <h2 style={{paddingLeft:'20px',color:colorHex}}>Album Id</h2>
    <p style={{paddingLeft:'20px',fontSize:'30px'}}>{thumbnail.albumId}</p>
    <h2 style={{paddingLeft:'20px',color:colorHex}}>Image Description </h2>
    <p style={{paddingLeft:'20px',fontSize:'30px'}}>{thumbnail.title}</p>

  </React.Fragment>

)

}

const ActiveThumbnailWindow = ( props ) => {

return(
  <div style={{background: '#ddd',
  width: '1024px',
  margin: '40px auto',
  display: 'flex'}}>
      <div style={{flex:'1'}}><img style ={{height:'100%'}} src={props.activeThumbnail.url} alt='Nothing to show'/>
      </div>
      <div style={{flex:'1'}}>{renderTextContent(props.activeThumbnail)}</div>
    </div>
  )


}

export default ActiveThumbnailWindow
