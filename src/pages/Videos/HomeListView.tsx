import logos from "../../components/layout/imges.webp"
import "bootstrap/dist/css/bootstrap.min.css"

const HomeListView = () => {

   
    const dummyData = [
        { title: "JavaScript Fundamentals: Variables and Data Types", views: "10.3k Views", time: "44 minutes ago", author: "Code Master", image: logos, description: "Learn the basics of JavaScript, including variables, data types, and best practices for beginners." },
        { title: "Mastering React Hooks: useEffect and useState Explained", views: "8.7k Views", time: "2 hours ago", author: "Frontend Pro", image: logos, description: "Deep dive into React hooks, focusing on useEffect and useState for more efficient component management." },
        { title: "Node.js Crash Course: Building Your First API", views: "15.2k Views", time: "5 hours ago", author: "Backend Guru", image: logos, description: "Master the basics of Node.js and learn how to build your very first REST API with Express." },
        { title: "MongoDB Essentials: CRUD Operations Made Easy", views: "6.9k Views", time: "1 day ago", author: "Data Ninja", image: logos, description: "Get hands-on with MongoDB by understanding CRUD operations and how to work with a NoSQL database." },
        { title: "Bootstrap 5 Tutorial: Responsive Layouts in Practice", views: "12.4k Views", time: "3 days ago", author: "UI Dev", image: logos, description: "Learn how to build responsive, mobile-first layouts using Bootstrap 5, the most popular front-end framework." },
        { title: "Advanced TypeScript: Generics and Utility Types", views: "9.8k Views", time: "1 week ago", author: "TS Wizard", image: logos, description: "Take your TypeScript skills to the next level by mastering generics, utility types, and advanced features." },
        { title: "React Router Deep Dive: Navigation Made Simple", views: "7.1k Views", time: "2 weeks ago", author: "React Explorer", image: logos, description: "Master React Router to create dynamic, multi-page applications with ease." },
        { title: "CSS Grid vs Flexbox: Which Should You Use?", views: "13.5k Views", time: "1 month ago", author: "Design Mentor", image: logos, description: "Learn the differences between CSS Grid and Flexbox and when to use each for responsive layouts." },
        { title: "Handling Forms in React with Formik and Yup", views: "5.2k Views", time: "3 days ago", author: "Form Wizard", image: logos, description: "Simplify form handling and validation in React using Formik and Yup, two powerful libraries." },
        { title: "Building REST APIs with Express.js", views: "11.7k Views", time: "4 hours ago", author: "API Builder", image: logos, description: "Learn how to build robust and scalable REST APIs using Express.js and Node.js." },
        { title: "Responsive Web Design: Best Practices in 2025", views: "14.3k Views", time: "6 days ago", author: "UX Guru", image: logos, description: "Stay ahead of the curve by mastering modern responsive web design techniques for 2025." },
        { title: "Git & GitHub Crash Course for Beginners", views: "20.5k Views", time: "2 months ago", author: "Version Control Pro", image: logos, description: "Learn the basics of version control with Git and GitHub and boost your productivity in team development." },
        { title: "Debugging in VS Code: Tips and Tricks", views: "8.1k Views", time: "1 week ago", author: "Dev Tool Master", image: logos, description: "Master the debugging tools in Visual Studio Code and enhance your workflow with powerful tips and tricks." },
        { title: "React Context API vs Redux: When to Choose What", views: "9.4k Views", time: "12 hours ago", author: "State Manager", image: logos, description: "Understand the differences between React Context API and Redux, and learn when to use each for state management." },
        { title: "Asynchronous JavaScript: Promises and async/await", views: "16.2k Views", time: "5 days ago", author: "Async Ninja", image: logos, description: "Unlock the power of asynchronous programming in JavaScript with Promises and async/await." },
        { title: "Introduction to GraphQL with Apollo Client", views: "7.8k Views", time: "1 month ago", author: "GraphQL Explorer", image: logos, description: "Learn how to work with GraphQL and Apollo Client to fetch data efficiently in modern web apps." },
        { title: "Server-Side Rendering with Next.js", views: "18.9k Views", time: "4 weeks ago", author: "SSR Expert", image: logos, description: "Explore server-side rendering in Next.js and improve your web app's performance and SEO." },
        { title: "Building Chat Applications with Socket.io", views: "6.7k Views", time: "2 weeks ago", author: "Realtime Coder", image: logos, description: "Learn how to build real-time chat applications using Socket.io and Node.js." },
        { title: "Top 10 JavaScript Array Methods You Must Know", views: "22.1k Views", time: "8 hours ago", author: "JS Teacher", image: logos, description: "Master the top 10 JavaScript array methods and enhance your coding efficiency." },
        { title: "Docker for Beginners: Containerize Your App", views: "11.9k Views", time: "10 days ago", author: "Cloud Dev", image: logos, description: "Get started with Docker and learn how to containerize your applications for easier deployment and scaling." },
        { title: "REST vs GraphQL: Choosing the Right API Style", views: "13.2k Views", time: "3 weeks ago", author: "API Mentor", image: logos, description: "Understand the key differences between REST and GraphQL APIs, and learn when to use each for your projects." },
        { title: "Styled Components vs Emotion in React", views: "5.4k Views", time: "1 week ago", author: "CSS Artist", image: logos, description: "Explore two popular styling libraries for React: Styled Components and Emotion, and discover their strengths." },
        { title: "Authentication in Node.js with JWT", views: "17.6k Views", time: "2 months ago", author: "Security Dev", image: logos, description: "Learn how to implement secure authentication in your Node.js apps using JSON Web Tokens (JWT)." },
        { title: "Deploying Apps to Vercel: A Step-by-Step Guide", views: "9.2k Views", time: "6 hours ago", author: "Deploy Master", image: logos, description: "Deploy your web apps seamlessly with Vercel and understand the deployment process for modern applications." },
        { title: "Using Axios for API Requests in React", views: "12.8k Views", time: "2 days ago", author: "HTTP Expert", image: logos, description: "Learn how to make API requests in React applications using Axios, a popular HTTP client." },
        { title: "Performance Optimization in React Apps", views: "19.5k Views", time: "1 month ago", author: "Optimization Guru", image: logos, description: "Improve the performance of your React apps by following best practices for optimization and rendering." },
        { title: "Learning PostgreSQL: From Beginner to Advanced", views: "8.6k Views", time: "3 days ago", author: "DB Expert", image: logos, description: "Master PostgreSQL, a powerful relational database, from the basics to advanced querying techniques." },
        { title: "Tailwind CSS Crash Course: Utility-First Styling", views: "14.7k Views", time: "2 weeks ago", author: "UI Wizard", image: logos, description: "Learn how to use Tailwind CSS, a utility-first framework, to build modern, responsive designs." },
        { title: "Material UI vs Bootstrap: Which One to Choose?", views: "6.3k Views", time: "2 months ago", author: "Design Thinker", image: logos, description: "Compare Material UI and Bootstrap, two popular front-end libraries, and learn which one fits your needs." },
        { title: "React Performance: useMemo and useCallback Explained", views: "7.9k Views", time: "4 hours ago", author: "Hook Master", image: logos, description: "Learn how to use useMemo and useCallback to optimize the performance of your React applications." },
        { title: "State Management with Zustand in React", views: "4.5k Views", time: "1 week ago", author: "React Hacker", image: logos, description: "Explore Zustand, a lightweight state management library for React, and learn how to use it effectively." },
        { title: "Accessibility in Web Apps: A Practical Guide", views: "9.7k Views", time: "5 days ago", author: "A11y Advocate", image: logos, description: "Make your web applications accessible to all users by following accessibility best practices and guidelines." }
    ]
    return (
        <>
            <div className="all-Videos-main position-relative overflow-y-auto overflow-x-hidden h-100" >
                <div className="row g-3 p-3 ">

                    {dummyData.map((item, index) => (

                        <div className="col-12 d-flex" key={index}>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <div className="m-2" style={{ width: "500px" }}>
                                <p><b>{item.title}</b> <br />
                                    {item.views}. {item.time} <br /></p>
                                <div className="d-flex">
                                    <div>
                                        <img className="profile-icon" src={logos} alt="" />
                                    </div>
                                    <div className="mt-4">
                                        <p> {item.author}</p>
                                    </div>
                                </div>
                                <div>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div >
        </>
    );
};
export default HomeListView;
