import logos from "../../components/layout/imges.webp"
import banner from "../../components/layout/banner.webp"
import { useState } from "react";
import ChannelEditPersonal from "./ChannelEditPersonal";
import ChannelEditChannel from "./ChannelEditChannel";
import ChannelEditPassword from "./ChannelEditpassword";


const ChannelEditHeader = () => {
    const [channelrender, setChannelRender] = useState<String>("personal")

    const HandleVideos = () => setChannelRender("personal");
    const HandlePlaylist = () => setChannelRender("channel");
    const HandleTweets = () => setChannelRender("password");

    return (
        <div style={{ width: "100%", height: "420px" }} className="border-bottom">
            <div className="w-100 p-2 pt-0">
                <div>
                    <img style={{ height: "450px", width: "100%", marginTop: "-115px" }} src={banner} alt="" />
                </div>
                <div className="d-flex" style={{ width: "100%" }}>
                    <div><img src={logos} style={{ marginTop: "-240px", height: "140px", borderRadius: "100px", width: "140px" }} alt="" /></div>
                    <div className="text-white" style={{ marginTop: "-90px", width: "30%" }} >
                        <h3>React Patterns</h3>
                        <p>@reactpatterns</p>
                    </div>
                    <div style={{ margin: "-90px 10px 0 0", width: "70%" }} >
                        <button className="float-end subscribe-buttons">View channel</button>
                    </div>
                </div>
                <div className="d-flex text-light">
                    <button onClick={HandleVideos} className="m-auto rounded-0 bg-transparent" style={{ width: "33%" }}>
                        Personal Information
                    </button>
                    <button onClick={HandlePlaylist} className="m-auto rounded-0 bg-transparent" style={{ width: "32%" }}>
                        Channel Information
                    </button>
                    <button onClick={HandleTweets} className="m-auto rounded-0 bg-transparent" style={{ width: "32%" }}>
                        Change Password
                    </button>

                </div>
            </div>

            {/* personal information */}
            {channelrender === "personal" && (
                <ChannelEditPersonal />
            )}


            {/* Channel information */}
            {channelrender === "channel" && (
                <ChannelEditChannel />
            )}

            {/* change password */}
            {channelrender === "password" && (
                <ChannelEditPassword />
            )}

        </div>
    )
}
export default ChannelEditHeader;