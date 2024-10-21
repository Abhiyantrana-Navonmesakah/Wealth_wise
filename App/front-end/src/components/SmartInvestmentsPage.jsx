import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box, Container, Typography, Grid, Paper, CssBaseline,
} from '@mui/material';
import {
  ShowChart, AccountBalance, Landscape, CurrencyRupee, TrendingUp
} from '@mui/icons-material';
// super ra bittu
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4CAF50' },
    secondary: { main: '#2196F3' },
    background: { default: '#121212', paper: '#1E1E1E' },
    profit: { main: '#00E676' },
    marketAvg: { main: '#FFA726' },
  },
});

const InvestmentCard = ({ title, icon, value, profit, avgMarketProfit }) => {
  const profitColor = parseFloat(profit) >= parseFloat(avgMarketProfit) ? 'profit.main' : 'error.main';
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUp sx={{ color: 'marketAvg.main', mr: 1, fontSize: 20 }} />
          <Typography variant="body2" color="marketAvg.main">
            Avg  : {avgMarketProfit}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          sx={{ 
            color: profitColor,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ShowChart sx={{ mr: 0.5, fontSize: 20 }} />
          {profit}({profitPercentage.toFixed(1)}%)
        </Typography>
      </Box>
    </Paper>
  );
};

const SmartInvestmentsPage = () => {
  const investmentData = [
    { title: "Mutual funds", icon: <AccountBalance color="primary" />, value: "52.5L", profit: "+23.4%", avgMarketProfit: "+15.2%" },
    { title: "Stocks", icon: <ShowChart color="primary" />, value: "15.9L", profit: "+32.7%", avgMarketProfit: "+18.5%" },
    { title: "Gold", icon: <CurrencyRupee color="primary" />, value: "8.2L", profit: "+18.3%", avgMarketProfit: "+22.1%" },
    { title: "Land", icon: <Landscape color="primary" />, value: "120L", profit: "+0.88%", avgMarketProfit: "+5.2%" },
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
            <Typography variant="h6" sx={{ mb: 1, mr:"370px", color: 'rgba(255, 255, 255, 0.7)' }}>Your Holdings</Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <Typography variant="h3" component="span" sx={{ color: 'white', fontWeight: 'bold' }}>₹196.6 L</Typography>
              <Typography variant="h5" component="span" sx={{ color: '#00E676', fontWeight: 'bold' }}>+12.7%</Typography>
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
