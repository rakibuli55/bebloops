import React from 'react';
import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';
import { Outlet } from 'react-router-dom';
import AdsSidebar from '../shared/AdsSidebar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
         <div>
           <Sidebar />
         </div>
         <div className='app-component min-h-screen max-h-screen pl-[365px] custom-2xl:pl-[276px] custom-xl:pl-[276px] custom-lg:pl-[276px] pr-[345px] custom-2xl:pr-[242px] custom-xl:pr-[242px] custom-lg:pr-[242px] pt-[114px] custom-2xl:pt-[91px] custom-xl:pt-[91px] custom-lg:pt-[91px] max-md:pl-5 max-md:pr-5 max-md:pt-[70px] custom-xs:!px-4'>
          <Outlet />
         </div>
         <div className='max-md:hidden'>
          <AdsSidebar />
         </div>
      </div>
    </div>
  );
};

export default DashboardLayout;