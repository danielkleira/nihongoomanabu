import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { PageStateContext } from '../../providers/pageStates';


const Home = () => {
    const { setLanguage, mode, setMode, language } = useContext(PageStateContext)

    const handleLanguageChange = (event: SelectChangeEvent<string>) => {
        setLanguage(event.target.value);
    };

    const handleModeChange = (event: SelectChangeEvent<string>) => {
        setMode(event.target.value);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Japanese Training
                </Typography>
                <Select
                    value={language}
                    label="Aphabet"
                    onChange={handleLanguageChange}
                    sx={{ marginLeft: 20, width: '180px' }}
                >
                    <MenuItem value="hiragana">Hiragana</MenuItem>
                    <MenuItem value="katakana">Katakana</MenuItem>
                </Select>
                <Select
                    value={mode}
                    label="Mode"
                    onChange={handleModeChange}
                    sx={{ marginLeft: 20, width: '180px' }}
                >
                    <MenuItem value="training">Training</MenuItem>
                    <MenuItem value="test">Test</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
};

export default Home;
