import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import ChessNews from '../../../components/terms/chess/chessNews'
import { laboratory } from "../../../constants/laboratory";

const ChessPage = () => {
    return (
        <div>
            <Navbar />
            <ChessNews laboratoryText={laboratory}/>
            <Footer />
        </div>
    );
};
export default ChessPage;