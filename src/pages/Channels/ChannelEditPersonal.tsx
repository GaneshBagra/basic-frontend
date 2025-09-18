import { AiOutlineMail } from "react-icons/ai";
const dummyData=[{ 
    fname : "React",
    lname : "Patterns",
    email : "patternsreact@gmail.com"    
}
]


const ChannelEditPersonal = () => {
    return (
        <div className="d-flex text-light m-3" style={{ width: "98%" }}>
            <div style={{ width: "450px" }}>
                <h5>Personal Info</h5>
                <p>Update your photo and personal details.</p>
            </div>
            <div className="border" style={{ width: "100%", height: "220px" }}>
                <div style={{ width: "100%" }} className="border-bottom">
                    <div className="d-flex" style={{ width: "100%" }}>
                        <div style={{ width: "48%" }} className="m-2">
                            <label htmlFor="fname">First name</label>
                            <input style={{ width: "100%", height: "35px" }} value={dummyData[0].fname} type="text" className="border rounded-3 bg-transparent" />
                        </div>
                        <div style={{ width: "48%" }} className="m-2">
                            <label htmlFor="lname">Last name</label>
                            <input style={{ width: "100%", height: "35px" }} value={dummyData[0].lname} type="text" className="border rounded-3 bg-transparent" />
                        </div>
                    </div>
                    <div style={{ width: "98%" }} className="m-2">
                        <label htmlFor="emails" className="d-block">Email address</label>
                        <AiOutlineMail className="border border-end-0" style={{ width: "5%", height: "35px", marginTop: "-5px" }} />
                        <input style={{ width: "95%", height: "35px" }} type="email" value={dummyData[0].email} id="emails" className="border border-start-0 bg-trasparent bg-transparent" />
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

export default ChannelEditPersonal;