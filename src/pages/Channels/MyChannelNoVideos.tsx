import { FaPlus } from "react-icons/fa"
import logos from "../../components/HeadSection/logo.png"

const MyChannelNoVideos = () => {
    return (


        <div className="d-flex text-center justify-content-center align-items-center text-light h-100">
            <div className="row align items-center">
                <div className="col-12">
                    <img className="position-relative" src={logos} alt="" />
                </div>
                <div className="col-12">
                    <h5>No videos uploaded</h5>
                </div>
                <div className="col-12">
                    <p>This page has yet to upload a video. Search another page in order to find more videos.</p>
                <button className="text-dark" style={{backgroundColor:"rgb(174 122 255)"}}><FaPlus/> New video</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default MyChannelNoVideos