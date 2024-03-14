from scraper import start_scrape
from  sentiment import start_sentiment_analysis
import time
import os

def main():
    string = str(input("Enter product to be searched: "))
    print("Scraping Comments...")
    start_scrape(string)
    
    print("Scraping Completed!")
    
    time.sleep(5)
    
    print("Performing Sentiment Analysis...")
    time.sleep(3)
    print("Running...")
    output_json = start_sentiment_analysis(string)
    print("Sentiment Analysis Completed!")
    print(output_json)
    
    
if __name__ == "__main__":
    main()