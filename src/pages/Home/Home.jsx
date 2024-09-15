import React from "react";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h2 className="text-3xl font-poppins">This is Home page</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2">
            <h2 className="text-4xl">News coming soon</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
