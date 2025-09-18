const ChannelEditPassword = () => {
    return (
        <div className="d-flex text-light m-3" style={{ width: "98%",height:"400px" }}>
            <div style={{ width: "450px" }}>
                <h5>Personal Info</h5>
                <p>Update your photo and personal details.</p>
            </div>
            <div className="border" style={{ width: "100%", height: "305px" }}>
                <div style={{ width: "100%" }} className="border-bottom">

                    <div style={{ width: "100%" }} className="m-2">
                        <label htmlFor="current" className="d-block">Current password</label>
                        <input style={{ width: "98%", height: "35px" }} placeholder="Current password" type="password" id="current" className="border bg-trasparent rounded-3 bg-transparent" />
                    </div>

                    <div style={{ width: "100%" }} className="m-2">
                        <label htmlFor="new" className="d-block">New password</label>
                        <input style={{ width: "98%", height: "35px" }} placeholder="New password" type="password" id="new" className="border bg-trasparent rounded-3 bg-transparent" />
                        <p>Your new password must be more than 8 characters.</p>
                    </div>

                    <div style={{ width: "100%" }} className="m-2">
                        <label htmlFor="confirm" className="d-block">Confirm password</label>
                        <input style={{ width: "98%", height: "35px" }} placeholder="Confirm password" type="password" id="confire" className="border bg-trasparent rounded-3 bg-transparent" />
                    </div>
                </div>
                <div className="float-end m-2">
                    <button className="me-3">
                        Cancel
                    </button>
                    <button>Save changes</button>
                </div>
            </div>
        </div>
    )
}

export default ChannelEditPassword;