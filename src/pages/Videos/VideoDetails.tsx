import ReactPlayer from "react-player";
import image from "../../components/layout/imges.webp";
import source from "../../components/video1662251933.mp4";
import {
  FaFolderPlus,
  FaThumbsDown,
  FaThumbsUp,
  FaUserPlus,
} from "react-icons/fa";

const VideoDetails = () => {
  return (
    <>
      <div className="video-main overflow-y-auto overflow-x-hidden h-100">
        <div className="row p-2 text-light m-2">
          <div className="col-12 col-xl-7 right-side">
            <div className="row">
              {/* video player */}

              <div className="col-12">
                <ReactPlayer
                  src={source}
                  controls={true}
                  width="100%"
                  height="360px"
                  playing={false}
                  loop={false}
                  muted={false}
                />
              </div>
              {/* video title */}
              <div className="col-12  my-2">
                <div className="p-3 d-inline float-start border rounded-2">
                  <div className="d-flex flex-wrap flex-sm-nowrap">
                    <div>
                      <h4 className="d-inline">Advanced React Patterns</h4>
                      <p>30,164 Views 18 hours ago</p>
                    </div>

                    <div className="w-80">
                      <button className="bottons-folder">
                        <span>
                          <FaFolderPlus /> Save
                        </span>
                      </button>
                      <button className="bottons-dislike">
                        <span>
                          <FaThumbsDown /> 20
                        </span>
                      </button>
                      <button className="bottons-like">
                        <span>
                          <FaThumbsUp /> 3050
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="d-flex w-100">
                    <div>
                      <img src={image} className="profile-icon" alt="" />
                      <p className="p-3">
                        <b>React Patterns</b>
                        <br />
                        757K Subscribers
                      </p>
                    </div>
                    <div>
                      <button className="subscribe-buttons subscribes">
                        <input
                          type="checkbox"
                          id="subscribes"
                          className="hiddens"
                        />
                        <span className="hiddens1">
                          <label htmlFor="subscribes">
                            <FaUserPlus />
                            Subscribe
                          </label>
                        </span>
                        <span className="hiddens2">
                          <label htmlFor="subscribes">
                            <FaUserPlus />
                            Subscribed
                          </label>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="w-100 p-3 border-top">
                    <p>
                      🚀 Dive into the world of React with our latest tutorial
                      series: "Advanced React Patterns"! 🛠️ Whether you're a
                      seasoned developer or just starting out, this series is
                      designed to elevate your React skills to the next level.
                    </p>
                  </div>
                </div>
              </div>
              {/* comments */}
              <div className="col-12">
                <div className="border rounded-2 p-3">
                  <div className="comments">
                    <h5>573 Comments</h5>

                    <div className="w-100 py-3">
                      <input
                        type="text"
                        className="w-100 border rounded-2 bg-transparent comment-box px-2 py-3 "
                        placeholder="Add a Comment"
                      />
                    </div>

                    <div className="w-100">
                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>

                      <div className="border-top p-3">
                        <div>
                          <img src={image} className="profile-icon" alt="" />
                        </div>
                        <div>
                          <p>
                            Sarah Johnson 17 hour ago <br />
                            @sarahjv <br />
                            This series is exactly what I've been looking for!
                            Excited to dive into these advanced React patterns.
                            Thanks for putting this together!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* this is right side code */}

          <div className="col-12 col-xl-5 left-side">
            <div className="row">
              <div className="col-12">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>
              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>

              <div className="col-12 ">
                <div>
                  <img src={image} alt="" />
                </div>
                <div>
                  <p>
                    <b>JavaScript Fundamentals: Variables and Data Types</b>
                    <br />
                    10.3k Views. 44 minutes ago
                    <br />
                    code Master
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
