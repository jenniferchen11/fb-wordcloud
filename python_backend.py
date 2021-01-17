# Python program to generate WordCloud 
# importing all necessery modules 
from wordcloud import WordCloud, STOPWORDS 
import matplotlib.pyplot as plt 
  
# Generate panda dataframe from text
#df = pd.read_csv(r"Youtube04-Eminem.csv", encoding ="latin-1") 
data = "In essence "
comment_words = '' 
stopwords = set(STOPWORDS) 
  
# iterate through thecsv file 
for val in data: 
    # typecast each val to string 
    val = str(val) 
    val = val.lower()
  
    # # split the value 
    # tokens = val.split() 
      
    # # Converts each token into lowercase 
    # for i in range(len(tokens)): 
    #     tokens[i] = tokens[i].lower() 
      
    # comment_words += " ".join(tokens)+" "
  
wordcloud = WordCloud(width = 800, height = 800, 
                background_color ='white', 
                stopwords = stopwords, 
                min_font_size = 10).generate(data) 
  
# plot the WordCloud image                        
plt.figure(figsize = (8, 8), facecolor = None) 
plt.imshow(wordcloud) 
plt.axis("off") 
plt.tight_layout(pad = 0) 
  
plt.show() 