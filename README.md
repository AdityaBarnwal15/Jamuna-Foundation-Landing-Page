**Jamuna Foundation Landing Page**

Live Demo - https://jamuna-foundation-landing-page.vercel.app/

**Project Overview** :- 
The Jamuna Foundation Landing Page is a fully responsive, user-friendly website designed to showcase the foundation’s mission, initiatives, and ways to get involved. It features:
Modern, clean design with HTML, CSS, and JavaScript.

-> Interactive sections for volunteers, donation, and contact forms.

-> Smooth navigation and mobile responsiveness.

-> Integration with a backend (Node.js + MongoDB) for handling form submissions and dynamic data.

**Technologies Used** :-

Frontend :
-> HTML5
-> CSS3
-> JavaScript (Vanilla JS)

Backend :
-> Node.js
-> Express.js
-> MongoDB (Atlas)
-> dotenv for environment variables
-> CORS for API handling

**Folder Structure** :-

Jamuna-Foundation-Landing-Page/
├─ client/             # Frontend code (HTML, CSS, JS)
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
│
├─ server/             # Backend code (Node + Express + MongoDB)
│  ├─ server.js
│  ├─ package.json
│  └─ .env             # Environment variables (not in Git)
├─ .gitignore
|
└─ README.md

**Features**

-> Fully responsive landing page.
-> "Join as Volunteer" form with backend submission.
-> Clean navigation and section scrolling.
-> Easy to maintain and extend.
-> Installation & Setup

**Clone the repository** :-
-> git clone https://github.com/AdityaBarnwal/Jamuna-Foundation-Landing-Page.git
cd Jamuna-Foundation-Landing-Page


**Backend setup** :-

cd server
npm install


**Create a .env file with** :-

PORT=5173
MONGO_URI=<your-mongodb-uri>


Start the backend:

npm start


**Frontend setup** :-
-> Open client/index.html in your browser or deploy it to Vercel/Netlify.

**Deployment** :-
-> Frontend: Deployed on Vercel: https://jamuna-foundation-landing-page.vercel.app/
-> Backend: Can be deployed on Render/Railway/Heroku (see server/package.json and .env.example).

**Contributing** :- 
-> Fork the repository.
-> Create a new branch for features or bug fixes.
-> Submit a pull request.

**License** :-

This project is open source and available under the MIT License.
