# Bitly Race Average Problem

CircleCI Continous Integration Status: [![<shawnmcmahon>](https://circleci.com/gh/shawnmcmahon/race-average-problem.svg?style=svg)](<https://app.circleci.com/pipelines/github/shawnmcmahon/race-average-problem>)

### Overview 

The sailboat race is heating up! The competition is fierce this year and many contestants are expected to compete. We need a way to calculate the average minutes it takes to complete the race between all the contestants. This application was created to solve this problem.  

### Format

Users submit race times using the ``HH:MM (AM/PM), DAY X`` 12 hour clock format.

Example: `12:01 AM, DAY 2` / `7:01 PM, DAY 20`

### Easy Viewing 

For your convenience, this project has been hosted on Netlify to view without a local setup required. 

[Netlify-Hosted Live Site](https://amazing-mochi-62d774.netlify.app)

### Local Setup 

1. In your command line, navigate to the desired directory and clone this repo.

``https://github.com/shawnmcmahon/race-average-problem.git``

2. Navigate to the root directory of this project using the command below. 

``cd race-average-problem``

3. Install the necessary dependencies 

``npm install``

4. Run the program

``npm start``

5. A new browser window will open with the project hosted at ``http://localhost:3000/``

### Demo 
![demo](https://user-images.githubusercontent.com/73731359/167745002-01589f4c-583b-4e2a-9a48-a65438f2ef23.gif)

  
### Wireframe
![wireframe](https://user-images.githubusercontent.com/73731359/167741867-087aea36-839e-45c5-b0fc-f393acb6b55f.png)

### Technologies Used 

<p align="left">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind css"/>
  <img src="https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white" alt="circle ci" />
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" alt="jest" />
  <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e" alt="cypress" />
</p>

### Additional Features 

These features were not required by the spec given but were implemented to improve the quality of the application. 

1. End-2-End testing implemented with Cypress 
to ensure components mount and are displayed as intended. 
2. Unit testing provided with Jest to ensure calculate logic functions as necesary.
3. Continous integration implemented with CircleCI to ensure all tests pass between commit changes. 
4. Hosted live on Netlify for easy viewing between multiple team members. 
5. Error handling for race times with incorrect formats. Does not allow you to submit a time without a semicolo, a comma, or the word 'DAY'. 
6. Warning message appears letting the user know the format was incorrect. 
7. Clear button implemented to clear results without having to refresh. 
8. Each race time shows its end time as well as how many minutes its it took to complete the race.
9. Type checking provided by Typescript.  
10. Functional components and React hooks used to ensure speed and reduced loading times.

### Testing 

#### Cypress End-2-End Testing Setup

1. Follow local setup instructions from above 

2. Navigate to the root directory of this project on your local machine 

3. In the command line, type ``npx cypress open``

4. A Cypress window will open displaying the four test files. Click a test file to run the tests. 

#### Jest Unit Testting Setup

1. Follow local setup instructions from above 

2. Navigate to the root directory of this project on your local machine 

3. To test the calculateTime function, in the command line, type ``calculateTime.test.tsx``

4. To test the calculateAverage function, in the command line, type ``calculateAverage.test.tsx``

5. Passed test will be shown with green check marks in the command line. 


### Future Features 

1. Implement a stronger error handling to the input with RegEx to confirm format is typed exactly as intended. 

# Contributors

<table align="left">
  <td> Shawn McMahon <a href="https://www.linkedin.com/in/shawnpmcmahon/">LI</td>
    </tr>
    </tr>
<td><img src="https://avatars.githubusercontent.com/u/73731359?v=4" alt="Shawn GH img"
width="150" height="auto" /></td>
    </tr>
</table>



