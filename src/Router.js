
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/404"

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route exact path="*" element={<NotFound/>} />
			</Routes>
		</Router>
	)
}

export default AppRouter
