import logos from "../../components/layout/imges.webp"
import banner from "../../components/layout/banner.webp"
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import ChannelNoVideos from "./ChannelNoVideos";
import ChannelVideos from "./ChannelVideos";
import ChannelPlaylist from "./ChannelPlaylist";
import ChannelNoPlaylist from "./ChannelNoPlaylist";
import ChannelNoTweets from "./ChannelNoTweets";
import ChannelNoSubscribed from "./ChannelNoSubscribed";
import ChannelTweets from "./ChannelTweets";
import ChannelSubscribed from "./ChannelSubscribed";
import MyChannelTweets from "./MyChannelTweets";

const ChannelHeader = () => {
    const [channelrender, setChannelRender] = useState<String>("videos")

    const HandleVideos = () => setChannelRender("videos");
    const HandlePlaylist = () => setChannelRender("playlist");
    const HandleTweets = () => setChannelRender("tweets");
    const HandleSubscribed = () => setChannelRender("subscribed");

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
                        <p>@reactpatterns <br />
                            600k Subscribers 220subscribed</p>
                    </div>
                    <div style={{ margin: "-90px 10px 0 0", width: "70%" }} >
                        <button className="float-end subscribe-buttons"><FaUserPlus /> Subscribe</button>
                    </div>
                </div>
                <div className="d-flex text-light">
                    <button onClick={HandleVideos} className="m-auto rounded-0 bg-transparent" style={{ width: "24%" }}>
                        Videos
                    </button>
                    <button onClick={HandlePlaylist} className="m-auto rounded-0 bg-transparent" style={{ width: "24%" }}>
                        Playlist
                    </button>
                    <button onClick={HandleTweets} className="m-auto rounded-0 bg-transparent" style={{ width: "24%" }}>
                        Tweets
                    </button>
                    <button onClick={HandleSubscribed} className="m-auto rounded-0 bg-transparent" style={{ width: "24%" }}>
                        Subscribed
                    </button>

                </div>
            </div>

            {/* no videos */}
            {channelrender === "novideos" && (
                <ChannelNoVideos />
            )}


            {/* Videos */}
            {channelrender === "videos" && (
                <ChannelVideos />
                // <ChannelPlaylistVideos/>
            )}

            {/* no Playlist */}
            {channelrender === "noplaylist" && (
                <ChannelNoPlaylist />
            )}


            {/* Playlist */}
            {channelrender === "playlist" && (
                <ChannelPlaylist />
            )}

            {/* no Tweets */}
            {channelrender === "notweets" && (
                <ChannelNoTweets />
            )}
            {/*Tweets */}
            {channelrender === "tweets" && (
                <ChannelTweets />
            )}
            {/* no Subscribed */}
            {channelrender === "nosubscribed" && (
                <ChannelNoSubscribed />
            )}
            {/* Subscribed */}
            {channelrender === "subscribed" && (
                <ChannelSubscribed />
            )}
            {/* nos Tweets */}
            {channelrender === "nostweets" && (
                <MyChannelTweets />
            )}

        </div>
    )
}
export default ChannelHeader;