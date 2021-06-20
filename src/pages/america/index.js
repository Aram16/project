import ReactDom from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ContactsPage from './pages/contacts/ContactsPage';
import AllNewsPage from './pages/allnews/AllnewsPage';
import LaboratoryPage from './pages/laboratory/laboratoryPage';
import WelcomePage from './pages/welcome/WelcomePage';
import AboutUsPage from './pages/aboutUs/aboutUsPage';
import EventsPage from './pages/events/eventPage';
import CoursPage from './pages/cours/CoursPage';
import ChessPage from  './pages/termsPage/chessPage/chessPage';
import MediaPage from './pages/termsPage/mediaPage/mediaPage';
import ProgramingPage from './pages/termsPage/programingPage/programingPage';
import EnginnerPage from './pages/termsPage/enginnerPage/enginnerPage'
import Armenia from '../armenia';


const America = () =>{
    return (
      <div>
        <BrowserRouter>
            <Route exact path="/en" component={WelcomePage} />
            <Route exact path="/en/aboutUs" component={AboutUsPage} />
            <Route exact path="/en/allNews" component={AllNewsPage} />
            <Route exact path="/en/events" component={EventsPage} />
            <Route exact path="/en/courses" component={CoursPage} />
            <Route exact path="/en/contact" component={ContactsPage} />
            <Route exact path="/en/chessLaboratory" component={ChessPage} />
            <Route exact path="/en/mediaLaboratory" component={MediaPage} />
            <Route exact path="/en/programmingLaboratory" component={ProgramingPage} />
            <Route exact path="/en/enginnerLaboratory" component={EnginnerPage} />
            <Route exact path="/am" component={Armenia} />
        </BrowserRouter>
      </div>
    )
}
export default America;