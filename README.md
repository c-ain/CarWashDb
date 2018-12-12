# CarWashDb
A Simple web app I am developing with keeping my summer job at a car wash in mind

To start back: npm run dev
Runs on localhost:/8000
api calls:
GET Find an entry by plate number
localhost:/8000/new/:<type plate number>
localhost:/8000/used/:<type plate number>
localhost:/8000/body/:<type plate number>
localhost:/8000/service/:<type plate number>

DELETE an entry by id
localhost:/8000/new/:<type id>
localhost:/8000/used/:<type id>
localhost:/8000/body/:<type id>
localhost:/8000/service/:<type id>

PUT Edit an entry by id 
localhost:/8000/new/:<type id>
localhost:/8000/used/:<type id>
localhost:/8000/body/:<type id>
localhost:/8000/service/:<type id>

POST Add an entry with these parameters: plate, model, maschine, hand
localhost:/8000/new
localhost:/8000/used
localhost:/8000/body
localhost:/8000/service

GET all entries in one department
localhost:/8000/newAll
localhost:/8000/usedAll
localhost:/8000/bodyAll
localhost:/8000/serviceAll


To start carwash; npm install npm start
Runs on reacts default localhost:/3000
