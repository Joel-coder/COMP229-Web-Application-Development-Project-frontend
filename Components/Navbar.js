import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AppBar from "@mui/material/AppBar";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useRouter } from "next/router";
//rsf
function Navbar() {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            <BottomNavigationAction
              label="Surveys"
              icon={<AssignmentIcon />}
              onClick={() => router.push("/survey")}
            />
            <BottomNavigationAction label="Login" icon={<LoginIcon />} />
          </BottomNavigation>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
