import { Button, Typography } from "@mui/material"; 
import { Stack } from "@mui/system"; 
import { Link } from "react-router-dom"; 
import CustomButton from "../components/CustomButton";
import StyledPaper from "../components/StyledPaper";

const Home = () => { 
  return ( 
    <Stack spacing={2}> 
      <Typography variant="h2">Home</Typography> 
      <StyledPaper>
        Custom Shadow
      </StyledPaper>
      <CustomButton variant="outlined">MY first custom button</CustomButton>
      <a href="/login">Target to Login with traditional html Link dom</a> 
      <br /> 
      <Button variant="contained" component={Link} to="/login"> 
        Target to Login with react-router-dom 
      </Button> 
    </Stack> 
  ); 
}; 

export default Home