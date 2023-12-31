import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSidenav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
          <Header></Header>,
          <BreakingNews></BreakingNews>,
          <Navbar></Navbar>,
          <div className="grid md: grid-cols-4 gap-6">
              <div className="border">
                <LeftSideNav></LeftSideNav>
              </div>
              <div className="md:col-span-2 border">
                <h2 className="text-3xl">News Coming Soon.... </h2>
              </div>
              <div className="border">
                <RightSideNav></RightSideNav>
              </div>
          </div> 
        </div>
    );
};

export default Home;