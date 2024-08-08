import * as React from "react";
import { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppContext from "../contexts/AppContext";

var drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      margin: "0 0 6px 0",
      border: "2px solid green",
      padding: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(10% - ${drawerWidth}px)`,
    // border: "2px solid red",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  // border: "2px solid blue",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ResponsiveDrawer({ drawerHeading }) {
  const theme = useTheme();

  // open, setOpen is respect to the drawer not List
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    window.localStorage.setItem("drawerOpen", JSON.stringify(open));
    window.dispatchEvent(new Event("storage"));
  });

  // openList is respect to lists inside drawer
  const [openList, setOpenList] = useState([false, false, false,false]);

  const handleClickList = (index) => {
    const copyList = [...openList];
    copyList[index] = !copyList[index];
    setOpenList(copyList);
  };

  const [checked, setChecked] = useState([[], [], [],[]]);
  console.log(checked);

  const {selectedTags, setSelectedTags} = useContext(AppContext)

  const handleToggle = (listIndex, value, type) => () => {
    console.log(`Checkbox clicked for listIndex ${listIndex} - type ${type}`);

    // for toggling the checkboxes
    const currentIndex = checked[listIndex].includes(value);
    const newChecked = [...checked];

    if (currentIndex === false) {
      newChecked[listIndex].push(value);
    } else {
      const indexToRemove = newChecked[listIndex].indexOf(value);
      newChecked[listIndex].splice(indexToRemove, 1);
    }
    setChecked(newChecked);

    // for toggling the selectedTags
    setSelectedTags((prevSelectedTags) =>
      checked[listIndex].includes(value)
        ? [...prevSelectedTags, type] // Add tag to selectedTags if checked
        : prevSelectedTags.filter((tag) => tag !== type) // Remove tag if unchecked
    );

  };


  const InternshipTypes = ["Full-time", "Part-time", "Remote", "Hybrid","OnSite"];
  const Category = ["Design","Web Development","App Development","Machine Learning","Artificial Intelligence","Data Science","ReactJS","MySQL"];
  const Experience = ["0-6 months","6-12 months","1-2 years","2 years or above"];
  const StipendRange = [  "0 - 1,000",  "1,000 - 5,000",  "5,000 - 10,000",  "10,000 - 15,000",  "15,000 - 2,00,000"];

  const NestedList = ({ SidebarList, listIndex, Listname }) => {
    // console.log(`list name = ${Listname}`);
    return (
      <>
        {/* <p>{` List is ${SidebarList}, ${listIndex}, ${Listname} `}</p> */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => handleClickList(listIndex)}>
            <ListItemText primary={Listname} />
            {openList[listIndex] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openList[listIndex]} timeout="auto" unmountOnExit>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                // border: "2px solid gold",
                height: "auto",
              }}
            >
              {SidebarList.map((type, value) => {
                const labelId = `checkbox-list-label-${value}`;

                // this return is of Nested list
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments"></IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(listIndex, value,type)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked[listIndex].includes(value) === true}
                          tabIndex={-1}
                          disableRipple
                          value={type}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${type}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </List>
      </>
    );
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="relative"
          open={open}
          style={{
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ marginLeft: "5rem" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                mr: 2,
                ...(open && { display: "none" }),
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                fontFamily: "Arya",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "1.5rem",
                lineHeight: "58px",
                color: "black",
              }}
            >
              {drawerHeading}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          {
            <NestedList
              SidebarList={InternshipTypes}
              listIndex={0}
              Listname="Internship Type"
            />
          }
          {
            <NestedList
              SidebarList={Category}
              listIndex={1}
              Listname="Category"
            />
          }
          {
            <NestedList
              SidebarList={Experience}
              listIndex={2}
              Listname="Experience"
            />
          }
          {
            <NestedList
              SidebarList={StipendRange}
              listIndex={3}
              Listname="Stipend Range"
            />
          }
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </>
  );
}
