# Python program to generate WordCloud 
# importing all necessery modules 
from wordcloud import WordCloud, STOPWORDS 
import matplotlib.pyplot as plt 
  
# Generate panda dataframe from text
#df = pd.read_csv(r"Youtube04-Eminem.csv", encoding ="latin-1") 
data = "In essence, Wolf believes that living in a way that is engaged with the outside world enables us to harmonize with the fact that we are indeed insignificant. Although the absurdist movement has lead many philosophers to believe that we have no purpose, Wolf refutes this by emphasizing that absurdists are ignoring the fact that some human activities are more valuable than others. We are specks in our universe, but living among other specks gives us reason to participate in engaging projects that have positive value and are successful at least to some degree. After all, engaging with the outside world acknowledges the fact that one is not the centre of the universe. "
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