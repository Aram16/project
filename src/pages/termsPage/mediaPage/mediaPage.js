import Navbar from "../../../components/navbar"
import MediaNews from '../../../components/terms/media/mediaNews'
import { laboratoryMedia } from "../../../constants/laboratory";
import Footer from "../../../components/footer"


const MediaPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews laboratorymedia={laboratoryMedia}/>
            <Footer />
            
        </div>
    );
};
export default MediaPage;