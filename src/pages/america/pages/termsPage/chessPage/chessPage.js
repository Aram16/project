import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from '../../../../america/components/terms/media/mediaNews'
import { laboratory } from "../../../constants/laboratory";

const ChessPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                name="CHESS LABORATORY"
                laboratoryText={laboratory}
                teachers={ ['Chess teacher', 'Chess teacher'] }
                description={ ['Chess teacher' , 'Chess teacher'] } 
            />
            <Footer />
        </div>
    );
};
export default ChessPage;