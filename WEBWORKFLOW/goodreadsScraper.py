import pandas as pd
import requests
from bs4 import BeautifulSoup

def bookSearch(bookName):
    base_url = f"https://www.goodreads.com/search?q={bookName}"
    response = requests.get(base_url)
    soup = BeautifulSoup(response.text, "html.parser")
    # Find the link of the first search result
    first_result_link = soup.find("a", {"class": "bookTitle"})['href']
    book_url = f"https://www.goodreads.com{first_result_link}"
    print(f"Scraping URL: {book_url}")

    # Get reviews from the first search result page
    reviews = get_reviews(book_url)

    # Keep fetching reviews until we have 50 or there are no more reviews
    page = 2
    while len(reviews) < 50:
        next_page_url = f"{book_url}?page={page}"
        next_page_reviews = get_reviews(next_page_url)
        if not next_page_reviews:
            break
        reviews.extend(next_page_reviews)
        page += 1

    # Limit to the first 50 reviews
    reviews = reviews[:50]

    goodreads = pd.DataFrame({"Review": reviews})
    if not goodreads.empty:
        goodreads.to_csv("goodreads_reviews.csv", index=False, header=False, mode='a')
        print("Data appended to goodreads_reviews.csv")
    else:
        print("No reviews found for the given book name.")

def get_reviews(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    review_sections = soup.find_all("div", {"class": "TruncatedContent__text"})
    review_texts = []
    for review_section in review_sections:
        reviews = review_section.find_all("span", {"class": "Formatted"})
        review_texts.extend([review.text.strip() for review in reviews])
    return review_texts

bookTitle = input("Enter book name: ")
bookSearch(bookTitle)