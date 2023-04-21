import React from 'react'
import Header from "../Bar/Header/Header"
import Post from '../Feed/Post';
import "./Feed.css";
const Feed = () => {
    let postdetail = {
        initial : "S",
        postBy : "Soni",
        postDate : "November 16,2022",
        postImg : "",
        postAltImg : "loading",
        postContent : "Hii there"
    }
    return (
        <div id="feed">
            <Header></Header>
            
            <div id="posts">
                <Post postDetails = {postdetail}/>
            </div>
        </div>
    )
};

export default Feed;