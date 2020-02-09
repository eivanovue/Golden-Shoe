# Golden-Shoe
A well-known British shoe company, Golden Shoe. The application consists of an integration - API (Spring Boot) and front end (Angular).

# Opening the project
Assuming that you have successfully cloned the project, open it in your favourite idea as an existing project, selecting the gradle.build file. 
# Running the Front End Application (Angular)

Open a terminal and navigate to the `frontend` project folder:

```$xslt
Golden-Shoe\src\main\frontend>
```

You are able to run the applications separately or merged. Running separately will compile the front end on each change which can be handy for development. 

### Installing the dependencies
Given that you are in the `frontend` folder, run the following in the terminal in order to install all dependencies:
```$xslt
npm install
```

### Starting the angular app
Once again in the same `frontend` folder, run the following:
```$xslt
npm start
```
This will start the application on port `4200` and you will be able to see every change as the app will recompile itself.

# Running the API (Spring Boot)
To run the API, simply navigate to the Spring Boot main class from which you can directly run the instance. This will run on port 8080.

# Merging the Spring Boot and Angular
If you would like to merge the applications together, run the following command in the frontend folder:
```$xslt
npm run build
```
This will copy the compiled files into the `resources` folder of the spring boot project.
Next, navigate to maven and run the `package` function that will move all the required files in the out folder of the project.
Next you can start the Spring Boot app and everything should be running on port `8080`.

# H2 Database
The project uses H2 Databases which is a local database service. You can access the database service by going to:
```$xslt
localhost:8080/h2-console
```
Select the saved settings: `Generic H2 (Embedded)`

JDBC URL: `jdbc:h2:mem:ecommercedb`

User Name: `sa`