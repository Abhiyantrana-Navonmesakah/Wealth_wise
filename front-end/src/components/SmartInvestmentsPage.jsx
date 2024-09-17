import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box, Container, Typography, Grid, Paper, CssBaseline,
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

const ProgressIndicator = ({ value }) => {
  const percentage = Math.min(value, 100);
  return (
    <Box sx={{ position: 'relative', width: '100%', height: 8, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          width: `${percentage}%`,
          height: '100%',
          bgcolor: 'primary.main',
          borderRadius: 4,
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </Box>
  );
};

const InvestmentCard = ({ title, icon, value, profit }) => {
  const profitPercentage = (parseFloat(profit) / parseFloat(value)) * 100;
  
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2, 
        bgcolor: 'background.paper',
        borderRadius: 2,
        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.05)' },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {icon}
          <Typography variant="subtitle1" sx={{ ml: 1 }}>{title}</Typography>
        </Box>
        <Typography variant="h6">₹{value}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ width: '70%' }}>
          <ProgressIndicator value={profitPercentage} />
        </Box>
        <Typography 
          variant="body2" 
          color={profit.startsWith('+') ? 'primary.main' : 'error.main'}
        >
          {profit} ({profitPercentage.toFixed(1)}%)
        </Typography>
      </Box>
    </Paper>
  );
};

const SmartInvestmentsPage = () => {
  const investmentData = [
    { title: "Mutual funds", icon: <AccountBalance color="primary" />, value: "52.5L", profit: "+12.3L" },
    { title: "Stocks", icon: <ShowChart color="primary" />, value: "15.9L", profit: "+5.2L" },
    { title: "Gold", icon: <CurrencyRupee color="primary" />, value: "8.2L", profit: "+1.5L" },
    { title: "Land", icon: <Landscape color="primary" />, value: "120L", profit: "+1.06L" },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="sm">
          <Box 
            sx={{ 
              mb: 4, 
              p: 3, 
              borderRadius: 3, 
              background: 'linear-gradient(45deg, #2E7D32 30%, #1565C0 90%)',
              boxShadow: '0 3px 5px 2px rgba(46, 125, 50, .3)',
            }}
          >
            <Typography variant="h5" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.7)' }}>Your Holdings</Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Typography variant="h3" component="span" sx={{ color: 'white', fontWeight: 'bold' }}>₹68.4 L</Typography>
              <Typography variant="h5" component="span" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>+20.06L</Typography>
            </Box>
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