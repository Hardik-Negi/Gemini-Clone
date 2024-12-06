import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
   const [extend,setExtend]=useState(false);
  return (
    <div className="min-h-[100vh] flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px] ">
      <div>
        <img onClick={()=>setExtend(!extend)}
          className="w-[20px] block ml-[10px] cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div className="mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-[grey] cursor-pointer ">
          <img className="w-[20px]" src={assets.plus_icon} alt="" />
          {extend ? <p>New Chat</p>:null}
        </div>
        {extend ? 
        <div className="flex flex-col ">
          <p className="mt-[30px] mb-[20px]">Recent</p>
          <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img className="w-[20px]" src={assets.message_icon} alt="" />
            <p>What is React ...</p>
          </div>
        </div> : null }
      </div>

      <div className="flex flex-col gap-[10px] ">
        <div className="pr-[10px] flex gap-[10px] cursor-pointer hover:bg-[#e2e6eb] ">
          <img className="w-[25px]" src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null }
        </div>
        <div className="pr-[10px] flex  gap-[10px] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[25px]" src={assets.history_icon} alt="" />
         {extend ? <p>Activity</p> : null }
        </div>
        <div className="pr-[10px] flex  gap-[10px] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[25px]" src={assets.setting_icon} alt="" />
         {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
