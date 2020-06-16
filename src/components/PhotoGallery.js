/** @jsx jsx */
import React, { useState , useEffect} from 'react'
import axios from 'axios'
import { jsx } from '@emotion/core'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link} from 'react-router-dom'
import { PhotoGrid } from './PhotoGrid'
import  '../styles/AppStyle.css'


const PhotoGallery = (props) => {

  const [thumbnails, setThumbnails] = useState([])
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
           <InfiniteScroll className="scroll"
            dataLength={thumbnails.length}
            next={FetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
              <Link to="/detail">
              <PhotoGrid thumbnails={thumbnails} onClick={handleClick} />
              </Link>
           </InfiniteScroll>

): null
    ) }


  const FetchMoreData = () => {

      page=page+1
      setPage(page)
      getPhotos(page)


  };

  function handleClick (e){

    const activeIndex1 = e.target.getAttribute('data-index')
    props.setActiveThumbnail(thumbnails[activeIndex1])
  }

return(

    <React.Fragment>

          <RenderThumbnails/>

    </React.Fragment>
)}


export default PhotoGallery
