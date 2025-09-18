import { FaRegFolder } from "react-icons/fa"

const ChannelNoPlaylist = () => {
    return (


        <div className="d-flex text-center justify-content-center align-items-center text-light h-100">
            <div className="row align items-center">
                <div className="col-12">
                    <FaRegFolder className="bg-light text-dark rounded-circle" style={{ height: "30px", width: "35px", padding: "5px" }} />
                </div>
                <div className="col-12">
                    <h5>No Playlist Available</h5>
                </div>
                <div className="col-12">
                    <p>There are no playlist created on this channel.</p>
                </div>
            </div>
        </div>
    )
}
export default ChannelNoPlaylist