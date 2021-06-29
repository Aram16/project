import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from "../../../../armenia/components/terms/media/mediaNews";
import { laboratoryEnginner } from "../../../constants/laboratory";

const EnginnerPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                laboratorymedia={laboratoryEnginner}
                teachers={['Ինժեներական', 'լաբորատորիա']}
                description={['Ինժեներական լաբորատորիա', 'Ինժեներական լաբորատորիա']}
                name="Ինժեներական լաբորատորիա"
            />
            <Footer />
        </div>
    );
};
export default EnginnerPage;