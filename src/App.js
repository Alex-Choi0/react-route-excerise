import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import ComputerComponent from "./components/computer/computer.component"
import KeyboardComponent from "./components/keyboard/keyboard.component"
import MouseComponent from "./components/mouse/mouse.component"
import NavigationComponent from "./route/navigation/navigation.component"

// Home을 표시할 컴포넌트
const HomeComponent = () => {
  return <div>This is a HomePage</div>
}

// Fragment는 리엑트에서 html컴포넌트로 만들때 무시하는 컴포넌트 입니다.

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<NavigationComponent />}>
          <Route index={true} element={<HomeComponent />} />
          <Route path="computer" element={<ComputerComponent />} />
          <Route path="keyboard" element={<KeyboardComponent />} />
          <Route path="mouse" element={<MouseComponent />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
