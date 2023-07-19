export type GraphNode = {
    id: string
    name: string
    label: string
    image?: string
    properties?: { [key: string]: any }
}

export type GraphLink = {
    source: number
    target: number
    label: string
    properties?: { [key: string]: any }
}

export type GraphData = {
    nodes: GraphNode[]
    links: GraphLink[]
}