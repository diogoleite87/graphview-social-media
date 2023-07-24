import { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';
import JsonUploadDialog from '../JsonUploadDialog';
import { GraphData } from '../../schemas';
import JsonTemplateDialog from '../JsonTemplateDialog';

interface Action {
    icon: JSX.Element;
    name: string;
    onClick: () => void;
    isActive?: boolean;
}

interface IMenuProps {
    graphData?: GraphData
    setGraphData(state: GraphData): void,
}

export default function Menu({
    setGraphData
}: IMenuProps) {

    const [openJsonUploadDialog, setOpenJsonUploadDialog] = useState<boolean>(false)
    const [openJsonTemplateDialog, setOpenJsonTemplateDialog] = useState<boolean>(false)

    const handleInputJSON = () => {
        setOpenJsonUploadDialog(true)
    }

    const handleJsonTemplate = () => {
        setOpenJsonTemplateDialog(true)
    }

    const handleCleanData = () => {
        setGraphData({ nodes: [], links: [] })
    }

    const handleGitHubProject = () => {
        window.open("https://github.com/diogoleite87/graphview-social-media", "_blank");
    };

    const actions: Action[] = [
        { icon: <FolderIcon />, name: 'Utilizar Templates', onClick: handleJsonTemplate },
        { icon: <FileOpenIcon />, name: 'Input JSON', onClick: handleInputJSON },
        { icon: <DeleteIcon />, name: 'Limpar Dados', onClick: handleCleanData },
        { icon: <GitHubIcon />, name: 'GitHub Projeto', onClick: handleGitHubProject },
    ];

    return (
        <>
            <JsonUploadDialog state={openJsonUploadDialog} setState={setOpenJsonUploadDialog} setDataGraph={setGraphData} />
            <JsonTemplateDialog state={openJsonTemplateDialog} setState={setOpenJsonTemplateDialog} setDataGraph={setGraphData} />
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="Opções Personalizadas"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.onClick}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </>
    );
}