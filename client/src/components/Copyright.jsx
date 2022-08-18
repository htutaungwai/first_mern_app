import React from "react";
import { Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <p>
        {`Copyright ©  `}
        <Link color="inherit" href="/">
          Blog Demo
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </p>
    </Typography>
  );
}

export default Copyright;
