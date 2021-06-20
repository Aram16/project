import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import EnginnerNews from "../../../components/terms/enginner/enginnerNews";
import { laboratoryEnginner } from "../../../constants/laboratory";

const EnginnerPage = () => {
    return (
        <div>
            <Navbar />
            <EnginnerNews laboratoryenginner={laboratoryEnginner}/>
            <Footer />
        </div>
    );
};
export default EnginnerPage;