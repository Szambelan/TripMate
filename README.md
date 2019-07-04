# TripMate Frontend

TripMate is my and my friend web app for passing web classes. Link to Backend: https://github.com/mtluscik99/ServerZTW

## Commends to start:
```
ng serve
```

## Technologies used:
- AngularCLI
- Google Diretions API
- Bootstrap
- HTML, CSS, JS

URL: http://localhost:4201/


## Current structure of project:

- auth (folder for keeping user token)
    - auth.guard.ts
- home (folder with all components connected with logged user)
    - profile-view (component displaying users profile)
    - profile-view-edit (component editing users data)
    - searching-for-trips-view (component for looking for trips in database)
    - trip-add (component for adding a new trip)
    - trip-view (component that show all users trips and trips that user is taking part in)
    - trip-vie-edit (component for editing users trip)
- models (models used in project)
    - homeData.model.ts (for displaying users data)
    - newTrip.model.ts (for adding a trip)
    - trip.model.ts (for displaying a trip)
    - user.model.ts (for creating a user)
- shared (folder for services - connections between front and backend. Sending asks to endpoints and getting answers from them)
    - home.service.ts (for users profile and editing it)
    - trip.service.ts (all methods connected with trips such as: adding, removing, finding trips / users)
    - user.service.ts (for registration a user)
- user (folder with all components connected with unlogged user)
    - login-view (component to login users)
    - register-view (component for registration a user)
    - start-view (component displaying main page)

Components folders and files got names that suggest what given component is responsible for

## Printscreens



- Main page
![mainPage](https://user-images.githubusercontent.com/31566345/58667374-1b3d8500-8336-11e9-9185-b60e93b0524e.PNG)

- Log in
![logIn](https://user-images.githubusercontent.com/31566345/58667481-6fe10000-8336-11e9-932d-b3b3c84a2dc0.PNG)

- Registration with validation form
![image](https://user-images.githubusercontent.com/31566345/59103555-7c191e80-892f-11e9-9666-d1825bf9f418.png)

- Looking for trips
![image](https://user-images.githubusercontent.com/31566345/59105987-876f4880-8935-11e9-9eeb-f0b9a0677f25.png)

- Looking for trips without full names of cities
![image](https://user-images.githubusercontent.com/31566345/59106211-19775100-8936-11e9-9d37-928441505b01.png)

- Making reservation
![image](https://user-images.githubusercontent.com/31566345/59106683-49732400-8937-11e9-9565-5c085f7987c4.png)

- Resignation from trip
![image](https://user-images.githubusercontent.com/31566345/59106563-04e78880-8937-11e9-9502-1e5b64cd55a6.png)

- Users trips with options of accepting / rejecting users, editing / deleting the trip and the informations about users that are taking part in your trip
![image](https://user-images.githubusercontent.com/31566345/59106837-a1118f80-8937-11e9-9350-b8a19cda29d8.png)

- List of trips that user is taking part in
![image](https://user-images.githubusercontent.com/31566345/59106935-dfa74a00-8937-11e9-982d-6f771fbc59ee.png)

- Adding a trip with validation form and picking date from calendar
![addingTrip](https://user-images.githubusercontent.com/31566345/58667667-f564b000-8336-11e9-91db-b723475b43f7.PNG)

