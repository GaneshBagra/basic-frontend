import logos from "../../components/layout/imges.webp"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
const dummyData = [
  { title: "JavaScript Fundamentals: Variables and Data Types", views: "10.3k Views", time: "44 minutes ago", author: "Code Master", image: logos },
  { title: "Mastering React Hooks: useEffect and useState Explained", views: "8.7k Views", time: "2 hours ago", author: "Frontend Pro", image: logos },
  { title: "Node.js Crash Course: Building Your First API", views: "15.2k Views", time: "5 hours ago", author: "Backend Guru", image: logos },
  { title: "MongoDB Essentials: CRUD Operations Made Easy", views: "6.9k Views", time: "1 day ago", author: "Data Ninja", image: logos },
  { title: "Bootstrap 5 Tutorial: Responsive Layouts in Practice", views: "12.4k Views", time: "3 days ago", author: "UI Dev", image: logos },
  { title: "Advanced TypeScript: Generics and Utility Types", views: "9.8k Views", time: "1 week ago", author: "TS Wizard", image: logos },
  { title: "React Router Deep Dive: Navigation Made Simple", views: "7.1k Views", time: "2 weeks ago", author: "React Explorer", image: logos },
  { title: "CSS Grid vs Flexbox: Which Should You Use?", views: "13.5k Views", time: "1 month ago", author: "Design Mentor", image: logos },
  { title: "Handling Forms in React with Formik and Yup", views: "5.2k Views", time: "3 days ago", author: "Form Wizard", image: logos },
  { title: "Building REST APIs with Express.js", views: "11.7k Views", time: "4 hours ago", author: "API Builder", image: logos },
  { title: "Responsive Web Design: Best Practices in 2025", views: "14.3k Views", time: "6 days ago", author: "UX Guru", image: logos },
  { title: "Git & GitHub Crash Course for Beginners", views: "20.5k Views", time: "2 months ago", author: "Version Control Pro", image: logos },
  { title: "Debugging in VS Code: Tips and Tricks", views: "8.1k Views", time: "1 week ago", author: "Dev Tool Master", image: logos },
  { title: "React Context API vs Redux: When to Choose What", views: "9.4k Views", time: "12 hours ago", author: "State Manager", image: logos },
  { title: "Asynchronous JavaScript: Promises and async/await", views: "16.2k Views", time: "5 days ago", author: "Async Ninja", image: logos },
  { title: "Introduction to GraphQL with Apollo Client", views: "7.8k Views", time: "1 month ago", author: "GraphQL Explorer", image: logos },
  { title: "Server-Side Rendering with Next.js", views: "18.9k Views", time: "4 weeks ago", author: "SSR Expert", image: logos },
  { title: "Building Chat Applications with Socket.io", views: "6.7k Views", time: "2 weeks ago", author: "Realtime Coder", image: logos },
  { title: "Top 10 JavaScript Array Methods You Must Know", views: "22.1k Views", time: "8 hours ago", author: "JS Teacher", image: logos },
  { title: "Docker for Beginners: Containerize Your App", views: "11.9k Views", time: "10 days ago", author: "Cloud Dev", image: logos },
  { title: "REST vs GraphQL: Choosing the Right API Style", views: "13.2k Views", time: "3 weeks ago", author: "API Mentor", image: logos },
  { title: "Styled Components vs Emotion in React", views: "5.4k Views", time: "1 week ago", author: "CSS Artist", image: logos },
  { title: "Authentication in Node.js with JWT", views: "17.6k Views", time: "2 months ago", author: "Security Dev", image: logos },
  { title: "Deploying Apps to Vercel: A Step-by-Step Guide", views: "9.2k Views", time: "6 hours ago", author: "Deploy Master", image: logos },
  { title: "Using Axios for API Requests in React", views: "12.8k Views", time: "2 days ago", author: "HTTP Expert", image: logos },
  { title: "Performance Optimization in React Apps", views: "19.5k Views", time: "1 month ago", author: "Optimization Guru", image: logos },
  { title: "Learning PostgreSQL: From Beginner to Advanced", views: "8.6k Views", time: "3 days ago", author: "DB Expert", image: logos },
  { title: "Tailwind CSS Crash Course: Utility-First Styling", views: "14.7k Views", time: "2 weeks ago", author: "UI Wizard", image: logos },
  { title: "Material UI vs Bootstrap: Which One to Choose?", views: "6.3k Views", time: "2 months ago", author: "Design Thinker", image: logos },
  { title: "React Performance: useMemo and useCallback Explained", views: "7.9k Views", time: "4 hours ago", author: "Hook Master", image: logos },
  { title: "State Management with Zustand in React", views: "4.5k Views", time: "1 week ago", author: "React Hacker", image: logos },
  { title: "Accessibility in Web Apps: A Practical Guide", views: "9.7k Views", time: "5 days ago", author: "A11y Advocate", image: logos },
  { title: "React Testing with Jest and React Testing Library", views: "10.9k Views", time: "9 hours ago", author: "QA Coder", image: logos },
  { title: "Building Dashboards with Recharts", views: "6.8k Views", time: "3 weeks ago", author: "Data Viz Dev", image: logos },
  { title: "CI/CD Pipelines with GitHub Actions", views: "11.1k Views", time: "2 months ago", author: "DevOps Ninja", image: logos },
  { title: "Top 5 Mistakes in React Apps and How to Fix Them", views: "15.4k Views", time: "1 day ago", author: "Bug Hunter", image: logos },
  { title: "Working with APIs: Fetch vs Axios vs GraphQL", views: "13.6k Views", time: "1 month ago", author: "API Master", image: logos },
  { title: "Unit Testing Node.js Apps with Jest", views: "9.1k Views", time: "2 weeks ago", author: "Test Driven Dev", image: logos },
  { title: "Responsive Navigation Bars in Bootstrap 5", views: "7.4k Views", time: "5 days ago", author: "UI Builder", image: logos },
  { title: "Intro to WebSockets: Real-Time Communication", views: "8.2k Views", time: "2 months ago", author: "Realtime Engineer", image: logos },
  { title: "Understanding Event Loop in JavaScript", views: "20.2k Views", time: "12 hours ago", author: "JS Guru", image: logos },
  { title: "Authentication with OAuth 2.0 in Node.js", views: "12.3k Views", time: "6 days ago", author: "Security Architect", image: logos },
  { title: "CSS Animations and Transitions Made Easy", views: "6.6k Views", time: "1 week ago", author: "CSS Magician", image: logos },
  { title: "Design Patterns in JavaScript", views: "15.1k Views", time: "3 weeks ago", author: "Pattern Coder", image: logos },
  { title: "Building Real-Time Apps with Firebase", views: "10.4k Views", time: "1 month ago", author: "Cloud Dev", image: logos },
  { title: "Working with Dates in JavaScript", views: "9.9k Views", time: "2 weeks ago", author: "Time Keeper", image: logos },
  { title: "React Native Crash Course for Beginners", views: "16.5k Views", time: "2 months ago", author: "Mobile Dev", image: logos },
  { title: "GraphQL Subscriptions: Real-Time Data in Action", views: "8.4k Views", time: "1 week ago", author: "GraphQL Guru", image: logos },
  { title: "Serverless Functions with AWS Lambda", views: "14.1k Views", time: "4 weeks ago", author: "Cloud Engineer", image: logos },
  { title: "Top 20 JavaScript Interview Questions", views: "22.9k Views", time: "2 days ago", author: "Interview Coach", image: logos }
];


  return (
    <>
    <div className="all-Videos-main position-relative overflow-y-auto overflow-x-hidden h-100" >
        <div className="row g-3 p-3 ">

            {dummyData.map((item, index) => (

            <div className="col-sm-12 col-md-6 col-xl-4" key={index}>
                <img src={item.image} alt="" />
                <img className="profile-icon" src={logos} alt="" />
                <p><b>{item.title}</b> <br />
                {item.views}. {item.time} <br />
                {item.author}</p>
            </div>
            ))}
            
        </div>
    </div>
    </>
  );
};
export default Home;
