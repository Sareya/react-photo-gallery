import ActiveThumbnailWindow from '../ActiveThumbnailWindow'
import renderer from 'react-test-renderer';
import React from 'react';

describe('Snapshot Testing', () => {

  it('Renders ActiveThumbnailWindow snapshot as expected', () => {
    const thumbnails={
                        "albumId": 1,
                        "id": 1,
                        "title": "accusamus beatae ad facilis cum similique qui sunt",
                        "url": "https://via.placeholder.com/600/92c952",
                        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                          }

          const tree = renderer.create(<ActiveThumbnailWindow activeThumbnail={thumbnails}/>).toJSON();
          expect(tree).toMatchSnapshot();
  });

});
