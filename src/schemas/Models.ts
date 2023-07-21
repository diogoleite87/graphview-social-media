export type GraphNode = {
    id: string
    name: string
    label: string
    color?: string
    image?: string
    properties?: { [key: string]: any }
}

export type GraphLink = {
    source: number
    target: number
    label: string
    color?: string
    properties?: { [key: string]: any }
}

export type GraphData = {
    nodes: GraphNode[]
    links: GraphLink[]
}