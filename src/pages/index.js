import React from "react"
import Link from "gatsby-link"

export default () =>
    <div style={{ color: `tomato` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://lh3.googleusercontent.com/shH5ALdqmZysSU2F5SF52674W7NFP1xtLBZMuzUR5u6Uotbgql3ATFFFhtkJjBCm4R3i=w300" alt="" />
        <br />
        <div>
            <Link to="/page-2/">Link</Link>
        </div>
        <div>
            <Link to="/counter/">Counter</Link>
        </div>
    </div>