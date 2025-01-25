import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import Item from '@mui/material/Grid';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// src/components/Home/Home.js

const NAVIGATION = [
  {
    segment: 'About me',
    title: 'About me ',
    icon: <DashboardIcon />,
  },
];

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function PageToolbar() {
  return (
    <PageContainerToolbar>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<DownloadIcon fontSize="inherit" />}
        >
          Download
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="neutral"
          startIcon={<PrintIcon fontSize="inherit" />}
        >
          Print
        </Button>
      </Stack>
    </PageContainerToolbar>
  );
}

export default function Home(props) {
  const { window } = props;
  const router = useDemoRouter('/orders');
  const theme = useTheme();
  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    // <AppProvider
    //   navigation={NAVIGATION}
    //   router={router}
    //   theme={theme}
    //   window={demoWindow}
    //   branding={{
    //     title: 'ACME Inc.',
    //   }}
    // >
    //   <Paper sx={{ p: 2, width: '100%' }}>
    //     <PageContainer
    //       slots={{
    //         toolbar: PageToolbar,
    //       }}
    //     >
    //       <Grid container spacing={1}>
    //         <Grid size={5} />
    //         <Grid size={12}>
    //           <Skeleton height={14} />
    //         </Grid>
    //         <Grid size={12}>
    //           <Skeleton height={14} />
    //         </Grid>
    //         <Grid size={4}>
    //           <Skeleton height={100} />
    //         </Grid>
    //         <Grid size={8}>
    //           <Skeleton height={100} />
    //         </Grid>
    //         <Grid size={4}>
    //           <Skeleton height={100} />
    //         </Grid>
    //         <Grid size={8}>
    //           <Skeleton height={100} />
    //         </Grid>
    //         <Grid size={4}>
    //           <Skeleton height={100} />
    //         </Grid>
    //         <Grid size={8}>
    //           <Skeleton height={100} />
    //         </Grid>
    //       </Grid>
    //     </PageContainer>
    //   </Paper>
    // </AppProvider>
  //   <React.Fragment>
  //   <CssBaseline />
  //   <Container maxWidth="sm">
  //     <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
  //   </Container>
  // </React.Fragment>

  <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
  );
}