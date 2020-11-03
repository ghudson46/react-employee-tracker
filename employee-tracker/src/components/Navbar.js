import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub)

function Navbar() {
    return (
    <>
        <nav className="navbar navbar-dark bg-primary justify-content-between">
            <a className="navbar-brand" href='/'>Employee Directory</a>
            <a className="nav-link active" href='https://www.github.com/ghudson46/react-employee-tracker'>
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color:'white' }}/>
            </a>
        </nav>
    </>
    )
}

export default Navbar