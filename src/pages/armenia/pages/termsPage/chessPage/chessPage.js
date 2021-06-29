import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from "../../../../armenia/components/terms/media/mediaNews";
import { laboratory } from "../../../constants/laboratory";

const ChessPage = () => {
    return (
        <div>
            <Navbar />
            <MediaNews
                laboratorymedia={laboratory}
                teachers={['Շախմատի', 'լաբորատորիա']}
                description={['Շախմատի լաբորատորիա', 'Շախմատի լաբորատորիա']}
                name="Շախմատի լաբորատորիա"
            /> 
            <Footer />
        </div>
    );
};
export default ChessPage;