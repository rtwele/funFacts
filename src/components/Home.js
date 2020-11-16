import React from 'react'
import  {Link, withRouter } from 'react-router-dom'

const Home = () => {
return (
    <div className="container">
        <div className="heading-container">
        <h1>Fun Facts about Skateboarding</h1>
        <p>Click a button to find out more</p>
        </div>
        <div className="buttons">
            <Link to='/postOne'><button>Fact One</button></Link>
            <Link to='/postTwo'><button>Fact Two</button></Link>
            <Link to='/postThree'><button>Fact Three</button></Link>
        </div>
    </div>
)
}

export default withRouter(Home)