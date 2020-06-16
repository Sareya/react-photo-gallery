import React , { useState} from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import withBreadcrumbs from "react-router-breadcrumbs-hoc"
import PhotoGallery from './components/PhotoGallery'
import ActivePhoto from './components/ActivePhoto'
import  './styles/AppStyle.css'

/**
 * @function App
 */

const App = () => {

  const [activeThumbnail, setActiveThumbnail] = useState([])

  const routes = [{ path: "/", breadcrumb: 'Photo Gallery' },
                  { path: "/detail", breadcrumb: ' / Photo Details' }];

  const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div className="breadcrumb-style">
    {breadcrumbs.map(({ match, breadcrumb }) => (
      <span key={match.url}>
        <NavLink to={match.url}>{breadcrumb}</NavLink>
      </span>
    ))}
  </div>
));


  return(

    <>
      <div className="main">
      <Router>
        <Breadcrumbs/>
        <Route exact path="/"><PhotoGallery  setActiveThumbnail={setActiveThumbnail}/></Route>
        <Route path="/detail"><ActivePhoto  activeThumbnail={activeThumbnail}/></Route>
      </Router>
    </div>
    </>
)


}





export default App
