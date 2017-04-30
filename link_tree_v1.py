import lxml.html
#from lxml.html import parse
import urllib2
#from urllib2 import urlopen
from pandas.io.parsers import TextParser
import re
import json

def _unpack(row, kind='td'):
    elts = row.findall('.//%s' % kind)
    return [val.text for val in elts]

def parse_options_data (table):
    rows = table.findall('.//tr')
    header = _unpack(rows[0], kind='th')
    data = [_unpack(r) for r in rows[1:]]
    return TextParser(data, names=header).get_chunk()
    
class news_node:
    def __init__ (self, url, level, parent, list_of_children):
        self.url = ''
        self.level = 0
        self.parent = parent
        self.list_of_children = []

opener = urllib2.build_opener(urllib2.HTTPCookieProcessor()) 

#link finder: takes in url of a news article, returns a list of urls linked in the html code 
   
def find_links(url):
    a_list = []
    try: 
        page = opener.open(url).read().decode('utf8')
        parsed = lxml.html.fromstring(page)    
        doc = parsed.getroottree()    
        links = doc.findall('.//a')
        for link in links:
            another_url = link.get('href')
            if type(another_url) == str and len(another_url)>3:
                temp = another_url[:4]
                if temp == 'http':
                    a_list.append(another_url)
    except: 
        pass
    return a_list
    
def process_links(list_of_links):
    final_list = []
    for link in list_of_links: 
        if 'nyt' not in link:
            if 'twitter' not in link: 
                if 'facebook' not in link: 
                    if 'youtube' not in link: 
                        if 'plus.google' not in link: 
                            final_list.append(link)
        if not re.search(r'\d{4}/\d{2}/\d{2}', link) == None:
            final_list.append(link)
    return final_list
                        
                                                    
seed_url = 'https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html?&hp&action=click&pgtype=Homepage&clickSource=story-heading&module=b-lede-package-region&region=top-news&WT.nav=top-news'

print ('creating root node')

counter = 0
node_list = []
root_node = news_node(0, seed_url, '', [])
root_node.url = seed_url

print ('creating children of root node')

for url in process_links(find_links(seed_url)):
    a_node = news_node(url, 1, root_node, [])
    a_node.url = url
    a_node.parent = root_node
    root_node.list_of_children.append(a_node)

print ('creating grandchildren of root node')

for node in root_node.list_of_children:
    for url in process_links(find_links(node.url)):
        if 'nyt' in url: 
            a_node = news_node(url, 2, node, [])
            a_node.url = url
            a_node.parent = node
            node.list_of_children.append(a_node)
        
print ('creating great-grandchildren of root node')

for node in root_node.list_of_children:
    for a_node in node.list_of_children:
        for url in process_links(find_links(a_node.url)):
            if 'nyt' in url: 
                another_node = news_node(url, 3, a_node, [])
                another_node.url = url
                another_node.parent = a_node
                a_node.list_of_children.append(another_node)
 
print('\n children of the root node:\n')
for node in root_node.list_of_children: 
    print (node.url)

print ('\n grandchildren of root node:\n ') 
counter = 1
for node in root_node.list_of_children: 
    print ('\n grandchild number %d\n' % counter)
    counter += 1
    for a_node in node.list_of_children: 
        print (a_node.url)

print ('\n great-grandchildren of root node:\n')
counter = 1
for node in root_node.list_of_children: 
    for a_node in node.list_of_children: 
        print ('great-grandchild number %d\n' % counter)
        counter += 1
        for another_node in a_node.list_of_children:
            print (another_node.url)

edge_list = []

for node in root_node.list_of_children: 
    edge_list.append ([root_node.url, node.url])

for node in root_node.list_of_children:
    for a_node in node.list_of_children:
        edge_list.append([node.url, a_node.url])
for node in root_node.list_of_children: 
    for a_node in node.list_of_children:
        for another_node in a_node.list_of_children:
            edge_list.append([a_node.url, another_node.url])

node_list = [root_node.url]

for node in root_node.list_of_children:
    node_list.append(node.url)

for node in root_node.list_of_children:
    for a_node in node.list_of_children:
        node_list.append(a_node.url)

for node in root_node.list_of_children:
    for a_node in node.list_of_children:
        for another_node in a_node.list_of_children:
            node_list.append(another_node.url)
            
output_edge_list = json.dumps(edge_list)
output_node_list = json.dumps(node_list)