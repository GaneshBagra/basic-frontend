
const dummyData = [{
    username: " reactpatterns",
    description: ""
}
]


const ChannelEditChannel = () => {
    return (
        <div className="d-flex text-light m-3" style={{ width: "98%", height: "400px" }}>
            <div style={{ width: "450px" }}>
                <h5>Channel Info</h5>
                <p>Update your Channel details here.</p>
            </div>

            <div className="border" style={{ width: "100%", height: "210px" }}>
                <div style={{ width: "100%" }} className="border-bottom">


                    <div className="d-flex" style={{ width: "100%" }}>
                        <div style={{ width: "14%" }} className="ms-2">
                            <label htmlFor="fname">Username</label>
                            <input style={{ width: "100%", height: "35px" }} value={" youtube.com/"} type="text" className="border rounded-0 bg-transparent" />
                        </div>
                        <div style={{ width: "84%" }}>
                            <input style={{ width: "100%", height: "35px", marginTop: "24px" }} value={dummyData[0].username} type="text" className="border border-start-0 rounded-0 bg-transparent" />
                        </div>
                    </div>


                    <div style={{ width: "100%" }} className="m-2">
                        <label htmlFor="emails" className="d-block">Description</label>
                        <input style={{ width: "98%", height: "35px" }} type="email" id="emails" className="border rounded-3 bg-trasparent bg-transparent" />
                    </div>
                </div>
                <div className="float-end m-3">
                    <button className="me-3">
                        Cancel
                    </button>
                    <button>Save changes</button>
                </div>
            </div>
        </div>
    )
}

export default ChannelEditChannel;