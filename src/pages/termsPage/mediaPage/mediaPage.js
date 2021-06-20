import Navbar from "../../../components/navbar"
import MediaNews from '../../../components/terms/media/mediaNews'
import { laboratoryMedia } from "../../../constants/laboratory";
const MediaPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews laboratorymedia={laboratoryMedia}/>
            {/* <Navbar /> */}
            {/* <ChessNews laboratoryText={laboratory}/> */}
            {/* <Footer /> */}
        </div>
    );
};
export default MediaPage;