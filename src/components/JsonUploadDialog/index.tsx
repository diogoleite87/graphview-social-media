import { useState, useContext } from 'react';
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
    Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import BackupIcon from '@mui/icons-material/Backup';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import LoadingBackDrop from '../LoadingBackDrop';
import LoadingButton from '@mui/lab/LoadingButton';
import { GraphData } from '../../schemas';
import FeedBackAlertContext from '../../hooks/useFeedBackAlert';
import { ForceGraph2D } from 'react-force-graph';

export interface IJsonUploadDialogProps {
    state: boolean,
    setState(state: boolean): void,
    setDataGraph(state: GraphData): void
}

export default function JsonUploadDialog({
    state,
    setState,
    setDataGraph
}: IJsonUploadDialogProps) {

    const [selectedData, setSelectedData] = useState<GraphData>({
        nodes: [],
        links: []
    });
    const [selectDataName, setSelectDataName] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const { setLoadingSuccess, setLoadingMsg } = useContext(FeedBackAlertContext)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectDataName(file.name);

            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");

            reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
                if (readerEvent.target?.result) {
                    const jsonData = JSON.parse(readerEvent.target.result.toString());
                    setSelectedData(jsonData);
                }
            };
        }
    };

    const handleSubmit = () => {
        setLoading(true);

        setDataGraph(selectedData)
        setLoadingMsg('Arquivo Importado com Sucesso!')
        setLoadingSuccess(true)
        setState(false)
        setLoading(false);
    };

    return (
        <Dialog
            TransitionProps={{ unmountOnExit: true }}
            open={state}
            fullWidth
        >
            {loading ? <LoadingBackDrop /> : <></>}
            <DialogTitle>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>Input JSON</Grid>
                    <Grid item>
                        <IconButton sx={{ size: 'small' }} onClick={() => setState(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <Divider />
            <DialogContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <LoadingButton
                                component="label"
                                variant="outlined"
                                size='small'
                                endIcon={<FileOpenIcon />}
                                sx={{ marginRight: "1rem" }}
                            >
                                Upload JSON
                                <input type="file" accept=".json" hidden onChange={handleFileChange} />
                            </LoadingButton>
                        </Grid>
                        <Grid item xs>
                            <Typography>Arquivo selecionado: {selectDataName ? selectDataName : '<nenhum>'}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            {selectedData.nodes.length > 0 || selectedData.links.length > 0 ?
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Divider />
                    <ForceGraph2D graphData={selectedData} width={500} height={250} nodeAutoColorBy='label' linkAutoColorBy='label' />
                </Box> :
                <></>
            }

            <Divider />
            <Box sx={{ width: "100%" }}>
                <Stack spacing={2} sx={{ alignItems: "center", justifyContent: 'space-between', margin: '2vh' }} direction="row">
                    <Button variant="contained" component="label" color="error" onClick={() => setState(false)} >fechar</Button>
                    <LoadingButton
                        loading={loading}
                        onClick={handleSubmit}
                        variant="contained"
                        color="success"
                        disabled={!selectedData ? true : false}
                        endIcon={<BackupIcon />}
                    >
                        Povoar
                    </LoadingButton>
                </Stack>
            </Box>
        </Dialog >
    )
}