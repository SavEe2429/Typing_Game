import { Routes, Route, Link } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import TypingBoards from './components/TypingBoard'


function App() {
  return (
    <>
      {/* <MainLayout/> */}
      <TypingBoards/>
    </>
  )
}

export default App