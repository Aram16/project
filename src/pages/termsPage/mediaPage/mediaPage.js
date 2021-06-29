import Navbar from "../../../components/navbar"
import MediaNews from '../../../components/terms/media/mediaNews'
import { laboratoryMedia } from "../../../constants/laboratory";
import Footer from "../../../components/footer"


const MediaPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                name="MEDIA LABORATORY" 
                laboratorymedia={laboratoryMedia}
                teachers={['Lia', 'Martinez']}
                description={['Full Stack Developer', 'WEB DEVELOPER']}
            />
            <Footer />    
        </div>
    );
};
export default MediaPage;