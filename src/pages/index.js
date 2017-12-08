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
        <div>
            <Link to="/article/">Article</Link>
        </div>
        <div>
            <Link to="/about-css-modules/">About CSS Modules - Imports from the .module.css file</Link>
        </div>
        <div>
            <Link to="/about-css-modules-glamor/">About CSS Modules - Glamor Version</Link>
            <p>Glamor allows you to put css code in the css attribute of each component</p>
        </div>
        <div>
            <Link to="/about-styled-components/">About CSS Modules - Styled Components</Link>
            <p>Creates new components from HTML primitives linked with styles </p>
        </div>
        <h3>Part 4</h3>
        <div>
            <Link to="/pandas/">Pandas</Link>
        </div>
        <div>
            <Link to="/my-files/">My Files GraphQL</Link>
        </div>
    </div>