import { Outlet } from "react-router-dom"
import { ButtonGroup } from "../components/common/ButtonGroup"
import { useCheckAdmin } from "../hooks/useCheckAdmin";

export const DashBoardPage = () => {
    const { isAdmin, isLoading } = useCheckAdmin();

    if (isLoading) {
        return <div className="text-white text-center pt-20">Checking Authority...</div>;
    }

    if (isAdmin) {
        return (
            < div className="w-full flex flex-col items-center pt-6">
                {/* ส่วนบน: ButtonGroup */}
                <div className="mb-8 ps-8">
                    <ButtonGroup />
                </div>

                {/* ส่วนล่าง: player, track */}
                <div className="w-full max-w-5xl px-4">
                    <Outlet />
                </div>
            </div>
        )
    }
}
