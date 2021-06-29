import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar"
import MediaNews from '../../../components/terms/media/mediaNews'
import { laboratoryMedia } from "../../../constants/laboratory";
const MediaPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                laboratorymedia={laboratoryMedia}
                teachers={['Մեդիա', 'լաբորատորիա']}
                description={['Մեդիա լաբորատորիա', 'Մեդիա լաբորատորիա']}
                name="Մեդիա լաբորատորիա"
            />
            <Footer />
        </div>
    );
};
export default MediaPage;