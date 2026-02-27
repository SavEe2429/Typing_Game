import { CustomMode, QuickPlayMode } from "../components/common/GameMode"


export const HomePage = () => {
    return (
        <div className="flex flex-col justify-center gap-10">
            <QuickPlayMode />
            <CustomMode/>
        </div>
    )
}