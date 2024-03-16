from sklearn.feature_extraction.text import CountVectorizer
from nltk.tokenize import RegexpTokenizer
import pickle
import pandas as pd
import json
import syspath

modelfile = syspath.localpath.finalized_model



data = pd.read_csv(syspath.localpath.amazon_comments)
token = RegexpTokenizer(r'[a-zA-Z0-9]+')
cv = CountVectorizer(stop_words='english', ngram_range=(
    1, 1), tokenizer=token.tokenize)
text_counts = cv.fit_transform(data['sentences'])
loaded_model = pickle.load(open(modelfile, 'rb'))





df = pd.read_csv(syspath.localpath.reddit_comments)


def run_analysis(text):
    pos = 0
    neg = 0
    neu = 0
    for index, row in df.iterrows():
        sentences = row['reviewText']

        if text.lower() in sentences.lower():
            # print("debug 1")
            # print(row['reviewText'])
            prediction = loaded_model.predict(
                cv.transform([row['reviewText']]))
            # print(prediction[0])
            if prediction[0] == 1:
                pos += 1
            elif prediction[0] == 0:
                neg += 1
        else:
            neu += 1

    final_output = converttojson(pos, neg, neu)
    
    return final_output


def converttojson(pos, neg, neu):
    data = {
        "positive": int(pos),
        "negative": int(neg),
        "neutral": int(neu)
    }
    return json.dumps(data)


# def main():
#     out = run_analysis('sherlock')
#     print(out)

def start_sentiment_analysis(text):
    out = run_analysis(text)
    return out

    
# if __name__ == "__main__":
#     main()
# print(prediction)
