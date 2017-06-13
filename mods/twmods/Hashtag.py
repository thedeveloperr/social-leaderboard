import tweepy
import pprint
import os
import json



consumer_token = os.environ['TW_CTOKEN']
consumer_secret = os.environ['TW_CSECRET']
access_token = os.environ['TW_ATOKEN']
access_token_secret = os.environ['TW_ASECRET']

db_url = os.environ['SBCON_DB']

def hashtag_fetch(hashtag, since_date):
	auth = tweepy.OAuthHandler(consumer_token, consumer_secret)
	auth.set_access_token(access_token, access_token_secret)
	api = tweepy.API(auth)
	HashTweet = tweepy.Cursor(api.search, q=hashtag, since=since_date).items()
	for tweet in HashTweet:
	    last_id=tweet.id
	    data = {
	    	"tweet": tweet.text,
	    	"tweet_favourite": tweet.favorite_count,
	    	"tweet_retweet": tweet.retweet_count,
	    	# "username": tweet.screen_name,
	    }

	    print((tweet))

	    print()
	    print()

	    # print(data)
	    

if __name__ == "__main__":
	hashtag_fetch("lifeatstatusbrew", "2017-06-01")
