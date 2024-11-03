import React from "react";
import frame from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.png";
import pin from "../assets/pin.png";
import pin2 from "../assets/pin2.png";

const Home = () => {
  return (
    <div className="container mx-auto w-[95%] flex flex-row mt-5 mb-5 gap-5 max-md:flex-col">
      
      <div className="w-full p-4 flex-col gap-5">
        <div className="w-full gap-3 flex flex-col">
          <h2 className="text-2xl mb-4">Dashboard</h2>
          <div className="flex w-full gap-6 max-sm:flex-col">
            <div className="w-full bg-[#ffefe7] p-3 px-4 rounded-lg">
              <p className="font-semibold">Available Position</p>
              <h1 className="text-4xl font-semibold mt-1 mb-1">24</h1>
              <p className="text-[13px] text-red-500 ">4 Urgently needed</p>
            </div>
            <div className="w-full bg-[#c8f0fb] p-3 px-4 rounded-lg">
              <p className="font-semibold">Job Open</p>
              <h1 className="text-4xl font-semibold mt-1 mb-1">10</h1>
              <p className="text-[13px] text-red-500 ">4 Active hiring</p>
            </div>
            <div className="w-full bg-[#fdebf9] p-3 px-4 rounded-lg">
              <p className="font-semibold">New Employees</p>
              <h1 className="text-4xl font-semibold mt-1 mb-1">24</h1>
              <p className="text-[13px] text-red-500 ">4 Department</p>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 mt-4 mb-4 max-sm:flex-col">
          <div className="w-full flex items-center p-3 border border-gray-300 rounded-lg">
            <div>
              <p className="font-semibold">Total Employees</p>
              <h1 className="text-5xl font-semibold mt-2 mb-4 ">216</h1>
              <p className="text-gray-500 text-[11px]">120 Men</p>
              <p className="text-gray-500 text-[11px]">96 Women</p>
            </div>

            <div className="w-20">
              <img src={frame} alt="" />
            </div>
          </div>
          <div className="w-full flex items-center p-3 border border-gray-300 rounded-lg">
            <div>
              <p className="font-semibold">Total Request</p>
              <h1 className="text-5xl font-semibold mt-2 mb-4 ">16</h1>
              <p className="text-gray-500 text-[11px]">6 Men</p>
              <p className="text-gray-500 text-[11px]">10 Women</p>
            </div>

            <div className="w-20">
              <img src={frame2} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-300 rounded-lg">
          <div className=" w-full px-3 pt-2 flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Announcement</h2>
            <p className="text-[10px] text-gray-500w-fit p-2 border border-gray-200 rounded-lg">
              Today 13 Sep 2021 <span className="ml-1">˅</span>
            </p>
          </div>
          <div className="flex flex-col px-3 gap-2">
            <div className="bg-gray-50 p-2 flex justify-between items-center border border-gray-200 rounded-lg">
              <div>
                <p>Outing schedule for every department</p>
                <p className="text-[9px] text-gray-500">5 minutes ago</p>
              </div>
              <div className="w-[50px]">
                <img src={pin} alt="" />
              </div>
            </div>
            <div className="bg-gray-50 p-2 flex justify-between items-center border border-gray-200 rounded-lg">
              <div>
                <p>Meeting HR Department</p>
                <p className="text-[9px] text-gray-500">Yesterday, 12.30 PM</p>
              </div>
              <div className="w-[50px]">
                <img src={pin2} alt="" />
              </div>
            </div>
            <div className="bg-gray-50 p-2 flex justify-between items-center border border-gray-200 rounded-lg">
              <div>
                <p>IT Department need two more talents for UI/UX Designer position</p>
                <p className="text-[9px] text-gray-500">Yesterday, 09.15 AM</p>
              </div>
              <div className="w-[50px]">
                <img src={pin2} alt="" />
              </div>
            </div>
          </div>
          <div className="p-1 flex justify-center items-center text-red-500 font-semibold border border-gray-300">
            See All Announcement
          </div>
        </div>
      </div>
      <div className="w-full mt-[77px] gap-4">
        <div className="bg-[#131744] rounded-lg text-white mb-6">
          <h2 className="text-lg pl-6 pb-2 bg-[#1b204a] rounded-t-lg p-1">
            Recently Activity
          </h2>
          <div className="p-4 pl-6 pt-6">
            <p className="text-[10px] text-gray-400 pb-2">
              10.40 AM Fri 10 Sep 2021
            </p>
            <h2 className="text-lg pb-2">You Posted a New Job</h2>
            <p className="text-[12px] text-gray-400 pb-8">
              Kindly check the requirement and terms of work and make sure
              everythink is right.
            </p>

            <div className="flex justify-start items-center gap-6 mb-1">
              <p className="text-sm ">Today you makes 12 Activity</p>
              <button className="px-2 p-1 text-sm bg-red-500 text-white rounded-sm">
                See All Activity
              </button>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-300 rounded-lg">
          <div className=" w-full px-3 pt-2 flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Upcomming Schedule</h2>
            <p className="text-[10px] text-gray-500w-fit p-2 border border-gray-200 rounded-lg">
              Today 13 Sep 2021 <span className="ml-1">∨</span>
            </p>
          </div>
          <div className="flex flex-col px-3 gap-2">
            <p className="text-[12px] text-gray-400">Priority</p>
            <div className="bg-gray-50 p-2 flex justify-between items-center border border-gray-200 rounded-lg">
              <div>
                <p>Review candidates applications</p>
                <p className="text-[9px] text-gray-500">Today-11.30 AM</p>
              </div>
              <div className="w-[50px]">
                <img src={pin} alt="" />
              </div>
            </div>
            <p className="text-[12px] text-gray-400">Other</p>

            <div className="bg-gray-50 p-2 flex justify-between items-center border border-gray-200 rounded-lg">
              <div>
                <p>Interview with candidates</p>
                <p className="text-[9px] text-gray-500">Today-10.30 AM</p>
              </div>
              <div className="w-[50px]">
                <img src={pin2} alt="" />
              </div>
            </div>
            <div className="bg-gray-50 p-2 flex justify-between items-center border border-gray-200 rounded-lg">
              <div>
                <p>Short meeting with product designer from IT Department</p>
                <p className="text-[9px] text-gray-500">Today-09.15 AM</p>
              </div>
              <div className="w-[50px]">
                <img src={pin2} alt="" />
              </div>
            </div>
          </div>
          <div className="p-1 flex justify-center items-center text-red-500 font-semibold border border-gray-300">
            Create a New Schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
