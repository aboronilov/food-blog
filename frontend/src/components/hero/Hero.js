import { Box, Container, Grid, styled, Typography } from '@mui/material';
import burger from "../../static/hamburger1.jpg";
import drinks from "../../static/drink1.jpg";
import meat from "../../static/meat1.jpeg";
import appetizer from "../../static/appetizer1.jpg";

const Hero = () => {
    const StyledCard = styled(Box)(({theme})=>({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        cursor: "pointer",
        [theme.breakpoints.up("md")]:{
            height: 400,
        },
        [theme.breakpoints.down("md")]:{
            height: 200,
        },
        "&:hover": {
            opacity: 0.8,
            boxSizing: "border-box",
            zIndex: 1,
            transition: `all 0.45s ease`
        }
    }));

    const StyledTypography = styled(Typography)({
        textAlign: "center",
        color: "white",
        background: "tomato",
        fontSize: 20,
    });

    const StyledWrapper = styled(Box)(({theme})=>({
        width: "80%",
        [theme.breakpoints.up("md")]:{
            paddingTop: "140%",
        },
        [theme.breakpoints.down("md")]:{
            paddingTop: "40%",
        },
    }));

    return (
        <Container>
            <Grid container direction="row" columnSpacing={2} rowSpacing={2}>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${meat})` }}>
                        <StyledWrapper>
                            <StyledTypography>
                                Meat
                            </StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${drinks})` }}>
                        <StyledWrapper>
                            <StyledTypography>
                                Drinks
                            </StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${appetizer})` }}>
                        <StyledWrapper>
                            <StyledTypography>
                                Appetizer
                            </StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
                        <StyledWrapper>
                            <StyledTypography>
                                Burger
                            </StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Hero