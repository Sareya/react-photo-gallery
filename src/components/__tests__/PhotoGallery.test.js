import PhotoGallery from '../PhotoGallery'
import renderer from 'react-test-renderer';
import React from 'react';
import axios from 'axios';

jest.mock('axios')

describe('Snapshot Testing', () => {

  it('Renders ThumbnailGallery snapshot as expected', () => {
          const tree = renderer.create(<PhotoGallery />).toJSON();
          expect(tree).toMatchSnapshot();
  });

});



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
