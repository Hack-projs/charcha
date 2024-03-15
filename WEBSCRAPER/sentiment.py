import pandas as pd
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.corpus import stopwords
from nltk.tokenize import sent_tokenize, word_tokenize
import json
from nltk.stem import WordNetLemmatizer

df = pd.read_csv('reddit_comments.csv')
analyzer = SentimentIntensityAnalyzer()
word_weight = 0.7
intensity_weight = 0.3
neutral_threshold = 0.05  # Adjust as needed


def preprocess_text(text):
    tokens = word_tokenize(text.lower())

    filtered_tokens = [
        token for token in tokens if token not in stopwords.words('english')]

    lemmatizer = WordNetLemmatizer()

    lemmatized_tokens = [lemmatizer.lemmatize(
        token) for token in filtered_tokens]

    processed_text = ' '.join(lemmatized_tokens)

    return processed_text


# def get_subject(sentence):
#     tokens = nltk.word_tokenize(sentence)
#     pos_tags = nltk.pos_tag(tokens)
    
#     subject = None
    
#     for token, pos_tag in pos_tags:
#         if pos_tag.startswith('NN') or pos_tag in ['PRP', 'PRP$']:
#             subject = token
#             break
    
#     return subject


def get_sentiment(text):
    scores = analyzer.polarity_scores(text)
    compound_score = scores['compound']
    
    if compound_score > neutral_threshold:
        return 'positive'
    elif compound_score < -neutral_threshold:
        return 'negative'
    else:
        return 'neutral'


def converttojson(pos, neg, neu):
    data = {
        "positive": int(pos),
        "negative": int(neg),
        "neutral": int(neu)
    }
    return json.dumps(data)


def run_sentiment_analysis(search_string):
    rows_to_include = []
    
    for index, row in df.iterrows():
        sentences = sent_tokenize(row['reviewText'])
        for sentence in sentences:
            if search_string.lower() in sentence.lower():
                # subject = get_subject(sentence)
                # if subject:
                rows_to_include.append(row)
                    # break

    if not rows_to_include:
        return "No matching subjects found."
    
    filtered_df = pd.DataFrame(rows_to_include)
    filtered_df['reviewText'] = filtered_df['reviewText'].apply(preprocess_text)
    filtered_df['sentiment'] = filtered_df['reviewText'].apply(get_sentiment)

    sentiment_counts = filtered_df['sentiment'].value_counts()

    final_output = converttojson(sentiment_counts.get('positive', 0), 
                                 sentiment_counts.get('negative', 0),
                                 sentiment_counts.get('neutral', 0))
    return final_output


def start_sentiment_analysis(search_string):
    output_json = run_sentiment_analysis(search_string)
    return output_json

# def main():
#     search_string = input("Enter the string to search for as a subject: ")
#     output_json = run_sentiment_analysis(search_string)
#     print(output_json)


# if __name__ == "__main__":
#     main()
#     print("Sentiment Analysis Completed!")
