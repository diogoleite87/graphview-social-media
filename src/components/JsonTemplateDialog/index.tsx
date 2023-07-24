import {
    Button,
    DialogContent,
    Divider,
    Grid,
    IconButton,
    Stack,
    Box,
    Dialog,
    DialogTitle,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { GraphData } from '../../schemas';
import TemplatePaper from '../TemplatePaper';
import Dataset from '../../data';

export interface IJsonTemapleDialogProps {
    state: boolean,
    setState(state: boolean): void,
    setDataGraph(state: GraphData): void
}

export default function JsonTemplateDialog({
    state,
    setState,
    setDataGraph
}: IJsonTemapleDialogProps) {

    return (
        <Dialog
            TransitionProps={{ unmountOnExit: true }}
            open={state}
            maxWidth='lg'
            fullWidth
        >
            <DialogTitle>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>Utilizar Template</Grid>
                    <Grid item>
                        <IconButton sx={{ size: 'small' }} onClick={() => setState(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {Dataset.map((data) => (
                        <TemplatePaper
                            key={data.id}
                            data={data}
                            setDataGraph={setDataGraph}
                            setState={setState}
                        />
                    ))}
                </Box>
            </DialogContent>

            <Divider />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                    <Button variant="contained" component="label" color="error" onClick={() => setState(false)} >fechar</Button>
                </Stack>
            </Box>
        </Dialog >
    )
}