import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.css"


const Nav = ( {links} ) => {
    return (
        <nav>
            <ul style={{ display: "flex", flex: 1, margin: "auto"}}>
                {links.map(link => (
                    <li
                        key={link.title}
                        style={{
                            listStyleType: `none`,
                            padding: `1rem`,
                            margin: "auto"
                        }}
                    >
                        <Link to={link.url} className={styles.linkHover}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav