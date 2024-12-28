import { MenuItem, TextField, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ComputerIcon from '@mui/icons-material/Computer';
import { useColorScheme } from '@mui/material/styles';

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  return (
    <TextField
      label="Theme"
      select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as 'light' | 'dark' | 'system')
      }
    >
      <MenuItem value="system">
        <Tooltip title="System">
          <ComputerIcon />
        </Tooltip>
      </MenuItem>
      <MenuItem value="light">
        <Tooltip title="Light">
          <LightModeIcon />
        </Tooltip>
      </MenuItem>
      <MenuItem value="dark">
        <Tooltip title="Dark">
          <DarkModeIcon />
        </Tooltip>
      </MenuItem>
    </TextField>
  );
}

export default ModeSwitcher;
