import {Outlet } from 'react-router-dom';
import { Footer } from './Footer'
import { Navbar } from './Navbar'


export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* ส่วนหัว */}
            <Navbar/>

            {/* ส่วนเนื้อหา */}
            <main className='flex-grow bg-[#1A1A1C]'>
                {/* 3. ใส่ Outlet ไว้ตรงนี้! เปรียบเสมือน "พื้นที่ว่าง" ให้หน้าอื่นๆ มาเสียบ */}
                <Outlet />
            </main>

            {/* ส่วนท้าย */}
            <Footer/>
        </div>
    )
}

