# SaveBlood App

SaveBlood is an app that allows easy connection between hospitals and potential blood donors. 
The app gives the option to find a blood centres and hospitals. 
The users can find out if their eligible to donate and see what kind blood needed the most.


## Requirements
- MYSQL up and running with 3 tables 
  - Users: iduser (PK, AI), name(NN), lastName(NN), email(NN), password(NN)
  - Quiz: idquiz (PK, AI), iduser, age, weight, height, antibiotics, cold, tatoo, pregnant 
  - Bookings: idbookings, iduser, date, locantion
- nodejs
- npm 
 
## Installation
```
cd backend 
npm install

cd ..
cd frontend
npm install
```

## How to Run
First you set up MYSQL integration by changing `backend/app/config/db.config.js`


### Backend 
To start a backend 
 `cd backend && npm start`
Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser

### Frontend
 `cd frontend npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



The page will reload when you make changes.\
You may also see any lint errors in the console.




