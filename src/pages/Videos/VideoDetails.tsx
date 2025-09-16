import video from "../../components/8004696-uhd_3840_2160_25fps.mp4"
import image from "../../components/layout/imges.webp"


const VideoDetails = () => {
    return (
        <div className="video-main position-relative overflow-y-auto overflow-x-hidden h-100">
            <div className="row p-2 text-light">
                <div className="col-7">
                    <video className="video" src={video} controls preload="">
                    </video>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />0.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                        <div className="col-12">
                            <img src={image} alt="" />
                            <p><b>JavaScript Fundamentals: Variables and Data Types</b><br />10.3k Views. 44 minutes ago<br />code Master</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails