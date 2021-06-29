import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from "../../../components/terms/media/mediaNews";
import { laboratoryProgramming } from "../../../constants/laboratory";


const ProgrammingPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                laboratoryprogram={laboratoryProgramming}
                name="PROGRAMMING LABORATORY" 
                teachers={['JOHN', 'SMITH']}
                description={['description', 'WEB DEVELOPER']}
             />
            <Footer />
            
        </div>
    );
};
export default ProgrammingPage;