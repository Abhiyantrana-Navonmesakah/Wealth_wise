import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box, Container, Typography, Grid, Paper, CssBaseline
} from '@mui/material';
import {
  ShowChart, AccountBalance, Landscape, CurrencyRupee
} from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4CAF50' },
    secondary: { main: '#2196F3' },
    background: { default: '#121212', paper: '#1E1E1E' },
  },
});

const InvestmentCard = ({ title, icon, value, profit }) => (
  <Paper 
    elevation={3} 
    sx={{ 
      p: 2, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      bgcolor: 'background.paper',
      borderRadius: 2,
      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)' },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {icon}
      <Typography variant="subtitle1" sx={{ ml: 1 }}>{title}</Typography>
    </Box>
    <Typography variant="h6">₹{value}</Typography>
  </Paper>
);

const SmartInvestmentsPage = () => {
  const investmentData = [
    { title: "Mutual funds", icon: <AccountBalance color="primary" />, value: "52.5L" },
    { title: "Stocks", icon: <ShowChart color="primary" />, value: "15.9L" },
    { title: "Gold", icon: <CurrencyRupee color="primary" />, value: "8.2L" },
    { title: "Land", icon: <Landscape color="primary" />, value: "120L" },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="sm">
          <Typography variant="h5" sx={{ mb: 1 }}>Your Holdings</Typography>
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h3" component="span">₹68.4 L</Typography>
            <Typography variant="h6" component="span" color="primary" sx={{ ml: 2 }}>+20.06L</Typography>
          </Box>
          <Grid container spacing={2}>
            {investmentData.map((investment, index) => (
              <Grid item xs={12} key={index}>
                <InvestmentCard {...investment} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SmartInvestmentsPage;