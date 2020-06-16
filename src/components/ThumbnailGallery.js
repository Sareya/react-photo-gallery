/** @jsx jsx */
import React, { useState , useEffect} from 'react'
import axios from 'axios'
import { jsx } from '@emotion/core'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link} from 'react-router-dom'
import { ThumbnailGrid } from './ThumbnailGrid'


const ThumbnailGallery = (props) => {

  const [thumbnails, setThumbnails] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  let [page, setPage] = useState(1)

  useEffect((page) => {
    getPhotos(page)
  }, [])

  const getPhotos = (p) => {
    console.log('getPhotos ' + page)

    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      )
      .then(res => {
        setThumbnails(thumbnails => [...thumbnails, ...res.data]);
      });


  }

  function RenderThumbnails(){
    return (
      thumbnails.length ? (
           <InfiniteScroll style={{margin:'60px'}}
            dataLength={thumbnails.length}
            next={FetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
              <Link to="/second">
              <ThumbnailGrid thumbnails={thumbnails} onClick={handleClick} />
              </Link>
           </InfiniteScroll>

): null
    ) }


  const FetchMoreData = () => {

      page=page+1
      console.log(page)
      setPage(page)
      console.log(page)
      getPhotos(page)


  };

  function handleClick (e){

    const activeIndex = e.target.getAttribute('data-index')
    setActiveIndex(activeIndex)
    props.setActiveThumbnail(thumbnails[activeIndex])
  }

return(

    <React.Fragment>

          <RenderThumbnails/>

    </React.Fragment>
)}

export default ThumbnailGallery
