import csv
import requests
from bs4 import BeautifulSoup

def scrape_reddit_comments(topic, num_pages=10):
    base_url = f"https://www.reddit.com/search/?q={topic}&type=comment"
    comments_list = []

    for page in range(num_pages):
        url = f"{base_url}&page={page + 1}"
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(response.text, "html.parser")

        comments = soup.find_all("p", class_="")

        for comment in comments:
            comments_list.append(comment.get_text())

    return comments_list[:100] 

import csv

def save_to_csv(comments, filename):
    with open(filename, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['reviewText'])
        for comment in comments:
            # Replace newline characters with spaces
            comment = comment.lower().replace('\n', ' ')
            writer.writerow([comment])
            

def start_scrape(inputtext):
    topic_to_scrape = inputtext
    num_pages_to_scrape = 10
    comments = scrape_reddit_comments(topic_to_scrape, num_pages_to_scrape)
    csv_filename = 'reddit_comments.csv'
    save_to_csv(comments, csv_filename)
    print(f"Comments saved to {csv_filename}.")
#--------------------------------------------------REDDIT SCRAPER ENDS HERE --------------------------------------------------#