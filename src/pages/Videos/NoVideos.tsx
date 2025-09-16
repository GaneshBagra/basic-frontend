import logos from "../../components/HeadSection/logo.png"

const NoVideos = () => {
    return (
        <div className="bg-dark w-100 h-100">
            <div className="d-flex text-center justify-content-center align-items-center text-light h-100">
                <div className="row align items-center">
                    <div className="col-12">
                        <img className="position-relative" src={logos} alt="" />
                    </div>
                    <div className="col-12">
                        <h5>No Video Available</h5>
                    </div>
                    <div className="col-12">
                        <p>There are no videos here  available. Please try to search some thing else.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NoVideos