import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import ProgrammingNews from "../../../components/terms/programming/proogramming";
import { laboratoryProgramming } from "../../../constants/laboratory";

const ProgrammingPage = () => {
    return (
        <div>
            <Navbar />
            <ProgrammingNews laboratoryprogram={laboratoryProgramming}/>
            <Footer />
            
        </div>
    );
};
export default ProgrammingPage;