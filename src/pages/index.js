import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Energy } from '../components/dashboard/energy';
import { DailyCrimeRate } from '../components/dashboard/crime-rate';
import { UnemploymentRate } from '../components/dashboard/unemployment-rate';
import { GDPRate } from '../components/dashboard/city-gdp';
import { HealthWatch } from '../components/dashboard/health-watch';
import { DashboardLayout } from '../components/dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Energy />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <DailyCrimeRate />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <UnemploymentRate />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <GDPRate />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <HealthWatch />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
