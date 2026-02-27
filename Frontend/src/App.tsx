import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { GamePage } from './pages/Game'
import { RankingPage } from './pages/Ranking'
import { ProfilePage } from './pages/Profile'
import { HomePage } from './pages/Home'
import { CustomPage } from './pages/Custom'


function App() {
  return (
    <Routes>

      {/* ใช้ mainlayout เป็น route หลัก */}
      <Route path='/' element={<MainLayout />}>

        <Route index element={<HomePage />} />
        <Route path='ranking' element={<RankingPage />} />
        <Route path='game' element={<GamePage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='custom' element={<CustomPage />} />

      </Route>
    </Routes>

  )
}

export default App