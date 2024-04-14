import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dishes from '../tabs/Dishes';
import Kitchen from '../tabs/kitchen';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id:` full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AdminPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Dishes" {...a11yProps(0)} />
          <Tab label="Kitchen" {...a11yProps(1)} />
          <Tab label="Most order dishes" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 64px)', // Subtract the height of the AppBar
          overflow: 'auto',
        }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Dishes />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Kitchen />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Most order dishes
        </TabPanel>
      </Box>
    </Box>
  );
}