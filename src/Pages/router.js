import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import { documentData, foundationData, componentData } from "../Utils/Data"
import Documentation from "./Documentation/index"
import Foundations from "./Foundations/index"
import Components from "./Components/index"



const PagesRouter = () => {
    const location = useLocation()
    let data = []
    
    let page = Documentation
    location.pathname.includes('documentation') && ((data = documentData) && (page = Documentation))
    location.pathname.includes('foundations') && ((data = foundationData) && (page = Foundations) )
    location.pathname.includes('components') && ((data = componentData) && (page = Components))

    return (
        <Switch>
            {data?.map((base, index) => {
                return (

                    <Route path={base.link} component={page} key={index} />
                )
            })}
        </Switch>
    )

}


export default PagesRouter
