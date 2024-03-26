import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Homefood from "../assets/home-food.png";

const StyledPaper = styled(Paper)(({ theme, backgroundColor }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '7vw',
    width: '14vw',
    position: 'relative',
}));

const Image = styled('img')`
    max-width: 100%;
    max-height: 100%;
`;

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const FilterItem = ({ imageSrc, title }) => {
    const backgroundColor = getRandomColor(); // Generate random color
    return (
        <div>
            <StyledPaper backgroundColor={backgroundColor}>
                <Image src={Homefood} alt={title} />
            </StyledPaper>
            <div>
                <Typography variant="body2" color="textSecondary" textAlign="left">
                    test
                </Typography>
            </div>
        </div>
    );
};

export default FilterItem;
