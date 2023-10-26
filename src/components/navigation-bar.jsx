import { Avatar, Box, Button } from "@mui/material";
import { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigationLinks } from "../profile/homePageData";
import { Footer } from "./footer";
import { logo } from "../assets/images/index";

export const NavigationBar = () => {
  return (
    <>
      <Box
        px={5}
        display={"flex"}
        justifyContent={"space-between"}
        bgcolor={"pink"}
        alignItems={"center"}
        height={"10vh"}
      >
        <Link to={"/"}>
          <Avatar alt="Remy Sharp" src={logo} sx={{ width: 36, height: 36 }} />
        </Link>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexBasis={"30%"}
        >
          {Children.toArray(
            NavigationLinks.map((NavigationLinks) => {
              return (
                <Link to={NavigationLinks.path}>
                  <Button>{NavigationLinks.displayName}</Button>
                </Link>
              );
            })
          )}
        </Box>
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};
