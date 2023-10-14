import { Box, Typography } from "@mui/material";

export const ErrorPage = () => {
  return (
    <Box
      height={"75vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography color={"red"} fontSize={50}>
        404 Not Found
      </Typography>
    </Box>
  );
};
