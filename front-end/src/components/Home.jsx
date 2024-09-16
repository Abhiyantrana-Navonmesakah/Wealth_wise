import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar, Toolbar, Typography, Container, Grid, Card, CardContent,
  Button, Box, CssBaseline, Avatar, List, ListItem, ListItemIcon, ListItemText,
  Paper, Divider
} from '@mui/material';
import {
  AccountBalance, TrendingUp, Receipt, Psychology, Notifications,
  Assessment, School, Person
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#2E7D32', // Green
      main: '#1565C0',
    },
    secondary: {
      main: '#1565C0', // Blue
    },
  },
});

const Feature = ({ Icon, title, description }) => (
  <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
    <Avatar sx={{ bgcolor: 'primary.main', alignSelf: 'center', width: 56, height: 56, mb: 2 }}>
      <Icon sx={{ fontSize: 32 }} />
    </Avatar>
    <Typography variant="h6" component="h3" gutterBottom align="center">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      {description}
    </Typography>
  </Paper>
);

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar >
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <main>
        <Box sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/api/placeholder/1600/900")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              WealthWise
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Your Personalized Financial Advisor & Planner
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" size="large" sx={{ mr: 2 }}>
                Get Started
              </Button>
              <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Feature 
                Icon={AccountBalance} 
                title="Personalized Financial Planning" 
                description="Tailored advice based on your individual financial goals and circumstances."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Feature 
                Icon={TrendingUp} 
                title="Investment Recommendations" 
                description="Up-to-date investment insights and suggestions using advanced RAG framework."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Feature 
                Icon={Receipt} 
                title="Expense Tracking and Analysis" 
                description="Detailed analysis and categorization of your expenses using LLM technology."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Feature 
                Icon={Psychology} 
                title="Interactive Financial Consultation" 
                description="Seamless user interaction managed through an agent-based architecture."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Feature 
                Icon={Notifications} 
                title="Real-time Alerts" 
                description="Immediate updates on financial events and market changes affecting your portfolio."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Feature 
                Icon={School} 
                title="Educational Resources" 
                description="Access to financial literacy materials and guides to enhance your knowledge."
              />
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              How WealthWise Works
            </Typography>
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Person color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Personalized Profile" 
                    secondary="Create your financial profile and set your goals."
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemIcon>
                    <Psychology color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="AI-Powered Analysis" 
                    secondary="Our LLM analyzes your financial data and market trends."
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemIcon>
                    <TrendingUp color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Tailored Recommendations" 
                    secondary="Receive personalized financial advice and investment suggestions."
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemIcon>
                    <Assessment color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Continuous Monitoring" 
                    secondary="Get real-time updates and portfolio performance reviews."
                  />
                </ListItem>
              </List>
            </Paper>
          </Container>
        </Box>
      </main>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            © 2024 WealthWise. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
            Disclaimer: WealthWise provides general advice. Always consult with a qualified financial advisor for personalized recommendations.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;