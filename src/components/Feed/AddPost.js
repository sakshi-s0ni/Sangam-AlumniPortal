import { useState } from "react";
import Header from "../Bar/Header/Header";
const AddPost = () => {
    const [initial, setInitial] = useState("");
    const [postBy, setpostBy] = useState("");
    const [postDate, setpostDate] = useState("");
    const [postImg, setpostImg] = useState("");
    const [postAltImg, setpostAltImg] = useState("loading");
    const [postContent, setpostContent] = useState("");
    let postdetail = {
        initial : "S",
        postBy : "Soni",
        postDate : "November 16,2022",
        postImg : "",
        postAltImg : "loading",
        postContent : "Hii there"
    }
    return(
        <>
        <Header></Header>

        </>
    );
}

export default AddPost;