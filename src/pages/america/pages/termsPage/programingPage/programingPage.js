import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from '../../../../america/components/terms/media/mediaNews'
import { laboratoryProgramming } from "../../../constants/laboratory";

const ProgrammingPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                name="CHESS LABORATORY"
                laboratoryProgramming={laboratoryProgramming}
                teachers={ ['Chess teacher', 'Chess teacher'] }
                description={ ['Chess teacher' , 'Chess teacher'] } 
            />            <Footer />
            
        </div>
    );
};
export default ProgrammingPage;