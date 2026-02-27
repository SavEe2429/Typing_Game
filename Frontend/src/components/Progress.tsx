export const ProgressBar = ({
    progress }: {
        progress: number;
    }) => {

    return (
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
            <div className="w-full max-w-4xl">
                {/* พื้นหลังของ Progress Bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    {/* แถบสีขาวที่จะขยับตาม progress */}
                    <div
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );

}

export default ProgressBar;