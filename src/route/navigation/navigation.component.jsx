// src/route/navigation/navigation.component.jsx

import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to='/'>Home</Link>
        <Link to="/computer">Computer</Link>
        <Link to="/keyboard">Keyboard</Link>
        <Link to="/mouse">Mouse</Link>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationComponent;
