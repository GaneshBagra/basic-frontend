import logos from "../../components/layout/imges.webp";

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
  { title: "Git & GitHub Crash Course for Beginners", views: "20.5k Views", time: "2 months ago", author: "Version Control Pro", image: logos }
];

const ChannelPlaylistVideos = () => {
  return (
    <div>

      <div className="video-main overflow-y-auto overflow-x-hidden h-100">
        <div className="row p-2 text-light m-2">
          <div className="col-12 col-xl-5 right-side">
            <div className="row">
              <div className="col-12">
                <div className="col-6">
                  <div>
                    <div style={{ width: "450px" }}>
                      <img className="rounded-0" src={logos} style={{ height: "310px", width: "100%", marginLeft: "-10px" }} alt="" />
                      <div className="position-absolute z-3 bg-light text-black p-2" style={{ marginLeft: "-10px", bottom: "-150px", height: "80px", width: "450px", opacity: "0.3" }}>
                        <p className="float-end">12 Videos</p>
                        <p>Playlist <br />3.5K views · 8 hour ago</p>
                      </div>
                    </div>
                    <div>
                      <p><b>code Master</b><br />
                        JavaScript Fundamentals: Variables and Data Types</p>
                    </div>
                    <div>
                      <div><img src={logos} alt="" /></div>
                    </div>
                    <div className="mt-3">
                      <p><b>React Patterns</b><br />757K Subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-7 left-side">
            {dummyData.map((item) => (

              <div className="row">
                <div className="col-12">
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <p>
                      <b>{item.title}</b>
                      <br />
                      {item.views} · {item.time}
                      <br />
                      <img src={item.image} style={{ width: "50px", height: "50px", borderRadius: "50px" }} className="me-2" alt="" />
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div >
  )
}

export default ChannelPlaylistVideos;