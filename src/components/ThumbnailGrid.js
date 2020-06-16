/** @jsx jsx */
import {css, jsx } from '@emotion/core'

export const ThumbnailGrid = ({ thumbnails, onClick }) => (
  <div
    css={css`
      height: 45%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    `}
  >
    {thumbnails.map((thumbnail, i) => (
      <Thumbnail
        key={thumbnail.thumbnailUrl}
        imgUrl={thumbnail.thumbnailUrl}
        index={i}
        onClick={onClick}
      />
    ))}
  </div>
)

const Thumbnail = ({ imgUrl, index, onClick }) => (
  <div
    css={css`
      height: 50%;
      width: 25%;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    `}
  >
    <img src={imgUrl} alt= 'Nothing to display' data-index={index} onClick={onClick} />
  </div>
)
