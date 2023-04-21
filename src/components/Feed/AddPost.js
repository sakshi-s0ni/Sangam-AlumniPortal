import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { TextField, ButtonBase, Button } from '@mui/material';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddImage from "./Images/AddImage.png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const images = [
    {
        url: AddImage,
        title: "Add Image",
        width: "100%",
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 300,
    [theme.breakpoints.down("sm")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
        zIndex: 1,
        "& .MuiImageBackdrop-root": {
            opacity: 0.15,
        },
        "& .MuiImageMarked-root": {
            opacity: 0,
        },
        "& .MuiTypography-root": {
            border: "4px solid currentColor",
        },
    },
}));

const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
}));

const AddPost = () => {
    const navigate = useNavigate();
    const [initial, setInitial] = useState("");
    const [postBy, setpostBy] = useState("");
    const [postDate, setpostDate] = useState("");
    const [postImg, setpostImg] = useState("");
    const [postAltImg, setpostAltImg] = useState("loading");
    const [postContent, setpostContent] = useState("");
    const handleClick = (e, path) => {
        e.preventDefault();
        navigate(path);
    };
    let postdetail = {
        initial: "S",
        postBy: "Soni",
        postDate: "November 16,2022",
        postImg: "",
        postAltImg: "loading",
        postContent: "Hii there"
    }
    const handleCapture = ({ target }) => {
        console.log("clicked||");
        const fileReader = new FileReader();
        const name = target.accept.includes('image') ? 'images' : 'videos';
        console.log("clicked");
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            // this.setState((prevState) => ({
            //     [name]: [...prevState[name], e.target.result]
            // }));
        };
    };
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', width: 500 }}>
                <Card sx={{ maxWidth: 500 }}>
                    <Box
                        sx={{ display: "flex", flexWrap: "wrap", minWidth: 400, width: "100%" }}
                    >
                        {images.map((image) => (
                            <ImageButton
                                focusRipple
                                key={image.title}
                                style={{
                                    width: image.width,
                                }}
                                onClick={(e) => handleClick(e, image.navigate)}
                            >
                                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <input
                                        accept="image/*"
                                        className="test"
                                        id="icon-button-photo"
                                        hidden
                                        onChange={handleCapture}
                                        type="file"
                                    />
                                    <label htmlFor="icon-button-photo">
                                        <Button component="label" htmlFor="icon-button-photo">
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="white"
                                                sx={{
                                                    position: "relative",
                                                    p: 4,
                                                    pt: 2,
                                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                                }}
                                            >
                                                {image.title}

                                                <ImageMarked className="MuiImageMarked-root" />
                                            </Typography>
                                        </Button>
                                    </label>
                                </Image>
                            </ImageButton>
                        ))}

                    </Box>
                    {/* <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Upload an image"
                    alignItems="center"
                /> */}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Pen it out"
                                    multiline
                                    maxRows={2}
                                    sx={{ width: 390 }}
                                />
                                <CreateIcon sx={{ color: 'action.active' }} />
                            </Box>
                        </Typography>
                        <Box align="center" marginTop={2}>
                            <Button variant="contained" endIcon={<NavigateNextIcon />}
                                sx={{ color: "white", backgroundColor: "#1565c0" }}>
                                Post
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default AddPost;