import pandas as pd
from datetime import datetime

LENGTH = 47133

DATA = pd.read_csv('data.csv')
INCEDENTS = DATA.iterrows()

def calc_avg_resp_time(incidents):
    delta = 0
    for incedent in incidents:
        print(incedent[1])
        arrived = datetime.strptime(incedent[1]["Time Arrived on Scene"], '%m/%d/%Y %I:%M:%S %p')
        callRecieved = datetime.strptime(incedent[1][0], '%m/%d/%Y %I:%M:%S %p')
        deltaHour = (int(callRecieved.hour) - int(arrived.hour)) * 60
        deltaMinute = abs(int(callRecieved.minute) - int(arrived.minute))
        delta += deltaHour + deltaMinute
        break

    averageRespTime = delta / LENGTH

    return averageRespTime

print(calc_avg_resp_time(INCEDENTS))
