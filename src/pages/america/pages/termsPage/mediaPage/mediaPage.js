import Navbar from "../../../components/navbar"
import MediaNews from '../../../components/terms/media/mediaNews'
import { laboratoryMedia } from "../../../constants/laboratory";
const MediaPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                name="CHESS LABORATORY"
                laboratoryText={laboratoryMedia}
                teachers={ ['Chess teacher', 'Chess teacher'] }
                description={ ['Chess teacher' , 'Chess teacher'] } 
            />
            {/* <Footer /> */}
        </div>
    );
};
export default MediaPage;