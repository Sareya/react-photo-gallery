import ThumbnailGallery from '../ThumbnailGallery'
import ThumbnailGrid from '../ThumbnailGrid'
import ActiveThumbnailWindow from '../ActiveThumbnailWindow'
import renderer from 'react-test-renderer';
import React, { useState } from 'react';
import axios from 'axios';
import { mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
// import configureStore from 'redux-mock-store';
// import sinon from 'sinon';
import { StaticRouter } from 'react-router-dom'
import expect from "expect";


jest.mock('axios')
configure({ adapter: new Adapter() });
// const mockStore = configureStore();
// sinon.spy(ThumbnailGallery.prototype, 'useEffect');

describe('Snapshot Testing', () => {

  it('Renders ThumbnailGallery snapshot as expected', () => {
          const tree = renderer.create(<ThumbnailGallery />).toJSON();
          expect(tree).toMatchSnapshot();
  });

});


// test('Renders ActiveThumbnailWindow snapshot as expected', () => {
//   const thumbnails={
//                       "albumId": 1,
//                       "id": 1,
//                       "title": "accusamus beatae ad facilis cum similique qui sunt",
//                       "url": "https://via.placeholder.com/600/92c952",
//                       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//                         }
//
//         const tree = renderer.create(<ActiveThumbnailWindow activeThumbnail={thumbnails}/>).toJSON();
//         expect(tree).toMatchSnapshot();
// });

describe('getPhotos', () => {
  it('fetches successfully data from an API', async () => {
    const data = [{
                        "albumId": 1,
                        "id": 1,
                        "title": "accusamus beatae ad facilis cum similique qui sunt",
                        "url": "https://via.placeholder.com/600/92c952",
                        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                      },{
                        "albumId": 1,
                        "id": 2,
                        "title": "reprehenderit est deserunt velit ipsam",
                        "url": "https://via.placeholder.com/600/771796",
                        "thumbnailUrl": "https://via.placeholder.com/150/771796"
                      },{
                        "albumId": 1,
                        "id": 3,
                        "title": "officia porro iure quia iusto qui ipsa ut modi",
                        "url": "https://via.placeholder.com/600/24f355",
                        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                      }
]

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});
