import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
// import ChessNews from '../../../components/terms/chess/chessNews'
import MediaNews from "../../../components/terms/media/mediaNews";

import { laboratory } from "../../../constants/laboratory";

const ChessPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                name="CHESS LABORATORY"
                laboratorychess={laboratory}
                teachers={ ['Chess teacher', 'Chess teacher'] }
                description={ ['Chess teacher' , 'Chess teacher'] } 
            />
            <Footer />
        </div>
    );
};
export default ChessPage;