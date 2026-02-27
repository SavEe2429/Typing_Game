import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { GamePage } from './pages/Game'
import { RankingPage } from './pages/Ranking'
import { ProfilePage } from './pages/Profile'
import { HomePage } from './pages/Home'
import { CustomPage } from './pages/Custom'
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { ForgetPassPage } from './pages/ForgetPass'
import { AuthLayout } from './layouts/authLayout'


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

      {/* ถ้ามีหน้าไหนที่ไม่เอา Navbar/Footer (เช่นหน้า Login) ให้ไว้นอกกลุ่มนี้ */}
      <Route path='/auth' element={<AuthLayout />}>

        <Route index element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='forgetpass' element={<ForgetPassPage />} />

      </Route>
    </Routes>

  )
}

export default App