import {
  createUser,
  getAllUsers,
  getUserById,
  signInUser,
} from './controller/user';
import { setTopics } from './controller/topic';
import { fetchTweets, generateTweet } from './controller/tweet';
import express, { Request, Response } from 'express';
import {   getAccessToken, oauth, postTweet } from './integration/twitter-api.service';

const router = require('express').Router();

/* USER MANAGEMENT */
router.post('/user/signup', createUser);
router.post('/user/signin', signInUser);


router.get('/user/:id', getUserById);
// router.get('/', getAllUsers)

/* TOPICS MANAGEMENT */
router.post('/topic/set-topics', setTopics);
router.post('/tweets/generate-tweet', generateTweet);

/* router.get('/tweets/suggested', fetchSuggestedTweets)
router.get('/tweets/queued', fetchQueuedTweets); */

router.get('/user/:id/tweets/:status', fetchTweets)


//twitter authorization with oauth
router.get('/user/:id/oauth', oauth)
router.get('/callback', getAccessToken)


//to post tweets on behalf of the user
router.post('user/:id/postTweets', postTweet)
export default router;
