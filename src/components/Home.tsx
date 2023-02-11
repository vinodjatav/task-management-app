import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Logo from "./vinodjatav.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "428px",
        height: "926px",
        background: "#FFFFFF",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          width: "378px",
          height: "40px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "28px",
            height: "14px",
          }}
        >
          <hr
            style={{
              position: "absolute",
              width: "13.6px",
              height: "0px",
              left: "25px",
              top: "76px",
              opacity: "0.7",
              border: "2px solid #363942",
            }}
          />
          <hr
            style={{
              position: "absolute",
              width: "28px",
              height: "0px",
              left: "25px",
              top: "90px",
              opacity: "0.7",
              border: "2px solid #363942",
            }}
          />
          <hr
            style={{
              position: "absolute",
              width: "19.2px",
              height: "0px",
              left: "25px",
              top: "83px",
              opacity: "0.7",
              border: "2px solid #363942",
            }}
          />
        </Box>
        <Avatar
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            left: "363px",
            top: "76px",
            backgroundColor: "#D9D9D9",
            borderRadius: "8px",
          }}
          alt="Vinod Jatav"
          src={Logo}
        />
      </Stack>
      <Box
        sx={{
          position: "absolute",
          width: "128px",
          height: "40px",
          left: "25px",
          top: "148px",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            width: "128px",
            height: "24px",
            top: "32px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "100%",
            textAlign: "center",
            letterSpacing: "0.01em",
            color: "#363942",
          }}
        >
          Hello Vinod
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            width: "73px",
            height: "12px",
            top: "60px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "100%",
            textAlign: "center",
            letterSpacing: "0.01em",
            color: "#363942",
            opacity: "0.6",
          }}
        >
          Feb 11, 2023
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
