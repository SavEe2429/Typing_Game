import { useEdit } from "../../hooks/useEdit";

// ✅ 1. Interface สำหรับโครงสร้าง Modal พื้นฐาน
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop: พื้นหลังมืดๆ กดแล้วปิดได้ */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-[#1F2937] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl transform transition-all">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-white">{title}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

// ✅ 2. Interface ใหม่สำหรับ ModalEdit (ไม่มี title และ children เพราะเราใส่ข้างในเอง)
interface ModalEditProps {
    user: any;
    isOpen: boolean;
    onClose: () => void;
    onRefresh: () => void;
}


export const ModalEdit = ({ user, isOpen, onClose, onRefresh }: ModalEditProps) => {

    const { onSubmit, handleDelete, errors, isSubmitting, register, handleSubmit } = useEdit(user, onClose, onRefresh);

    return (
        <div className="...">
            {/* ✅ Modal Form */}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title={"Edit Player"}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            {...register("email")}
                            readOnly
                            className={`w-full bg-[#111827] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500`}
                        />
                        {errors.email && <span className="text-red-500 text-l ml-2 mt-2">{errors.email.message}</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
                        <input
                            {...register("username")}
                            className={`w-full bg-[#111827] border ${errors.username ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500`}
                        />
                        {errors.username && <span className="text-red-500 text-l ml-2 mt-2">{errors.username.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input
                            {...register("password")}
                            className={`w-full bg-[#111827] border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500`}
                        />{errors.password && <span className="text-red-500 text-l ml-2 mt-2">{errors.password.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">ConfirmPassword</label>
                        <input
                            {...register("confirmPassword")}
                            className={`w-full bg-[#111827] border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500`}
                        />{errors.confirmPassword && <span className="text-red-500 text-l ml-2 mt-2">{errors.confirmPassword.message}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                        <select
                            {...register("role")}
                            className="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-2 text-white outline-none"
                        >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                    <div className="mt-8 space-y-3">
                        {/* แถวที่ 1: ยืนยัน และ ยกเลิก */}
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50"
                            >
                                {isSubmitting ? "Saving..." : (user ? "Update" : "Create")}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-4 py-2 bg-black-800 rounded-lg border border-gray-700 text-white hover:bg-gray-100 hover:text-black transition-colors"
                            >
                                Cancel
                            </button>
                        </div>

                        {/* แถวที่ 2: ปุ่มลบ (แสดงเฉพาะกรณีที่เป็นการ Edit) */}
                        {user && (
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="w-full bg-red-500 py-2 text-white-500 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-medium border border-red-500/20"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </form>
            </Modal>
        </div>
    );
};