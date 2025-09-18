import { FaSmile } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import image from "../../components/layout/imges.webp"
import { SlDislike, SlLike } from "react-icons/sl";
const dummyData = [
    { title: "JavaScript Fundamentals: Variables and Data Types", time: "44 minutes ago", author: "Code Master", liked: 12, disliked: 3 },
    { title: "Mastering React Hooks: useEffect and useState Explained", time: "2 hours ago", author: "Frontend Pro", liked: 25, disliked: 1 },
    { title: "Node.js Crash Course: Building Your First API", time: "5 hours ago", author: "Backend Guru", liked: 17, disliked: 2 },
    { title: "MongoDB Essentials: CRUD Operations Made Easy", time: "1 day ago", author: "Data Ninja", liked: 30, disliked: 0 },
    { title: "Bootstrap 5 Tutorial: Responsive Layouts in Practice", time: "3 days ago", author: "UI Dev", liked: 22, disliked: 5 },
    { title: "Advanced TypeScript: Generics and Utility Types", time: "1 week ago", author: "TS Wizard", liked: 14, disliked: 3 },
    { title: "React Router Deep Dive: Navigation Made Simple", time: "2 weeks ago", author: "React Explorer", liked: 18, disliked: 1 },
    { title: "CSS Grid vs Flexbox: Which Should You Use?", time: "1 month ago", author: "Design Mentor", liked: 35, disliked: 4 },
    { title: "Vue.js Basics: Introduction to Vue 3", time: "3 days ago", author: "Vue Enthusiast", liked: 28, disliked: 2 },
    { title: "React Native: Building Cross-Platform Mobile Apps", time: "1 day ago", author: "Mobile Pro", liked: 45, disliked: 0 },
    { title: "Building REST APIs with Node.js and Express", time: "4 days ago", author: "API Master", liked: 38, disliked: 3 },
    { title: "Learn CSS Flexbox in 30 Minutes", time: "6 days ago", author: "Design Mentor", liked: 24, disliked: 2 },
    { title: "Django Crash Course: Building Your First Web App", time: "2 weeks ago", author: "Backend Developer", liked: 11, disliked: 1 },
    { title: "React JS: Beginner to Advanced", time: "2 days ago", author: "React Wizard", liked: 32, disliked: 0 },
    { title: "Building Real-Time Applications with Socket.io", time: "3 hours ago", author: "Web Master", liked: 29, disliked: 4 },
    { title: "Advanced JavaScript: Promises and Async/Await", time: "5 days ago", author: "JS Guru", liked: 19, disliked: 5 },
    { title: "Tailwind CSS: Master the Utility-First Framework", time: "1 week ago", author: "UI Expert", liked: 15, disliked: 3 },
    { title: "Learn GraphQL: From Basics to Advanced", time: "4 days ago", author: "API Pro", liked: 26, disliked: 2 },
    { title: "Building CRUD Apps with MongoDB and Node.js", time: "1 month ago", author: "Backend Guru", liked: 20, disliked: 6 },
    { title: "CSS Animations: Creating Stunning Visuals", time: "2 weeks ago", author: "Design Expert", liked: 30, disliked: 1 },
    { title: "PHP for Web Development: Getting Started", time: "1 month ago", author: "PHP Master", liked: 12, disliked: 4 },
    { title: "JavaScript ES6 Features: What You Need to Know", time: "3 weeks ago", author: "JS Wizard", liked: 8, disliked: 2 },
    { title: "Next.js Basics: Building Server-Side Rendered Apps", time: "5 days ago", author: "Frontend Master", liked: 40, disliked: 0 },
    { title: "Kubernetes for Developers: Introduction", time: "4 weeks ago", author: "DevOps Pro", liked: 13, disliked: 3 },
    { title: "Firebase Firestore: NoSQL Databases in Web Apps", time: "1 day ago", author: "Firebase Dev", liked: 33, disliked: 0 },
    { title: "HTML5: From Beginner to Advanced", time: "3 days ago", author: "Web Guru", liked: 37, disliked: 2 },
    { title: "Building Web Apps with Flask and Python", time: "2 weeks ago", author: "Python Pro", liked: 21, disliked: 1 },
    { title: "Building Modern Web Applications with Vue.js", time: "3 days ago", author: "Vue Pro", liked: 25, disliked: 4 },
    { title: "Webpack Basics: Bundling JavaScript for the Web", time: "1 week ago", author: "Build Master", liked: 18, disliked: 0 },
    { title: "Jest Testing Framework: Writing Unit Tests", time: "2 weeks ago", author: "Testing Guru", liked: 10, disliked: 3 },
    { title: "TypeScript for React: Static Typing in JavaScript", time: "1 month ago", author: "TypeScript Wizard", liked: 7, disliked: 2 },
    { title: "Building Mobile Apps with Ionic and Angular", time: "3 days ago", author: "Mobile Dev", liked: 27, disliked: 1 },
    { title: "Understanding the Git Workflow", time: "2 weeks ago", author: "Git Master", liked: 32, disliked: 1 },
    { title: "Building E-commerce Websites with Shopify", time: "1 week ago", author: "Shopify Pro", liked: 23, disliked: 0 },
    { title: "React Performance Optimization: Best Practices", time: "5 days ago", author: "React Expert", liked: 19, disliked: 6 },
    { title: "Building RESTful APIs with Express.js", time: "2 weeks ago", author: "Backend Guru", liked: 28, disliked: 4 },
    { title: "Building Scalable Applications with AWS", time: "4 days ago", author: "Cloud Dev", liked: 16, disliked: 2 },
    { title: "SEO for Developers: Optimizing Web Apps", time: "1 month ago", author: "SEO Master", liked: 10, disliked: 5 },
    { title: "Learn Redux: State Management for React", time: "3 weeks ago", author: "React Wizard", liked: 14, disliked: 2 },
    { title: "Modern CSS Techniques for Responsive Web Design", time: "2 weeks ago", author: "CSS Pro", liked: 3, disliked: 20 },
    { title: "Building Secure Web Applications with JWT", time: "5 days ago", author: "Security Expert", liked: 1, disliked: 17 },
    { title: "GraphQL and Apollo Client for React", time: "1 week ago", author: "GraphQL Pro", liked: 6, disliked: 14 }
];


const MyChannelTweets = () => {
    return (

        <div className="text-light">
            <div style={{ width: "98%" }} className="m-3 text-center text-light">
                <textarea style={{ width: "100%", height: "130px" }} placeholder="Write a tweet" className="bg-transparent" name="" id=""></textarea>
                <div className="position-absolute" style={{ bottom: "45px", right: "30px" }}>
                    <FaSmile className="m-1" /> <FaEllipsis className="m-2" /> <button style={{ backgroundColor: "rgb(174 122 255)" }} className="text-dark rounded-0">Send</button>
                </div>
            </div>
            {dummyData.map((item, index) =>

                <div className="border-bottom p-2 d-flex" key={index}>
                    <div>
                        <img src={image} className="profile-icont" alt="" />
                    </div>
                    <div>
                        <p>{item.author} {item.time}<br />{item.title}</p>
                        <div className="d-flex">
                            <div className="ms-2">
                                <button className="bg-transparent border-0 p-0"><SlLike /> {item.liked}</button>
                            </div>
                            <div className="ms-2">
                                <button className="bg-transparent border-0 p-0"><SlDislike /> {item.disliked}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )};

        </div>
    )
}
export default MyChannelTweets;