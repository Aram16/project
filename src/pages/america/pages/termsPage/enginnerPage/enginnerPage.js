import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from '../../../../america/components/terms/media/mediaNews'
import { laboratoryEnginner } from "../../../constants/laboratory";

const EnginnerPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                name="CHESS LABORATORY"
                laboratoryText={laboratoryEnginner}
                teachers={ ['Chess teacher', 'Chess teacher'] }
                description={ ['Chess teacher' , 'Chess teacher'] } 
            />
            <Footer />
        </div>
    );
};
export default EnginnerPage;