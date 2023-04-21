import React, { useState } from "react";
import {
  Avatar,
  Alert,
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import PortraitIcon from "@mui/icons-material/Portrait";
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";
import Header from "../../Bar/Header/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [onError, setOnError] = useState(false);
  const [loginType, setLoginType] = useState("");
  const navigate = useNavigate();

  const stuPortal = async (event) => {
    event.preventDefault();
    await setLoginType("student");
    console.log(loginType);
  }
  const aluPortal = async (event) =>{
    event.preventDefault();
    await setLoginType("alumni");
    console.log(loginType);
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const verifyLoginApi = "http://localhost:8083/api/user/userLogin";
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const data = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: data,
    };

    fetch(verifyLoginApi, requestOptions)
      .then((response) => {
        console.log(response.status);

        if (response.status === 202) {
          console.log(response.headers.get("token"));
          response.json().then((e) => {
            console.log(JSON.stringify(e));
            localStorage.setItem('user', JSON.stringify(e));
          })
          navigate("/dashboard/app");
        }

        else {
          console.log(response)
          setOnError(true);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };


  return (
    <>
      <Header></Header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container id="login" maxWidth="xl">
          {
            <Container component="main" maxWidth="xs">
              <CssBaseline />

              <Box
                sx={{
                  marginTop: 15,
                  marginBottom: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <PortraitIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button onClick={stuPortal}>
                    Student
                  </Button>
                  <Button onClick={aluPortal}>
                    Alumni
                  </Button>
                </ButtonGroup>
                {onError && (
                  <Alert
                    action={
                      <Button
                        color="inherit"
                        size="small"
                        onClick={() => {
                          //   navigate("/register");
                        }}
                      >
                        Register
                      </Button>
                    }
                  >
                    Seems like you are new! Please register with us.
                  </Alert>
                )}
                <Box component="div" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onBlur={handleEmail}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onBlur={handlePassword}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                      <Typography sx={{ p: 1 }} color="red">
                        {error}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button
                    // onClick={handleLogin}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Container>
          }
        </Container>
      </Box>
    </>
  );
};

export default Login;