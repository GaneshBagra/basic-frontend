import { FaSmile } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi"

const MyChannelNoTweets = () => {
    return (

        <div>
            <div style={{ width: "98%" }} className="m-3 text-center text-light">
                <textarea style={{ width: "100%", height: "130px" }} placeholder="Write a tweet" className="bg-transparent" name="" id=""></textarea>
                <div className="position-absolute" style={{ bottom: "45px", right: "30px" }}>
                    <FaSmile className="m-1" /> <FaEllipsis className="m-2" /> <button style={{ backgroundColor: "rgb(174 122 255)" }} className="text-dark rounded-0">Send</button>
                </div>
            </div>

            <div className="d-flex text-center justify-content-center text-light">
                <div className="row align items-center">
                    <div className="col-12">
                        <HiOutlineUsers className="bg-light text-dark rounded-circle" style={{ height: "30px", width: "35px", padding: "5px" }} />
                    </div>
                    <div className="col-12">
                        <h5>No Tweets</h5>
                    </div>
                    <div className="col-12">
                        <p>This channel has yet to make a <strong>Tweet</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyChannelNoTweets;