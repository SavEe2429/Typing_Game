import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import TypingBoards from './components/TypingBoard'
import { Game } from './pages/Game'
import { Ranking } from './pages/Ranking'
import { Profile } from './pages/Profile'
import { Home } from './pages/Home'


function App() {
  return (
    <Routes>

      {/* ใช้ mainlayout เป็น route หลัก */}
      <Route path='/' element={<MainLayout />}>

        <Route index element={<Home />} />
        <Route path='ranking' element={<Ranking />} />
        <Route path='game' element={<Game />} />
        <Route path='profile' element={<Profile />} />

      </Route>
    </Routes>

  )
}

export default App