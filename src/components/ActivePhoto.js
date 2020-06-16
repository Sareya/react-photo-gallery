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
    <p className="paragraph-style">{thumbnail.id}</p>
    <h2 style={{paddingLeft:'20px',color:colorHex}}>Album Id</h2>
    <p className="paragraph-style">{thumbnail.albumId}</p>
    <h2 style={{paddingLeft:'20px',color:colorHex}}>Image Description </h2>
    <p className="paragraph-style">{thumbnail.title}</p>

  </React.Fragment>

)

}

const ActivePhoto = ( props ) => {

return(
  <div className="active-thumbnail-css">
      <div className='active-thumbnail-child'><img className='active-thumbnail-image' src={props.activeThumbnail.url} alt='Nothing to show'/>
      </div>
      <div className='active-thumbnail-child'>{renderTextContent(props.activeThumbnail)}</div>
    </div>
  )


}

export default ActivePhoto
