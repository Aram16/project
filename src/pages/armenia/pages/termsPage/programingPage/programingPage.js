import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from "../../../../armenia/components/terms/media/mediaNews";
import { laboratoryProgramming } from "../../../constants/laboratory";

const ProgrammingPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                laboratorymedia={laboratoryProgramming}
                teachers={['Ծրագրավորման', 'լաբորատորիա']}
                description={['Ծրագրավորման լաբորատորիա', 'Ծրագրավորման լաբորատորիա']}
                name="Ծրագրավորման լաբորատորիա"
            />            
            <Footer />
            
        </div>
    );
};
export default ProgrammingPage;