import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Paper, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { GraphData, GraphTemplate } from "../../schemas"

export interface ITemplateCard {
    data: GraphTemplate,
    setDataGraph(state: GraphData): void,
    setState(state: boolean): void
}

export default function TemplatePaper({ data, setDataGraph, setState }: ITemplateCard) {

    const handleSubmit = () => {
        setState(false)
        setDataGraph(data.graphData)
    }

    return (
        <Paper elevation={1} sx={{ p: 1 }}>

            <Box sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }}>
                <Typography variant="h6" >{data.title}</Typography>
                <Typography variant="subtitle1" >Data: {data.createdAt}</Typography>
                <Typography variant="subtitle1" >Créditos: {data.credits}</Typography>
                <Typography variant="subtitle1" >Número de Nós: {data.graphData.nodes.length}</Typography>
                <Typography variant="subtitle1" >Número de Arestas: {data.graphData.links.length}</Typography>
                <Button size="small" sx={{ mt: 1 }} variant="contained" component="label" color="primary" onClick={handleSubmit} endIcon={<UploadFileIcon />} >Povoar</Button>
            </Box>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Informações do Grafo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {data.body}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}