import React from "react"
import { NavBar } from "./navbar/NavBar"
import { Route } from "react-router-dom"

export const Flowers = () => (
  <>
    <div className="flowers">
      <h1>Flowers</h1>
      <Route render={(props) => <NavBar {...props} />} />
    </div>
  </>
)
