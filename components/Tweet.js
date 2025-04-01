import styles from '../styles/Tweet.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { addTweet } from '../reducers/tweet';
import {Button} from 'antd';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Tweet() {

let [allTweet, setAllTweet] = useState([]);
let [currentTweet, setCurrentTweet] = useState("");

const user = useSelector((state) => state.user.value);

useEffect(() => {
  displayAllTweets();
}, []);

function displayAllTweets() {
  fetch('http://localhost:3000/tweets/all')
    .then((response) => response.json())
    .then((data) => {
      if (data.result === true) {
        setAllTweet(data.tweets.reverse());
      }
    });
}

function postTweet() {
  fetch('http://localhost:3000/tweets//create',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: user.token,
      message: currentTweet,
      time: Date.now(),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === true) {
        displayAllTweets();
      }
    });
}

let tweets = allTweet.map((data) => {
  return (
    <Tweet
      content={data.content}
      firstname={data.user.firstname}
      username={data.user.username}
      image={data.user.image}
      time={data.time}
      fonction={displayAllTweets}
    />
  );
});

  // const handleaddtweet = () => {
  //   dispatch(addTweet(props))}

  return (
    <div className={styles.contentmain}>
       <div className={styles.contentleft}>
       <div className={styles.twittericon}>
          <FontAwesomeIcon icon={faTwitter} style={{color :"#ffffff"}} rotation={180} size="2xl" />
    </div>
       </div>
       <div className={styles.contentmiddle}>
        <div className={styles.headcontent}>
          <h2> Home </h2>
          <input className={styles.inputTweet} type="text" placeholder="What's up today?" 
          onChange={(e) => {if (currentTweet.length < 280) {setCurrentTweet(e.target.value);}}}
            value={currentTweet}
          />
          <button className={styles.tweetbtn} onClick={() => { postTweet();setCurrentTweet("");}}>Tweet</button>
        </div>

        {/* <div className={styles.contenttweet}>
          <span className={styles.firstname}>{props.firstname}</span>
          <span className={styles.username}>@ {props.username}</span>
          <span className={styles.time}>  _ temps écoulé {props.time}</span>
          <p className={styles.message}>{props.message}</p>
        </div> */}

       </div>
       <div className={styles.contentright}>
       </div>
       <div className={styles.tweetContainer}>{tweets}</div>
    </div>
  );
}


export default Tweet;