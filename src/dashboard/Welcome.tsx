import * as React from "react";
import {Box, Card, CardActions, Button, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import {useTranslate} from "react-admin";

import publishArticleImage from "./welcome_illustration.svg";

const Welcome = () => {
  const translate = useTranslate();

  return (
    <Card
      sx={{
        background: theme =>
          theme.palette.mode === "dark"
            ? "#535353"
            : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

        color: "#fff",
        padding: "20px",
        marginTop: 2,
        marginBottom: "1em",
      }}
    >
      <Box display="flex">
        <Box flex="1"></Box>
        <Box
          display={{xs: "none", sm: "none", md: "block"}}
          sx={{
            background: `url(${publishArticleImage}) top right / cover`,
            marginLeft: "auto",
          }}
          width="16em"
          height="9em"
          overflow="hidden"
        />
      </Box>
    </Card>
  );
};

export default Welcome;
