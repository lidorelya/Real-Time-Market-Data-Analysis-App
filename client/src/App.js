import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Badge, Box, CardMedia, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Card, Grid } from "@mui/joy";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Provider, useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { v4 as uuidv4 } from 'uuid';

import { useStyles } from './useStyles';
import store  from "./store";
import DataFetch from "./store/DataFetch";
import { Navigation } from './components/Navigation';
import { Equity } from "./components/Equity";
import { Derivative } from './components/Derivative';
import { IndexTable } from './components/IndexTable';
import LineChart from './charts/lineChart';
import CandlestickChart from './charts/candlestickChart';

import './App.css';
import './styles.css';
import './resizable.css';

//import styled from 'styled-components';
// number of cards in the page
//const cards = [1,2,3,4,5,6,7,8]
//const cards = [1]

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {

  const [, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const elementClicked = useSelector((state) => state['elementClicked'])
  const elementClickedNew = useSelector((state) => state['elementClickedNew'])
  
  // get the new 'windowWidth' for every resize of the window
  useEffect(() => {
      function handleResize() {
          setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
  })

  const onClick = event => {
    dispatch({ type: 'elementClicked' , data: !elementClicked})
  }

  const onClickNew = (eventId) => {
    dispatch({ type: 'elementClickedNew' , data: eventId})
    onClick()
  }

  function addNewComponentInitial(Component, keys) {
    const id = uuidv4()
    const componentId = uuidv4()
    let newCard = {}
    if (keys === undefined){ // graph
      newCard = {
        id: id,
        componentId: componentId,
        component: <Component id={componentId} />,
      };
    } else { // table
      newCard = {
        id: id,
        componentId: componentId,
        component: <Component id={componentId} keys={keys} />,
      };
    }
    return newCard;
  }

  // to create array with n elements that randomly selected from the list of keys
  function getRandomElements(array, n) {
    const shuffledArray = array.slice(); // Create a copy of the original array
    let selectedElements = [];
  
    for (let i = shuffledArray.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const randomElement = shuffledArray[randomIndex];
  
      // Swap the randomly selected element with the current element
      shuffledArray[randomIndex] = shuffledArray[i];
      shuffledArray[i] = randomElement;
  
      // Add the randomly selected element to the new array
      selectedElements.push(randomElement);
  
      // Stop when the desired number of elements is reached
      if (selectedElements.length === n) {
        break;
      }
    }
  
    return selectedElements;
  }

  // for the first time using, choose some keys (secutity id) to display in the tables 
  let eq_list_temp = [1140102, 1283845, 1283498, 4560082, 1159110, 1159094, 1158955, 1139195, 1105907, 1143718, 1143700, 456012, 2590248, 1130699, 1119478, 1101534, 1100007, 1084128, 1083484, 230011, 273011, 1283282, 1283274, 1140094, 1283092, 1283100, 4040028, 1282474, 1282482, 1282490, 1282508, 1282516, 1282524, 1282532, 1282540, 1282722, 1282730, 1282714, 1282896, 1282904, 1282912, 1282920, 1282938, 1282946, 1282953, 1282961, 1282979, 1282987, 1282995, 1282854, 1282862, 1282870, 1282888, 1282441, 1282458, 1282466, 126011, 1282219, 1283035, 1282227, 1282201, 1282136, 1281559, 1281542, 1281526, 1282045, 1281591, 281014, 323014, 390013, 475020, 576017, 585018, 593038, 604611, 629014, 232017, 662577, 691212, 695437, 746016, 767012, 777037, 1081124, 1240258, 1280825, 1280833, 1280841, 1280882, 1281195, 1281203, 1281856, 1281864, 1281211, 1281229, 1281237, 1280338, 1280346, 1280353, 1280361, 1280379, 1280387, 1280395, 1280403, 1280411, 1280429, 1280437, 1280445, 1280452, 1280460, 1280478, 1280486, 1280494, 1280502, 1280510, 1280528, 1280536, 1280544, 1280551, 1280569, 1280577, 1279579, 1279587, 1279595, 1279603, 1279611, 1279629, 1279637, 1279645, 1279652, 1279660, 1279678, 1279686, 1279694, 1279702, 1279710, 1279728, 1279736, 1279744, 1279751, 1279769, 1279777, 1279785, 1279793, 1279801, 1279819, 1278811, 1278829, 1278837, 1278845, 1278852, 1278860, 1278878, 1278886, 1278894, 1278902, 1278910, 1278928, 1278936, 1278944, 1278951, 1278969, 1278977, 1278985, 1278993, 1279009, 1279017, 1279025, 1279033, 1279041, 1279058, 1278050, 1278068, 1278076, 1278084, 1278092, 1278100, 1278118, 1278126, 1278134, 1278142, 1278159, 1278167, 1278175, 1278183, 1278191, 1278209, 1278217, 1278225, 1278233, 1278258, 1278266, 1278274, 1278282, 1278290, 1277292, 1277300, 1277318, 1277326, 1277334, 1277342, 1277359, 1277367, 1277375, 1277383, 1277391, 1277409, 1277417, 1277425, 1277433, 1277441, 1277458, 1277466, 1277474, 1277482, 1277490, 1277508, 1277516, 1277524, 1277532, 1276534, 1276542, 1276559, 1276567, 1276575, 1276583, 1276591, 1276609, 1276617, 1276625, 1276633, 1276641, 1276658, 1276666]
  let eq_list = eq_list_temp.map(number => {
    const paddedNumber = String(number).padStart(8, '0');
    return paddedNumber;
  });

  let ind_list_temp = [598, 1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 18, 19, 20, 21, 22, 28, 32, 33, 44, 51, 53, 54, 55, 56, 57, 168, 184, 185, 187, 188, 330, 800, 14, 15, 16, 17, 23, 24, 25, 26, 27, 29, 30, 31, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 52, 601, 602, 604, 605, 637, 646, 658, 690, 700, 701, 702, 703, 704, 727, 728, 729, 730, 740]
  let ind_list = ind_list_temp.map(number => {
    const paddedNumber = String(number).padStart(3, '0');
    return paddedNumber;
  });

  let deriv_list_temp = [84059567, 84086792, 84087477, 84059765, 84060441, 84086784, 84087469, 84059757, 84060433, 84086776, 84087451, 84059740, 84060425, 84086768, 84087444, 84059732, 84060417, 84086750, 84087436, 84059724, 84060409, 84086743, 84087428, 84059716, 84060391, 84086735, 84087410, 84059708, 84060383, 84086727, 84087402, 84059690, 84060375, 84086719, 84087394, 84059682, 84060367, 84086701, 84087386, 84059674, 84060359, 84086693, 84087378, 84059666, 84060342, 84086685, 84087360, 84059658, 84060334, 84086677, 84087352, 84059641, 84060326, 84086669, 84087345, 84059633, 84060318, 84086651, 84087337, 84059625, 84060300, 84086644, 84087329, 84059617, 84060292, 84086636, 84087311, 84059609, 84060284, 84086800, 84087485, 84059773, 84060458, 84086818, 84087493, 84059781, 84060466, 84086826, 84087501, 84059799, 84060474, 84086834, 84087519, 84059807, 84060482, 84086842, 84087527, 84059815, 84060490, 84086859, 84087535, 84059823, 84060508, 84086867, 84087543, 84059831, 84060516, 84086875, 84087550, 84059849, 84060524, 84086883, 84087568, 84059856, 84060532, 84086891, 84087576, 84059864, 84060540, 84086909, 84087584, 84059872, 84060557, 84086917, 84087592, 84059880, 84060565, 84086925, 84087600, 84059898, 84060573, 84086933, 84087618, 84059906, 84060581, 84086941, 84087626, 84059914, 84060599, 84086958, 84087634, 84059922, 84060607, 84086966, 84087642, 84059930, 84060615, 84132380, 84132893, 84133578, 84132554, 84133230, 84132885, 84133560, 84132547, 84133222, 84132877, 84133552, 84132539, 84133214, 84132869, 84133545, 84132521, 84133206, 84132851, 84133537, 84132513, 84133198, 84132844, 84133529, 84132505, 84133180, 84132836, 84133511, 84132497, 84133172, 84132828, 84133503, 84132489, 84133164, 84132810, 84133495, 84132471, 84133156, 84132802, 84133487, 84132463, 84133149, 84132794, 84133479, 84132455, 84133131, 84132786, 84133461, 84132448, 84133123, 84132778, 84133453, 84132430, 84133115, 84132760, 84133446, 84132422, 84133107, 84132752, 84133438, 84132414, 84133099, 84132745, 84133420, 84132406, 84133081, 84132737, 84133412, 84132398, 84133073, 84132901, 84133586, 84132562, 84133248, 84132919, 84133594, 84132570, 84133255, 84132927, 84133602, 84132588, 84133263, 84132935, 84133610, 84132596, 84133271, 84132943, 84133628, 84132604, 84133289, 84132950, 84133636, 84132612, 84133297, 84132968, 84133644, 84132620, 84133305, 84132976]
  let deriv_list = deriv_list_temp.map(number => {
    const paddedNumber = String(number).padStart(8, '0');
    return paddedNumber;
  });

  const [cardsHome, setCardsHome] = useState([
    addNewComponentInitial(CandlestickChart),
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 75)),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 50)),
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 150)),
    addNewComponentInitial(LineChart),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 150)),
    addNewComponentInitial(CandlestickChart),
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 70)),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 80)),
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 200)),
  ]);

  // execute when the user add component
  // needs to implement!!!!!
  function addNewComponent(Component) {
    const id = uuidv4()
    const componentId = uuidv4()
    const newCard = {
      id: id,
      componentId: componentId,
      component: <Component id={componentId} />,
    };
    setCardsHome([...cardsHome, newCard]);
  }

  const handleOnDragEndHome = (result) => {
    if (!result.destination) return;
    const items = Array.from(cardsHome);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCardsHome(items);
  };

  const [cardsAllTypes, setCardsAllTypes] = useState([
    addNewComponentInitial(CandlestickChart),
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 75)),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 50)),
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 150)),
    addNewComponentInitial(LineChart),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 150)),
  ]);

  const handleOnDragEndAllTypes = (result) => {
    if (!result.destination) return;
    const items = Array.from(cardsAllTypes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCardsAllTypes(items);
  };

  const [cardsEquity, setCardsEquity] = useState([
    addNewComponentInitial(Equity, getRandomElements(eq_list, 100)),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 150)),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 10)),
    addNewComponentInitial(Equity, getRandomElements(eq_list, 80)),
  ]);

  const handleOnDragEndEquity = (result) => {
    if (!result.destination) return;
    const items = Array.from(cardsEquity);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCardsEquity(items);
  };

  const [cardsIndex, setCardsIndex] = useState([
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 75)),
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 15)),
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 78)),
    addNewComponentInitial(IndexTable, getRandomElements(ind_list, 5)),
  ]);

  const handleOnDragEndIndex = (result) => {
    if (!result.destination) return;
    const items = Array.from(cardsIndex);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCardsIndex(items);
  };

  const [cardsDerivative, setCardsDerivative] = useState([
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 220)),
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 150)),
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 20)),
    addNewComponentInitial(Derivative, getRandomElements(deriv_list, 55)),
  ]);

  const handleOnDragEndDerivative = (result) => {
    if (!result.destination) return;
    const items = Array.from(cardsDerivative);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCardsDerivative(items);
  };

  // background-color: grey;
  /* const DragHandle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin-right: 8px;
    background-image: url(${DragHandleIcon});
    background-color: grey;
    `; */

  const classes = useStyles();
  return (
    <>
      <Provider store={store}>
        <DataFetch />
        <CssBaseline />
        <AppBar position="sticky" style={{ height: "45px" }}>
            <Toolbar className={classes.toolbar}>
                <LocalAtmIcon className={classes.icon} />
                {/* <Typography variant="h6" noWrap="true"> */}
                <Typography variant="h6" marginTop='-13px'>
                    Streaming Data App
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                {/* <ControlledOpenSpeedDial />   */}
                
                {/* <Badge className={classes.BadgeIcon} color="secondary" badgeContent={4} style={{ marginRight: `${(windowWidth- 
                   1500).toString()}px` }} >  */}
                <Badge className={classes.BadgeIcon} color="secondary" badgeContent={4} > 
                    <MailIcon color="white"/>
                </Badge>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge className={classes.BadgeIcon} color="secondary" badgeContent={8} > 
                    <NotificationsIcon color="white"/>
                </Badge>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SettingsOutlinedIcon className={classes.BadgeIcon} color="white"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <AccountCircle className={classes.BadgeIcon} color="white"/>
            </Toolbar>
            {/* <ComboBox /> */}
        </AppBar>

        <main>
          <Router>
            <Navigation />
            <Routes>

              {/* Home */}
              <Route path="/" element={
                <DragDropContext onDragEnd={handleOnDragEndHome}>
                  <Droppable droppableId="cards">
                    {(provided) => (
                      <Grid container spacing={2} // maxWidth="lg" id="Grid-container-HomePage"
                        style={{ marginTop: "5px", marginBottom: "10px", marginRight: "10px",
                                marginLeft: "10px", justifyContent: 'center'}}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                        
                        {cardsHome.map((card, index) => (
                          <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided,snapshot) => (
                              <Grid item spacing={10} onClick={() => onClickNew(card.componentId)} id={card.componentId}
                                      sx={(theme) => ({
                                        width: "650px",
                                        // height: "100%",
                                        height: "500px",
                                        minWidth: 100,
                                        minHeight: 100,
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        resize: "both", //"horizontal",
                                        overflow: "hidden",
                                        gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                                        transition: "transform 0.3s, border 0.3s",
                                        "&:hover": {
                                          borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                          transform: "translateY(-2px)"
                                        },
                                        "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" }
                                      })}
                                      {...provided.draggableProps}
                                      // {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      >
                                  {/* <DragHandle {...provided.dragHandleProps} /> */}
                                  <div {...provided.dragHandleProps} style={{ height: "20px", backgroundColor: "#bababa", borderRadius: "3px"}}>
                                    <DragHandleIcon />
                                  </div>
                                  {card.component}

                              </Grid>
                            )}
                          </Draggable>
                        ))}
                      </Grid>
                    )}
                  </Droppable>
                </DragDropContext>
              }/>
              
              {/* All Types */}
              <Route path="/AllTypes" element={
                <DragDropContext onDragEnd={handleOnDragEndAllTypes}>
                  <Droppable droppableId="cards">
                    {(provided) => (
                      <Grid container spacing={2} // maxWidth="lg"
                        style={{ marginTop: "5px", marginBottom: "10px", marginRight: "10px",
                                marginLeft: "10px", justifyContent: 'center'}}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                        
                        {cardsAllTypes.map((card, index) => (
                          <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided,snapshot) => (
                              <Grid item spacing={10} onClick={() => onClickNew(card.componentId)} id={card.componentId}
                                      sx={(theme) => ({
                                        width: 650,
                                        // height: "100%",
                                        height: "500px",
                                        minWidth: 100,
                                        minHeight: 100,
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        resize: "both", //"horizontal",
                                        overflow: "hidden",
                                        gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                                        transition: "transform 0.3s, border 0.3s",
                                        "&:hover": {
                                          borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                          transform: "translateY(-2px)"
                                        },
                                        "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" }
                                      })}
                                      {...provided.draggableProps}
                                      // {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      >
                                  {/* <DragHandle {...provided.dragHandleProps} /> */}
                                  <div {...provided.dragHandleProps} style={{ height: "20px", backgroundColor: "#bababa", borderRadius: "3px"}}>
                                    <DragHandleIcon />
                                  </div>
                                  {card.component}

                              </Grid>
                            )}
                          </Draggable>
                        ))}
                      </Grid>
                    )}
                  </Droppable>
                </DragDropContext>
              }/>

              {/* Equity */}
              <Route path="/Equity" element={
                <DragDropContext onDragEnd={handleOnDragEndEquity}>
                  <Droppable droppableId="cards">
                    {(provided) => (
                      <Grid container spacing={2} // maxWidth="lg"
                        style={{ marginTop: "5px", marginBottom: "10px", marginRight: "10px",
                                marginLeft: "10px", justifyContent: 'center'}}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                        
                        {cardsEquity.map((card, index) => (
                          <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided,snapshot) => (
                              <Grid item spacing={10} onClick={() => onClickNew(card.componentId)} id={card.componentId}
                                      sx={(theme) => ({
                                        width: 650,
                                        // height: "100%",
                                        height: "500px",
                                        minWidth: 100,
                                        minHeight: 100,
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        resize: "both", //"horizontal",
                                        overflow: "hidden",
                                        gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                                        transition: "transform 0.3s, border 0.3s",
                                        "&:hover": {
                                          borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                          transform: "translateY(-2px)"
                                        },
                                        "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" }
                                      })}
                                      {...provided.draggableProps}
                                      // {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      >
                                  {/* <DragHandle {...provided.dragHandleProps} /> */}
                                  <div {...provided.dragHandleProps} style={{ height: "20px", backgroundColor: "#bababa", borderRadius: "3px"}}>
                                    <DragHandleIcon />
                                  </div>
                                  {card.component}

                              </Grid>
                            )}
                          </Draggable>
                        ))}
                      </Grid>
                    )}
                  </Droppable>
                </DragDropContext>
              }/>

              {/* Index */}
              <Route path="/Index" element={
                <DragDropContext onDragEnd={handleOnDragEndIndex}>
                  <Droppable droppableId="cards">
                    {(provided) => (
                      <Grid container spacing={2} // maxWidth="lg"
                        style={{ marginTop: "5px", marginBottom: "10px", marginRight: "10px",
                                marginLeft: "10px", justifyContent: 'center'}}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                        
                        {cardsIndex.map((card, index) => (
                          <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided,snapshot) => (
                              <Grid item spacing={10} onClick={() => onClickNew(card.componentId)} id={card.componentId}
                                      sx={(theme) => ({
                                        width: 650,
                                        // height: "100%",
                                        height: "500px",
                                        minWidth: 100,
                                        minHeight: 100,
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        resize: "both", //"horizontal",
                                        overflow: "hidden",
                                        gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                                        transition: "transform 0.3s, border 0.3s",
                                        "&:hover": {
                                          borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                          transform: "translateY(-2px)"
                                        },
                                        "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" }
                                      })}
                                      {...provided.draggableProps}
                                      // {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      >
                                  {/* <DragHandle {...provided.dragHandleProps} /> */}
                                  <div {...provided.dragHandleProps} style={{ height: "20px", backgroundColor: "#bababa", borderRadius: "3px"}}>
                                    <DragHandleIcon />
                                  </div>
                                  {card.component}

                              </Grid>
                            )}
                          </Draggable>
                        ))}
                      </Grid>
                    )}
                  </Droppable>
                </DragDropContext>
              }/>

              {/* Derivative */}
              <Route path="/Derivative" element={
                <DragDropContext onDragEnd={handleOnDragEndDerivative}>
                  <Droppable droppableId="cards">
                    {(provided) => (
                      <Grid container spacing={2} // maxWidth="lg"
                        style={{ marginTop: "5px", marginBottom: "10px", marginRight: "10px",
                                marginLeft: "10px", justifyContent: 'center'}}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                              >
                        
                        {cardsDerivative.map((card, index) => (
                          <Draggable key={card.id} draggableId={card.id} index={index}>
                            {(provided,snapshot) => (
                              <Grid item spacing={10} onClick={() => onClickNew(card.componentId)} id={card.componentId}
                                      sx={(theme) => ({
                                        width: 650,
                                        // height: "100%",
                                        height: "500px",
                                        minWidth: 100,
                                        minHeight: 100,
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        resize: "both", //"horizontal",
                                        overflow: "hidden",
                                        gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                                        transition: "transform 0.3s, border 0.3s",
                                        "&:hover": {
                                          borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                                          transform: "translateY(-2px)"
                                        },
                                        "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" }
                                      })}
                                      {...provided.draggableProps}
                                      // {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      >
                                  {/* <DragHandle {...provided.dragHandleProps} /> */}
                                  <div {...provided.dragHandleProps} style={{ height: "20px", backgroundColor: "#bababa", borderRadius: "3px"}}>
                                    <DragHandleIcon />
                                  </div>
                                  {card.component}

                              </Grid>
                            )}
                          </Draggable>
                        ))}
                      </Grid>
                    )}
                  </Droppable>
                </DragDropContext>
              }/>

            </Routes>
          </Router>
        </main>

      </Provider>
    </>
  );
}

// export default App;
export default AppWrapper;
