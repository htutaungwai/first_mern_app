import React, { useState } from "react";

import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  InputAdornment,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

//  #region ----------------[ ICONS ]--------------
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

//   #region ----------------[ CONTEXT HOOKS ]--------------
import { useAuth } from "../middlewares/contextHooks";
import { useEffect } from "react";

const Login = () => {
  const { loginUser, clearErrors, toasts, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "Peter",
    lastName: "Pan",
    email: "peterpan@gmail.com",
    password: "password123",
    confirmPassword: "password123",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/blogs");
    if (toasts) {
      console.log(toasts);
      toasts.forEach((ele) => {
        toast(ele.message, {
          type: ele.type,
        });
      });
    }
  }, [toasts, isAuthenticated, clearErrors]);

  const handleLogin = () => {
    const { email, password } = user;

    if (!password || email === "" || !email) {
      toast("Please fill all fields", { type: "error" });
      return;
    }

    loginUser(user);
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              placeholder="Enter password"
              value={user.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword.password ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            ></TextField>
          </Grid>

          {/* <Grid item xs={12}>
           
          </Grid> */}
        </Grid>

        <Button
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <p>
              Don't have an account? Register{" "}
              <Link to={"/login"}>instead.</Link>
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
