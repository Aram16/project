import ReactDom from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ContactsPage from './pages/contacts/ContactsPage';
import AllNewsPage from './pages/allnews/AllnewsPage';
import WelcomePage from './pages/welcome/WelcomePage';
import AboutUsPage from './pages/aboutUs/aboutUsPage';
import EventsPage from './pages/events/eventPage';
import CoursPage from './pages/cours/CoursPage'
import ChessPage from './pages/termsPage/chessPage/chessPage';
import MediaPage from './pages/termsPage/mediaPage/mediaPage';
import ProgrammingPage from './pages/termsPage/programingPage/programingPage';
import EnginnerPage from './pages/termsPage/enginnerPage/enginnerPage';
import i18n from './i18n'
import './index.css';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/aboutUs" component={AboutUsPage} />
                <Route exact path="/allNews" component={AllNewsPage} />
                <Route exact path="/events" component={EventsPage} />
                <Route exact path="/courses" component={CoursPage} />
                <Route exact path="/contact" component={ContactsPage} />
                <Route exact path="/chessLaboratory" component={ChessPage} />
                <Route exact path="/mediaLaboratory" component={MediaPage} />/
                <Route exact path="/programmingLaboratory" component={ProgrammingPage} />
                <Route exact path="/enginnerLaboratory" component={EnginnerPage} />
            </div>
        </BrowserRouter>
    );
};

ReactDom.render(<App />, document.getElementById('root'));