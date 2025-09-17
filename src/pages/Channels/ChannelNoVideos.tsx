import logos from "../../components/HeadSection/logo.png"
import banner from "../../components/layout/banner.webp"

const ChannelNoVideos = () => {
    return (
        <div className="w-100 h-100">
            <div>
                <div>
                    <img className="w-100 p-2 pt-0" style={{height:"400px",marginTop:"-110px"}} src={banner} alt="" />
                </div>
            </div>

            <div className="d-flex text-center justify-content-center align-items-center text-light h-100">
                <div className="row align items-center">
                    <div className="col-12">
                        <img className="position-relative" src={logos} alt="" />
                    </div>
                    <div className="col-12">
                        <h5>No Video Available</h5>
                    </div>
                    <div className="col-12">
                        <p>There are no videos here  available. Please try to search some thing else.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChannelNoVideos