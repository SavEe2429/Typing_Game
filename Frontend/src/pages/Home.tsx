import { CustomMode } from "../components/common/Custom"
import { QuickPlayMode } from "../components/common/QuickPlay"

export const HomePage = () => {
    return (
        <div className="flex flex-col justify-center gap-10">
            <QuickPlayMode />
            <CustomMode/>
        </div>
    )
}