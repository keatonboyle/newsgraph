# code based on http://glowingpython.blogspot.com/2014/09/text-summarization-with-nltk.html

from nltk.tokenize import sent_tokenize,word_tokenize
from nltk.corpus import stopwords
from collections import defaultdict
from string import punctuation
from heapq import nlargest
import urllib2
from bs4 import BeautifulSoup

class FrequencySummarizer:
    def __init__(self, min_cut=0.1, max_cut=0.9):
        """
         Initilize the text summarizer.
         Words that have a frequency term lower than min_cut 
         or higer than max_cut will be ignored.
        """
        self._min_cut = min_cut
        self._max_cut = max_cut 
        self._stopwords = set(stopwords.words('english') + list(punctuation))

    def _compute_frequencies(self, word_sent):
        """ 
          Compute the frequency of each of word.
          Input: 
           word_sent, a list of sentences already tokenized.
          Output: 
           freq, a dictionary where freq[w] is the frequency of w.
        """
        freq = defaultdict(int)
        for s in word_sent:
            for word in s:
                if word not in self._stopwords:
                    freq[word] += 1
            # frequencies normalization and fitering
        m = float(max(freq.values()))
        for w in freq.keys():
            freq[w] = freq[w]/m
            if freq[w] >= self._max_cut or freq[w] <= self._min_cut:
                del freq[w]
        return freq

    def summarize(self, text, n):
        """
          Return a list of n sentences 
          which represent the summary of text.
        """
        num_sents = n
        sents = sent_tokenize(text)
        # assert n <= len(sents) not as useful as just trimming down to 
        # if n >= len(sents), just keep the first sentence, as the corpus is too short to reliably include anything else
        if n >= len(sents):
            num_sents = 1
        word_sent = [word_tokenize(s.lower()) for s in sents]
        self._freq = self._compute_frequencies(word_sent)
        ranking = defaultdict(int)
        for i,sent in enumerate(word_sent):
            for w in sent:
                if w in self._freq:
                    ranking[i] += self._freq[w]
        sents_idx = self._rank(ranking, num_sents)    
        return [sents[j] for j in sents_idx]

    def _rank(self, ranking, n):
        """ return the first n sentences with highest ranking """
        return nlargest(n, ranking, key=ranking.get)
        
def get_only_text(url):
    """ 
    return the title and the text of the article
    at the specified url
    """
    opener = urllib2.build_opener(urllib2.HTTPCookieProcessor())
    page = opener.open(url).read().decode('utf8')
    soup = BeautifulSoup(page)
    # The right fix: tokenize sentences from each paragraph separately, then collapse all sentences into a single list
    # see: http://stackoverflow.com/questions/29041603/nltk-sentence-tokenizer-consider-new-lines-as-sentence-boundary
    text = ' '.join(map(lambda p: p.text, soup.find_all('p'))) # this isn't fixed yet
    return soup.title.text, text
    

fs = FrequencySummarizer()

urls = ["http://www.theverge.com/2016/8/26/12663334/facebook-trending-topics-descriptions",
"https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html?&hp&action=click&pgtype=Homepage&clickSource=story-heading&module=b-lede-package-region&region=top-news&WT.nav=top-news",
"https://www.nytimes.com/interactive/2017/03/14/us/politics/document-Donald-Trump-2005-Tax.html",
"https://www.nytimes.com/2017/03/14/us/politics/donald-trump-taxes.html",
"https://www.nytimes.com/topic/subject/alternative-minimum-tax?inline=nyt-classifier",
"https://www.nytimes.com/2016/10/02/us/politics/donald-trump-taxes.html",
"http://www.nbcnews.com/politics/politics-news/donald-trump-will-not-release-tax-returns-white-house-adviser-n710511",
"http://www.nbcnews.com/politics/politics-news/trump-presser-leaves-big-questions-ethics-russia-healthcare-n705801",
"http://abcnews.go.com/Politics/public-splits-trumps-ethics-compliance-quarters-tax-returns/story?id=44811545",
"https://www.wsj.com/articles/donald-trump-got-a-big-break-on-2005-taxes-1458249902",
"http://www.politico.com/story/2016/06/donald-trump-no-taxes-224498",
"https://www.washingtonpost.com/politics/trumps-income-tax-returns-once-became-public-they-showed-he-didnt-pay-a-cent/2016/05/20/ffa2f63c-1b7c-11e6-b6e0-c53b7ef63b45_story.html?utm_term=.4ec763317154",
"https://www.bloomberg.com/billionaires/profiles/donald-j-trump/",
"https://www.nytimes.com/2017/04/28/world/asia/north-korea-missile-test.html?action=click&contentCollection=Asia%20Pacific&module=RelatedCoverage&region=EndOfArticle&pgtype=article",
"https://www.nytimes.com/2017/04/28/world/asia/tillerson-north-korea.html",
"https://www.nytimes.com/2017/04/18/world/asia/north-korea-missile-program-sabotage.html?rref=collection%2Ftimestopic%2FNorth%20Korea&action=click&contentCollection=world&region=stream&module=stream_unit&version=latest&contentPlacement=18&pgtype=collection",
"https://www.nytimes.com/2017/02/13/world/asia/north-korea-missile-launch-success.html",
"https://www.nytimes.com/2017/03/05/world/north-korea-ballistic-missiles.html",
"http://www.reuters.com/article/us-usa-trump-exclusive-idUSKBN17U04E",
"http://38north.org/2017/04/mwilliams041217/",
"https://www.nytimes.com/2016/10/20/world/asia/north-korea-musudan-missile-failure.html"]

for article_url in urls:
    title, text = get_only_text(article_url)

    print '----------------------------------'
    print title
    for s in fs.summarize(text, 1):
        print '*',s