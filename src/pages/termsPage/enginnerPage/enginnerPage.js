import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
// import EnginnerNews from "../../../components/terms/enginner/enginnerNews";
import MediaNews from "../../../components/terms/media/mediaNews";
import { laboratoryEnginner } from "../../../constants/laboratory";

const EnginnerPage = () => {
    return (
        <div>
            <Navbar />
            {/* <EnginnerNews laboratoryenginner={laboratoryEnginner}/> */}
            <MediaNews
                name="ENGINNER LABORATORY" 
                laboratoryenginner={laboratoryEnginner}
                teachers={['Lia', 'Martinez']}
                description={['Full Stack Developer', 'WEB DEVELOPER']}
            />
            <Footer />
        </div>
    );
};
export default EnginnerPage;