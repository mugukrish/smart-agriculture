#!/usr/bin/env python

from fbprophet import Prophet
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeClassifier
import datetime
import os
import re
import sys

dfo=pd.read_excel("data/allweather.xlsx")
cro=pd.read_excel("data/weather/cropsa.xlsx")
dfo["date"]=pd.to_datetime(dfo["date"])
dfo['date'] = pd.DatetimeIndex(dfo['date'])
final={}
n=int(sys.argv[1])
#n=12
n=n*30
days=n
soil=str(sys.argv[2])
lowt=0
avgt=0
higt=0
#soil="loamy"
count=0

#def compute(data,n,i,inc):
def compute(data,n):
    global count,lowt,higt,avgt
    #lab=["Average Temperature for the forecasted period","Average Dewpoint for the forecasted period","Average Humidity for the forecasted period","Average Wind for the forecasted period"]
    #yax=["Average Temperature (°C)","Average Dewpoint (°C)"," Average Humidity (%)","Average Wind (km/h)"]
    #imgpath="/var/www/html/agri/analytics/graph/"+str(i)+".png"
    my_model = Prophet(interval_width=0.95)
    my_model.fit(data)
    future_dates = my_model.make_future_dataframe(periods=n,freq='D')
    forecast = my_model.predict(future_dates)
    if count==0:
        lowt=forecast['yhat_lower'].tail(n).mean()
        higt=forecast['yhat_upper'].tail(n).mean()
        avgt=forecast['yhat'].tail(n).mean()
        count=1
    '''
    frames=[forecast['yhat'].tail(n),future_dates.tail(n)]
    pd.concat(frames,axis=1).plot(x='ds',figsize=(8,6))
    plt.xlabel("days")
    plt.ylabel(yax[int(inc)])
    plt.title(lab[int(inc)])
    plt.legend((str(i),))
    plt.savefig(imgpath)
    '''
    return (forecast['yhat'].tail(n).mean())

colu=list(dfo.columns)
colu=colu[1:]
#inc=0
for i in colu:
    df=dfo[["date",i]]
    df=df.rename(columns={'date':'ds',i:'y'})
    #final.update({i:compute(df,n,i,inc)})
    final.update({i:compute(df,n)})
    #inc=inc+1

month=datetime.datetime.now().strftime("%B")
month=month.lower()

cro=cro[(cro["soil "].str.contains(soil)) & (cro["ideal time"].str.contains(month))]
X=cro[["duration ","lowtmp","avgtmp","hightmp"]]
Y=cro["crop "]
dt = DecisionTreeClassifier(random_state=99)
dt.fit(X, Y)
sugcrop=str(dt.predict([days,lowt,avgt,higt]))
sugcrop=re.sub('[^A-Za-z0-9+]', '', sugcrop)

#plt.show()
f=open("/var/www/html/agri/analytics/pred.txt","w")
f.write(str(round(final["avgtmp"],2))+"\n"+str(round(final["avgdew"],2))+"\n"+str(round(final["avghum"],2))+"\n"+str(round(final["avgwin"],2))+"\n"+sugcrop)
f.close()
