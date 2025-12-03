import Navbar from "#components/Navbar"
import Welcome from "#components/Welcome"
import Dock from "#components/Dock"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable" 
import Terminal from "#windows/Terminal"
import Safari from "#windows/Safari"
import ResumeWindow from "#windows/Resume"
import FinderWindow from "#windows/Finder"
import ContactWindow from "#windows/Contact"
gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <ResumeWindow/>
      <FinderWindow/>
      <ContactWindow/>
    </main>
  )

}

export default App