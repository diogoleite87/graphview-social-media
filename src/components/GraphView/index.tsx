import { useControls } from "leva";
import { useState, useContext } from "react";
import { ForceGraph2D, ForceGraph3D } from "react-force-graph";
import { GraphData } from "../../schemas";
import { Box } from "@mui/material";
import Menu from "../Menu";
import FeedBackAlertContext from "../../hooks/useFeedBackAlert";
import FeedBackAlert from "../FeedBackAlert";

const graphConfig = {
    type: { value: '2D', options: ['3D', '2D'] },
    background: '#101020'
};

export default function GraphView() {

    const graphConfigState = useControls('Configurações Grafo', graphConfig)
    const { loadingError, loadingSuccess, loadingMsg, setLoadingError, setLoadingSuccess } = useContext(FeedBackAlertContext)
    const [graphData, setGraphData] = useState<GraphData>()

    return (
        <Box>
            {loadingError || loadingSuccess ? <FeedBackAlert type={loadingError ? 'error' : 'success'} message={loadingMsg} handleClose={loadingError ? setLoadingError : setLoadingSuccess} /> : <></>}
            {graphConfigState.type == '2D' ?
                <ForceGraph2D graphData={graphData} backgroundColor={graphConfigState.background} nodeAutoColorBy='label' linkAutoColorBy='label' /> :
                <ForceGraph3D graphData={graphData} backgroundColor={graphConfigState.background} nodeAutoColorBy='label' linkAutoColorBy='label' />}
            <Menu graphData={graphData} setGraphData={setGraphData} />
        </Box>
    )
}