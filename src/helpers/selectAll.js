export function selectAllMarkdownEntityValues(data) {
    return data.allMarkdownRemark.edges.map(x => x.node.frontmatter)
}