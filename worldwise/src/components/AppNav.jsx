import {NavLink} from "react-router-dom"

import styles from "./AppNav.module.css"

function AppNav() {
    return (
        <nav className={styles.nav}> 
            <ul>
                <li>
                    <NavLink to ="cities">Cities</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <Navlink to ="countries">Countries</Navlink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNav