# # import tweepy
# # import os
# # from dotenv import load_dotenv

# # # Load variables from .env file
# # load_dotenv()

# # # Now you can access the variables defined in the .env file
# # API_KEY = os.getenv("API_KEY")
# # API_SECRET = os.getenv("API_SECRET")
# # auth = tweepy.AppAuthHandler(API_KEY, API_SECRET)

# # # Create the API object
# # api = tweepy.API(auth, wait_on_rate_limit=True)

# # # Search for tweets containing the keyword 'python'
# # search_query = "python"
# # tweets = tweepy.Cursor(api.search_tweets, q=search_query, tweet_mode="extended").items()

# # # Print the text of each tweet
# # for tweet in tweets:
# #     print(f"{tweet.user.screen_name}: {tweet.full_text}")
# #     break


# # from selenium import webdriver
# # from selenium.webdriver.common.keys import Keys
# # from selenium.webdriver.common.by import By

# # driver = webdriver.Edge()

# # driver.get("https://www.bing.com")


# # results = driver.find_elements(By.XPATH, "//*[@id='b_tween']/span")

# # try:
# #     search_box = driver.find_element(By.NAME, "q")
# #     search_box.clear()
# #     search_box.send_keys("John Doe") # enter your name in the search box
# #     search_box.submit() # submit the search
# #     results = driver.find_elements(By.XPATH, "//*[@id='b_tween']/span")
# #     for result in results:
# #         text = result.text.split()[1] # extract the number of results
# #         print(text)
# #     # save it to a file
# #         with open("results.txt", "w") as f:
# #             f.write(text)
# # except Exception as e:
# #     print(f"An error occurred: {e}")

# Import Dependencies
import selenium
from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
from time import sleep
import getpass as gp


PATH = "C:/Users/aasti/Downloads/chromedriver-win64/chromedriver-win64/chromedriver.exe"
driver = webdriver.Chrome(PATH)
driver.get("https://twitter.com/i/flow/login")

subject = "Elon Musk"


# Setup the log in
# sleep(3)
# username = driver.find_element(By.XPATH,"//input[@name='text']")
# username.send_keys("haxproj26836")
# next_button = driver.find_element(By.XPATH,"//span[contains(text(),'Next')]")
# next_button.click()

# sleep(3)
# password = driver.find_element(By.XPATH,"//input[@name='password']")
# password.send_keys('haxproj1')
# log_in = driver.find_element(By.XPATH,"//span[contains(text(),'Log in')]")
# log_in.click()

# Search item and fetch it
# sleep(3)
# search_box = driver.find_element(By.XPATH,"//input[@data-testid='SearchBox_Search_Input']")
# search_box.send_keys(subject)
# search_box.send_keys(Keys.ENTER)

# sleep(3)
# people = driver.find_element(By.XPATH,"//span[contains(text(),'People')]")
# people.click()

# sleep(3)
# profile = driver.find_element(By.XPATH,"//*[@id='react-root']/div/div/div[2]/main/div/div/div/div/div/div[2]/div/section/div/div/div[1]/div/div/div/div/div[2]/div/div[1]/div/div[1]/a/div/div[1]/span/span")
# profile.click()



# UserTag = driver.find_element(By.XPATH,"//div[@data-testid='User-Names']").text
# TimeStamp = driver.find_element(By.XPATH,"//time").get_attribute('datetime')
# Tweet = driver.find_element(By.XPATH,"//div[@data-testid='tweetText']").text
# Reply = driver.find_element(By.XPATH,"//div[@data-testid='reply']").text
# reTweet = driver.find_element(By.XPATH,"//div[@data-testid='retweet']").text
# Like = driver.find_element(By.XPATH,"//div[@data-testid='like']").text


UserTags=[]
TimeStamps=[]
Tweets=[]
Replys=[]
reTweets=[]
Likes=[]

# articles = driver.find_elements(By.XPATH,"//article[@data-testid='tweet']")
# while True:
#     for article in articles:
#         UserTag = driver.find_element(By.XPATH,".//div[@data-testid='User-Names']").text
#         UserTags.append(UserTag)
        
#         TimeStamp = driver.find_element(By.XPATH,".//time").get_attribute('datetime')
#         TimeStamps.append(TimeStamp)
        
#         Tweet = driver.find_element(By.XPATH,".//div[@data-testid='tweetText']").text
#         Tweets.append(Tweet)
        
#         Reply = driver.find_element(By.XPATH,".//div[@data-testid='reply']").text
#         Replys.append(Reply)
        
#         reTweet = driver.find_element(By.XPATH,".//div[@data-testid='retweet']").text
#         reTweets.append(reTweet)
        
#         Like = driver.find_element(By.XPATH,".//div[@data-testid='like']").text
#         Likes.append(Like)
#     driver.execute_script('window.scrollTo(0,document.body.scrollHeight);')
#     sleep(3)
#     articles = driver.find_elements(By.XPATH,"//article[@data-testid='tweet']")
#     Tweets2 = list(set(Tweets))
#     if len(Tweets2) > 5:
#         break


# print(len(UserTags),
# len(TimeStamps),
# len(Tweets),
# len(Replys),
# len(reTweets),
# len(Likes))


# import pandas as pd

# df = pd.DataFrame(zip(UserTags,TimeStamps,Tweets,Replys,reTweets,Likes)
#                   ,columns=['UserTags','TimeStamps','Tweets','Replys','reTweets','Likes'])

# df.head()

# df.to_excel(r"D:\Learnerea\Tables\tweets_live.xlsx",index=False)

# import os
# os.system('start "excel" "C:/Users/aasti/StudioProjects/hax-proj/charcha/WEBSCRAPER"')







