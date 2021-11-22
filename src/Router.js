import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home"
import PagesRouter from "./Pages/router"
import NotFound from "./Pages/404"
// import FoundRouter from "./Pages/Foundations/router"

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/documentation" component={PagesRouter} />
				<Route path="/foundations" component={PagesRouter} />
				<Route path="/components" component={PagesRouter} />
				<Route exact path="*" component={NotFound} />
			</Switch>
		</Router>
	)
}

export default AppRouter
