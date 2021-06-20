import ReactDom from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ContactsPage from './pages/contacts/ContactsPage';
import AllNewsPage from './pages/allnews/AllnewsPage';
import LaboratoryPage from './pages/laboratory/laboratoryPage';
import WelcomePage from './pages/welcome/WelcomePage';
import AboutUsPage from './pages/aboutUs/aboutUsPage';
import EventsPage from './pages/events/eventPage';
import CoursPage from './pages/cours/CoursPage';
import ChessPage from './pages/termsPage/chessPage/chessPage'
import MediaPage from './pages/termsPage/mediaPage/mediaPage'
import ProgrammingPage from './pages/termsPage/programingPage/programingPage'
import EnginnerPage from './pages/termsPage/enginnerPage/enginnerPage'
import America from '../america';


const Armenia = () =>{
    return (
      <div>
        <BrowserRouter>
            <Route exact path="/am" component={WelcomePage} />
            <Route exact path="/am/aboutUs" component={AboutUsPage} />
            <Route exact path="/am/allNews" component={AllNewsPage} />
            <Route exact path="/am/events" component={EventsPage} />
            <Route exact path="/am/courses" component={CoursPage} />
            <Route exact path="/am/contact" component={ContactsPage} />
            <Route exact path="/am/lab" component={LaboratoryPage} />
            <Route exact path="/am/chessLaboratory" component={ChessPage} />
            <Route exact path="/am/mediaLaboratory" component={MediaPage} />
            <Route exact path="/am/programmingLaboratory" component={ProgrammingPage} />
            <Route exact path="/am/enginnerLaboratory" component={EnginnerPage} />
            <Route exact path="/en" component={America} />
        </BrowserRouter>
      </div>
    )
}
export default Armenia;