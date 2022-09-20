import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import InfoPage from "./pages/InfoPage"
import NotFound from "./pages/NotFound"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/javascript" element={<InfoPage theme={"javascript"}/>} />
				<Route path="/react" element={<InfoPage theme={"react"}/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
