import { FaSearch } from "react-icons/fa";
import image from "../../components/layout/imges.webp"

const dummyData = [
    { author: "Code Master", subscribers: "1.2k" },
    { author: "Frontend Pro", subscribers: "2.5k" },
    { author: "Backend Guru", subscribers: "1.7k" },
    { author: "Data Ninja", subscribers: "3k" },
    { author: "UI Dev", subscribers: "2.2k" },
    { author: "TS Wizard", subscribers: "1.4k" },
    { author: "React Explorer", subscribers: "1.8k" },
    { author: "Design Mentor", subscribers: "3.5k" },
    { author: "Vue Enthusiast", subscribers: "2.8k" },
    { author: "Mobile Pro", subscribers: "4.5k" },
    { author: "API Master", subscribers: "3.8k" },
    { author: "Design Mentor", subscribers: "2.4k" },
    { author: "Backend Developer", subscribers: "1.1k" },
    { author: "React Wizard", subscribers: "3.2k" },
    { author: "Web Master", subscribers: "2.9k" },
    { author: "JS Guru", subscribers: "1.9k" },
    { author: "UI Expert", subscribers: "1.5k" },
    { author: "API Pro", subscribers: "2.6k" },
    { author: "Backend Guru", subscribers: "2k" },
    { author: "Design Expert", subscribers: "3k" },
    { author: "PHP Master", subscribers: "1.2k" },
    { author: "JS Wizard", subscribers: "800" },
    { author: "Frontend Master", subscribers: "4k" },
    { author: "DevOps Pro", subscribers: "1.3k" },
    { author: "Firebase Dev", subscribers: "3.3k" },
    { author: "Web Guru", subscribers: "3.7k" },
    { author: "Python Pro", subscribers: "2.1k" },
    { author: "Vue Pro", subscribers: "2.5k" },
    { author: "Build Master", subscribers: "1.8k" },
    { author: "Testing Guru", subscribers: "1k" },
    { author: "TypeScript Wizard", subscribers: "700" },
    { author: "Mobile Dev", subscribers: "2.7k" },
    { author: "Git Master", subscribers: "3.2k" },
    { author: "Shopify Pro", subscribers: "2.3k" },
    { author: "React Expert", subscribers: "1.9k" },
    { author: "Backend Guru", subscribers: "2.8k" },
    { author: "Cloud Dev", subscribers: "1.6k" },
    { author: "SEO Master", subscribers: "1k" },
    { author: "React Wizard", subscribers: "1.4k" },
    { author: "CSS Pro", subscribers: "300" },
    { author: "Security Expert", subscribers: "100" },
    { author: "GraphQL Pro", subscribers: "600" }
];

const ChannelSubscribed = () => {
    return (
        <div className="mt-3">
            <div style={{width:"100%"}} className="text-center">
                <FaSearch className="border-0 bg-light p-1" style={{height:"35px",width:"30px", marginTop:"-6px",color:"#d9dde4ff"}}/>
                <input style={{width:"90%",height:"35px"}} className="rounded-0 bg-light border-0" type="text" placeholder="Search" />
            </div>
            {dummyData.map((item,index) =>
                <div className="m-2 mt-3 d-flex text-light" key={index}>
                    <div>
                        <img src={image} className="profile-icont" alt="" />
                    </div>
                    <div>
                        <h4>{item.author}</h4>
                        <p>{item.subscribers} Subscribers</p>
                    </div>
                    <div style={{position:"absolute", right:"10px"}}>
                        <button className="float-end">Subscribe</button>
                    </div>
                </div>

            )}


        </div>
    )
}

export default ChannelSubscribed;