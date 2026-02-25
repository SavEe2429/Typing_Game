import { Routes, Route, Link } from 'react-router-dom'

// สร้าง Component หน้าเว็บแบบง่ายๆ ไว้ในไฟล์เดียวกันก่อนเพื่อความเร็ว
const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold text-cyan-400">⌨️ Welcome to Keymash</h1>
    <p className="mt-4">หน้าสำหรับฝึกพิมพ์เร็ว (Coming Soon...)</p>
  </div>
)

const Leaderboard = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold text-yellow-400">🏆 Leaderboard</h1>
    <p className="mt-4">อันดับผู้เล่นที่เทพที่สุด</p>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* ส่วนของแถบเมนู (Navbar) */}
      <nav className="flex justify-center gap-6 p-6 bg-slate-800 shadow-lg">
        <Link to="/" className="hover:text-cyan-400 transition">หน้าแรก</Link>
        <Link to="/leaderboard" className="hover:text-yellow-400 transition">อันดับผู้นำ</Link>
      </nav>

      {/* ส่วนที่จะเปลี่ยนไปตาม URL */}
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App