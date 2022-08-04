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

//  #region ----------------[ ICONS ]--------------
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "Peter",
    lastName: "Pan",
    email: "peterpan@gmail.com",
    password: "password123",
    confirmPassword: "password123",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleRegister = () => {
    const { firstName, lastName, email, password, confirmPassword } = user;

    if ((!firstName || !lastName || !email || !password, confirmPassword)) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration successful");
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
          Register
        </Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              value={user.firstName}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              placeholder="Enter your last name"
              value={user.lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Last Name"
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
              type={showPassword.password ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setShowPassword({
                        ...showPassword,
                        password: !showPassword.password,
                      });
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

          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              placeholder="Confirm password"
              value={user.confirmPassword}
              type={showPassword.confirmPassword ? "text" : "password"}
              onChange={(e) => {
                setUser({ ...user, confirmPassword: e.target.value });
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={() => {
                      setShowPassword({
                        ...showPassword,
                        confirmPassword: !showPassword.confirmPassword,
                      });
                    }}
                  >
                    {showPassword.confirmPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </InputAdornment>
                ),
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
          onClick={handleRegister}
        >
          Register
        </Button>

        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <p>
              Already have an account?
              <Link to={"/login"}> Login</Link>
            </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Register;
