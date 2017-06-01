import lxml.html
#from lxml.html import parse
import urllib2
#from urllib2 import urlopen
from pandas.io.parsers import TextParser
import re
#import json

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
    
def create_children(node):
    for url in (process_links(find_links(node.url))):
        a_node = news_node(url, node.level+1, node, [])
        a_node.url = url
        a_node.level = node.level+1
        a_node.parent = node
        a_node.list_of_children = []
        node.list_of_children.append(a_node)
       
def create_link_tree(seed_url, num_levels):
    root_node = news_node(0, seed_url, '', [])
    root_node.url = seed_url
    root_node.level = 0
    root_node.parent = ''
    root_node.list_of_children = []
    list_of_nodes = [root_node]  
    list_of_edges = []
    for i in range (num_levels):
        print ('level %d' % i)
        temp_list = []
        for node in list_of_nodes:
            if node.level == i:
                temp_list.append(node)
        for node in temp_list:
            if 'nyt' in node.url: 
                create_children(node)
            for a_node in node.list_of_children:
                list_of_nodes.append (a_node)
                list_of_edges.append ([node, a_node])
                
    return list_of_nodes, list_of_edges
    
            
#seed_url = 'https://www.nytimes.com/interactive/2017/04/28/us/politics/trump-savings-tax-plan.html?&hp&action=click&pgtype=Homepage&clickSource=story-heading&module=b-lede-package-region&region=top-news&WT.nav=top-news'
seed_url = 'https://www.nytimes.com/2017/06/01/world/europe/vladimir-putin-donald-trump-hacking.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news'
num_levels = 3

node_list, edges_list = create_link_tree(seed_url, num_levels)
