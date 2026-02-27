import {Outlet } from 'react-router-dom';


export const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">

            {/* ส่วนเนื้อหา */}
            <main className='flex flex-grow bg-[#1A1A1C] justify-center'>
                {/* 3. ใส่ Outlet ไว้ตรงนี้! เปรียบเสมือน "พื้นที่ว่าง" ให้หน้าอื่นๆ มาเสียบ */}
                
                <Outlet />
            </main>

        </div>
    )
}

