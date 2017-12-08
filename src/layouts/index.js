import React from "react";
import Link from "gatsby-link"
import styled from "styled-components";

const ListElement = styled.li`
    display:inline-block;
    margin-right:1rem;
`

const ListLink = props => (
    <ListElement>
        <Link to={props.to}>
            {props.children}
        </Link>
    </ListElement>
)

export default ({ children, data }) => (
    //Notice that unlike most children props, the children prop passed to layout components is a function and needs to be executed
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>
                    {data.site.siteMetadata.title}
                </h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Blog</ListLink>
            </ul>
        </header>
        {children()}
    </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`