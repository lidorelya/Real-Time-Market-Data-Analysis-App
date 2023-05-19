import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        //backgroundColor: theme.palette.background.paper,
        backgroundColor: 'rgb(255, 255, 255)',
        //backgroundColor: theme.backgroundColor,
        //padding: theme.spacing(1,1,1,1),
        padding: {spacing: [1,1,1,1]},
        fixed: true,
    },
    icon: {
        marginRight: '10px',
        marginTop: '-13px',
    },
    BadgeIcon: {
        /* marginLeft: '1200px', */
        marginTop: '-13px',
        color: "secondary",
    },
    card: {
        //backgroundColor: theme.backgroundColor,
        backgroundColor: 'rgb(35, 36, 36)',
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
    },
    footer: {
        //backgroundColor: theme.palette.background.paper,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    toolbar: {
        minHeight: 40
      },
    divider: {
        backgroundColor: 'rgb(99, 107, 107)',
        light: true,
        height: '3px'
    },
    tabs: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
        indicatorColor: '#3f51b5',
        float: 'left',
    },
    chartContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        //backgroundColor: theme.backgroundColor,
        //padding: theme.spacing(1,1,1,1),
        padding: {spacing: [1,1,1,1]},
        fixed: true,
    },
    cardChart: {
        backgroundColor: 'rgb(255, 255, 255)',
        display: 'flex',
        flexDirection: 'column',
        width: '900px',
        height: '380px',
        marginTop: '5px',
    },
    cardChartRow: {
        backgroundColor: 'rgb(255, 255, 255)',
        display: 'flex',
        flexDirection: 'row',
        width: '900px',
        height: '380px',
        marginTop: '5px',
    },
    cardChartDash: {
        display: 'flex',
        flexDirection: 'column',
        width: '900px',
        height: '600px',
        marginTop: '10px',
    },
  }));