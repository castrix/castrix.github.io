// import './App.css'
import { Command } from './components/Command'
import { Nav } from './components/Nav'
import { IFParticles } from './components/Particles'
import { ToastContainer, toast } from 'react-toastify';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App w-screen overflow-hidden">
      <IFParticles />
      <Nav />
      <Welcome />
      <Command />
      <ToastContainer position='bottom-center' theme='dark' />
    </div>
  )
}

export default App
