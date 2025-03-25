// 'use client'
// import React, { useState } from 'react'

// import Sidebar from '@/components/user/UserSideBar'
// import Header from '@/components/user/Header/index'

// export default function DefaultLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   return (
//     <>
//       {/* <!-- ===== Page Wrapper Start ===== --> */}
//       <div className="flex">
//         {/* <!-- ===== Sidebar Start ===== --> */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//         {/* <!-- ===== Sidebar End ===== --> */}

//         {/* <!-- ===== Content Area Start ===== --> */}
//         <div className="relative flex flex-1 flex-col lg:ml-72.5">
//           {/* <!-- ===== Header Start ===== --> */}
//           <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           {/* <!-- ===== Header End ===== --> */}

//           {/* <!-- ===== Main Content Start ===== --> */}
//           <main>
//             <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-[#FFFFFF]">
//               {children}
//             </div>
//           </main>
//           {/* <!-- ===== Main Content End ===== --> */}
//         </div>
//         {/* <!-- ===== Content Area End ===== --> */}
//       </div>
//       {/* <!-- ===== Page Wrapper End ===== --> */}
//     </>
//   )
// }

'use client';
import React, { useState } from 'react';
import Footer from '../footer';
import Navigation from '../navigation';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Page Wrapper */}

      {/* Content Area */}
      <div className="">
        {/* Header */}
        <Navigation />
        {/* Main Content */}
        <main>
          <div className="">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
