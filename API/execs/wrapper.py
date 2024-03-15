import sys
from scraper import start_scrape
import time

def myfunc(mystring):
    # string = str(input("Enter product to be searched: "))
    
    # print("Scraping Comments...")
    start_scrape(mystring)
    # print("Scraping Completed!")
    # time.sleep(5)
    
    from sentimentfinal import start_sentiment_analysis
    # print("Performing Sentiment Analysis...")
    # time.sleep(3)
    # print("Running...")
    output_json = start_sentiment_analysis(mystring)
    
    # print("Sentiment Analysis Completed!")
    print(output_json)
    
    
    
if __name__ == "__main__":
    string = str(sys.argv[1])
    myfunc(string)    