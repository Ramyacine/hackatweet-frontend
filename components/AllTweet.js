import styles from '../styles/Tweet.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {addTweet } from '../reducers/tweet';
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function  AllTweet() {
    
let [allTweet, setAllTweet] = useState([]);
let [currentTweet, setCurrentTweet] = useState("");
  
    useEffect(() => {
      displayAllTweets();
    }, []);
  
    function displayAllTweets() {
      fetch()
        .then((response) => response.json())
        .then((data) => {
          if (data.result === true) {
            setAllTweet(data.tweets.reverse());
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

    return (
        <main className={styles.mainFeed}>
        <h1 className={styles.title2}>Home</h1>
        <div className={styles.tweetRedaction}>
          <input className={styles.inputTweet} type="text" placeholder="What's up today?" 
          onChange={(e) => {if (currentTweet.length < 280) {setCurrentTweet(e.target.value);}}}
            value={currentTweet}
          />
          <div className={styles.infoTweetContainer}>
            <span className={styles.span}>{currentTweet.length}/280</span>
            <button
              className={styles.buttonTweet}
              onClick={() => {
                postTweet();
                setCurrentTweet("");
              }}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.tweetContainer}>{tweets}</div>
      </main>
    );
  }
  
  
  export default  AllTweet;