/** @jsx jsx */
import { jsx } from '@emotion/core'

export const PhotoGrid = ({ thumbnails, onClick }) => (
  <div className="thumbnail-grid-css"
  >
    {thumbnails.map((thumbnail, i) => (
      <Grid
        key={thumbnail.thumbnailUrl}
        imgUrl={thumbnail.thumbnailUrl}
        index={i}
        onClick={onClick}
      />
    ))}
  </div>
)

const Grid = ({ imgUrl, index, onClick }) => (
  <div className="thumbnail-css"
  >
    <img className="thumbnail-image" src={imgUrl} alt= 'Nothing to display' data-index={index} onClick={onClick} />
  </div>
)
