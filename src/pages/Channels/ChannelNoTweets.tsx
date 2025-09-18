import { HiOutlineUsers } from "react-icons/hi"

const ChannelNoTweets = () => {
    return (


        <div className="d-flex text-center justify-content-center align-items-center text-light h-100">
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
    )
}
export default ChannelNoTweets