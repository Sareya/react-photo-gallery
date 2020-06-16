import React , { useState} from 'react'
import { Global } from '@emotion/core'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import withBreadcrumbs from "react-router-breadcrumbs-hoc"
import ThumbnailGallery from './components/ThumbnailGallery'
import ActiveThumbnailWindow from './components/ActiveThumbnailWindow'
import { GlobalCSS } from './AppStyle'

/**
 * @function App
 */

const App = () => {

  const [activeThumbnail, setActiveThumbnail] = useState([])

  const routes = [{ path: "/", breadcrumb: 'ThumbnailView' },
                  { path: "/second", breadcrumb: '/Detail View' }];

  const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map(({ match, breadcrumb }) => (
      <span key={match.url}>
        <NavLink to={match.url}>{breadcrumb}</NavLink>
      </span>
    ))}
  </div>
));

  return(
    <>
      <Global styles={GlobalCSS} />
      <Router>
        <Breadcrumbs/>
        <Route exact path="/"><ThumbnailGallery  setActiveThumbnail={setActiveThumbnail}/></Route>
        <Route path="/second"><ActiveThumbnailWindow  activeThumbnail={activeThumbnail}/></Route>
      </Router>
    </>
)
}





export default App
