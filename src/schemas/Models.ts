export type GraphNode = {
    id: string
    name: string
    label: string
    color?: string
    image?: string
    properties?: { [key: string]: any }
}

export type GraphLink = {
    source: string
    target: string
    label: string
    color?: string
    properties?: { [key: string]: any }
}

export type GraphData = {
    nodes: GraphNode[]
    links: GraphLink[]
}

export type GraphTemplate = {
    id: number,
    title: string,
    body: string,
    createdAt: string,
    credits: string,
    graphData: GraphData
}