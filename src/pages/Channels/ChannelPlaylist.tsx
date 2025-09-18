import logos from "../../components/layout/imges.webp"
const dummyData = [
    { title: "JavaScript Fundamentals: Variables and Data Types", views: "10.3k Views", time: "44 minutes ago", author: "Code Master", image: logos, videos: 12 },
    { title: "Mastering React Hooks: useEffect and useState Explained", views: "8.7k Views", time: "2 hours ago", author: "Frontend Pro", image: logos, videos: 25 },
    { title: "Node.js Crash Course: Building Your First API", views: "15.2k Views", time: "5 hours ago", author: "Backend Guru", image: logos, videos: 18 },
    { title: "MongoDB Essentials: CRUD Operations Made Easy", views: "6.9k Views", time: "1 day ago", author: "Data Ninja", image: logos, videos: 7 },
    { title: "Bootstrap 5 Tutorial: Responsive Layouts in Practice", views: "12.4k Views", time: "3 days ago", author: "UI Dev", image: logos, videos: 32 },
    { title: "Advanced TypeScript: Generics and Utility Types", views: "9.8k Views", time: "1 week ago", author: "TS Wizard", image: logos, videos: 22 },
    { title: "React Router Deep Dive: Navigation Made Simple", views: "7.1k Views", time: "2 weeks ago", author: "React Explorer", image: logos, videos: 19 },
    { title: "CSS Grid vs Flexbox: Which Should You Use?", views: "13.5k Views", time: "1 month ago", author: "Design Mentor", image: logos, videos: 27 },
    { title: "Vue.js Basics: Introduction to Vue 3", views: "5.4k Views", time: "3 days ago", author: "Vue Enthusiast", image: logos, videos: 10 },
    { title: "React Native: Building Cross-Platform Mobile Apps", views: "9.2k Views", time: "1 day ago", author: "Mobile Pro", image: logos, videos: 20 },
    { title: "Building REST APIs with Node.js and Express", views: "14.8k Views", time: "4 days ago", author: "API Master", image: logos, videos: 14 },
    { title: "Learn CSS Flexbox in 30 Minutes", views: "6.1k Views", time: "6 days ago", author: "Design Mentor", image: logos, videos: 30 },
    { title: "Django Crash Course: Building Your First Web App", views: "11.5k Views", time: "2 weeks ago", author: "Backend Developer", image: logos, videos: 24 },
    { title: "React JS: Beginner to Advanced", views: "7.3k Views", time: "2 days ago", author: "React Wizard", image: logos, videos: 33 },
    { title: "Building Real-Time Applications with Socket.io", views: "10.9k Views", time: "3 hours ago", author: "Web Master", image: logos, videos: 21 },
    { title: "Advanced JavaScript: Promises and Async/Await", views: "8.6k Views", time: "5 days ago", author: "JS Guru", image: logos, videos: 17 },
    { title: "Tailwind CSS: Master the Utility-First Framework", views: "12.1k Views", time: "1 week ago", author: "UI Expert", image: logos, videos: 25 },
    { title: "Learn GraphQL: From Basics to Advanced", views: "9.7k Views", time: "4 days ago", author: "API Pro", image: logos, videos: 15 },
    { title: "Building CRUD Apps with MongoDB and Node.js", views: "13.8k Views", time: "1 month ago", author: "Backend Guru", image: logos, videos: 23 },
    { title: "CSS Animations: Creating Stunning Visuals", views: "7.8k Views", time: "2 weeks ago", author: "Design Expert", image: logos, videos: 9 },
    { title: "PHP for Web Development: Getting Started", views: "6.2k Views", time: "1 month ago", author: "PHP Master", image: logos, videos: 11 },
    { title: "JavaScript ES6 Features: What You Need to Know", views: "8.9k Views", time: "3 weeks ago", author: "JS Wizard", image: logos, videos: 13 },
    { title: "Next.js Basics: Building Server-Side Rendered Apps", views: "10.5k Views", time: "5 days ago", author: "Frontend Master", image: logos, videos: 29 },
    { title: "Kubernetes for Developers: Introduction", views: "11.3k Views", time: "4 weeks ago", author: "DevOps Pro", image: logos, videos: 18 },
    { title: "Firebase Firestore: NoSQL Databases in Web Apps", views: "7.4k Views", time: "1 day ago", author: "Firebase Dev", image: logos, videos: 16 },
    { title: "HTML5: From Beginner to Advanced", views: "6.8k Views", time: "3 days ago", author: "Web Guru", image: logos, videos: 22 },
    { title: "Building Web Apps with Flask and Python", views: "8.1k Views", time: "2 weeks ago", author: "Python Pro", image: logos, videos: 12 },
    { title: "Building Modern Web Applications with Vue.js", views: "10.2k Views", time: "3 days ago", author: "Vue Pro", image: logos, videos: 14 },
    { title: "Webpack Basics: Bundling JavaScript for the Web", views: "7.5k Views", time: "1 week ago", author: "Build Master", image: logos, videos: 28 },
    { title: "Jest Testing Framework: Writing Unit Tests", views: "8.4k Views", time: "2 weeks ago", author: "Testing Guru", image: logos, videos: 8 },
    { title: "TypeScript for React: Static Typing in JavaScript", views: "7.9k Views", time: "1 month ago", author: "TypeScript Wizard", image: logos, videos: 19 },
    { title: "Building Mobile Apps with Ionic and Angular", views: "6.4k Views", time: "3 days ago", author: "Mobile Dev", image: logos, videos: 10 },
    { title: "Understanding the Git Workflow", views: "9.1k Views", time: "2 weeks ago", author: "Git Master", image: logos, videos: 15 },
    { title: "Building E-commerce Websites with Shopify", views: "10.8k Views", time: "1 week ago", author: "Shopify Pro", image: logos, videos: 21 },
    { title: "React Performance Optimization: Best Practices", views: "11.0k Views", time: "5 days ago", author: "React Expert", image: logos, videos: 26 },
    { title: "Building RESTful APIs with Express.js", views: "9.4k Views", time: "2 weeks ago", author: "Backend Guru", image: logos, videos: 23 },
    { title: "Building Scalable Applications with AWS", views: "13.2k Views", time: "4 days ago", author: "Cloud Dev", image: logos, videos: 17 },
    { title: "SEO for Developers: Optimizing Web Apps", views: "8.3k Views", time: "1 month ago", author: "SEO Master", image: logos, videos: 20 },
    { title: "Learn Redux: State Management for React", views: "12.2k Views", time: "3 weeks ago", author: "React Wizard", image: logos, videos: 24 },
    { title: "Modern CSS Techniques for Responsive Web Design", views: "6.7k Views", time: "2 weeks ago", author: "CSS Pro", image: logos, videos: 30 },
    { title: "Building Secure Web Applications with JWT", views: "7.2k Views", time: "5 days ago", author: "Security Expert", image: logos, videos: 16 },
    { title: "GraphQL and Apollo Client for React", views: "10.6k Views", time: "1 week ago", author: "GraphQL Pro", image: logos, videos: 25 },
    { title: "Mobile First Design: Best Practices", views: "8.0k Views", time: "2 days ago", author: "Design Mentor", image: logos, videos: 9 },
    { title: "Building Web Apps with Svelte", views: "7.0k Views", time: "3 weeks ago", author: "Svelte Master", image: logos, videos: 13 }
];

const ChannelPlaylist = () => {
    return (
        <div className="row text-light m-2 mt-3" style={{ height: "100%" }}>

            {dummyData.map((item, index) => (

                <div className="col-6" key={index}>
                    <div>
                        <div style={{ width: "540px" }}>
                            <img src={item.image} style={{ height: "310px", width: "540px" }} alt="" />
                            <div className="position-relative z-3 bg-light text-black p-2" style={{ bottom: "63px", opacity: "0.3" }}>
                                <p className="float-end">{item.videos} Videos</p>
                                <p>Playlist <br />{item.views} · {item.time}</p>
                            </div>
                        </div>
                        <div style={{ margin: "-60px 0 10px 0" }}>
                            <p><b>{item.author}</b><br />{item.title}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ChannelPlaylist;




