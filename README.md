# 🎤 Speakeasy

Speakeasy is a full-stack communication and interview practice platform designed to help users build confidence and improve their interview skills. The application features secure user authentication, interactive mock interview sessions with response evaluation and feedback, pronunciation practice through tongue twisters, and a personalized dashboard for seamless navigation across practice modules.

---

## ✨ Features

### 🔐 Authentication
- User registration and login
- Secure password hashing using bcrypt
- JWT-based authentication
- HTTP-only cookie-based session management
- Protected routes for authenticated users

### 💬 Mock Interview
- Interactive mock interview sessions
- Predefined interview questions
- Question-wise response evaluation
- Individual feedback and scoring
- Overall interview performance summary

### 🎙️ Pronunciation Practice
- Tongue twisters categorized by difficulty
- Speech recognition practice
- Pronunciation accuracy checking
- Instant feedback

### 📊 Dashboard
- Personalized dashboard
- Easy navigation between modules
- Secure access to protected content

### 📈 Progress

- Dedicated progress page
- User-friendly interface for viewing performance information

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Tokens)
- bcrypt
- HTTP-only Cookies

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
| :----: | :------- | :---------- |
| POST | `/signup` | Register a new user |
| POST | `/login` | Authenticate a user |
| POST | `/logout` | Logout the current user |
| GET | `/check-auth` | Verify authentication status |

### Mock Interview

| Method | Endpoint | Description |
| :----: | :------- | :---------- |
| GET | `/questions` | Retrieve interview questions |
| GET | `/mock-interview-data` | Access protected mock interview data |
| POST | `/analyze-answer` | Evaluate interview responses |

### Pronunciation

| Method | Endpoint | Description |
| :----: | :------- | :---------- |
| GET | `/tongue-twisters` | Retrieve tongue twisters by difficulty |
| POST | `/check-tongue-twister` | Check pronunciation accuracy |
| GET | `/pronunciation-data` | Access pronunciation module |
| GET | `/tongue-data` | Access tongue twister module |

### Dashboard & Progress

| Method | Endpoint | Description |
| :----: | :------- | :---------- |
| GET | `/dashboard-data` | Retrieve dashboard information |
| GET | `/progress-data` | Retrieve progress information |

---

## 📂 Project Structure

```text
Speakeasy
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DashboardHome.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── MockInterview.jsx
│   │   │   ├── Progress.jsx
│   │   │   ├── Pronunciation.jsx
│   │   │   ├── ProtectedRoutes.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   ├── TongueTwisters.jsx
│   │   │   └── Upcoming.jsx
│   │   ├── styles
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Clone the Repository

```bash
git clone <repository-url>
cd Speakeasy
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔒 Authentication Flow

- Users register with a unique username and email address.
- Passwords are securely hashed before being stored in the database.
- After a successful login, a JWT is generated and stored as an HTTP-only cookie.
- Protected routes verify the token before allowing access to secured resources.
- Users can securely log out, which clears the authentication cookie.

---

## 📌 Future Improvements

- Store interview history in the database
- Detailed progress analytics
- Custom interview question sets
- Company-specific interview tracks
- Voice-based mock interviews
- Performance insights and recommendations

---

## 👨‍💻 Author

**VOONA MONIA**

- GitHub: [@Monia1801](https://github.com/Monia1801)
- LinkedIn: [@monia-voona](https://www.linkedin.com/in/monia-voona/)
