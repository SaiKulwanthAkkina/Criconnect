<<<<<<< HEAD
# Cricket Intelligence Platform

A comprehensive MERN stack application for cricket analytics, player management, and intelligent team strategy with AI-powered insights.

## 🎯 Key Features

### For Players
- Create detailed player profiles
- Upload and track match performance
- Get AI-powered performance analysis
- View strengths, weaknesses, and improvement suggestions
- Track career statistics with visual charts

### For Teams
- Create and manage teams (authenticated users can create teams)
- Add/remove players from roster
- Get AI-suggested Playing XI for matches
- View team analytics and player comparisons
- Access strategic recommendations

## 🛠️ Technology Stack

```
Frontend:
- React.js (UI Library)
- Tailwind CSS (Styling)
- Recharts (Data Visualization)
- Axios (HTTP Client)

Backend:
- Node.js (Runtime)
- Express.js (Web Framework)
- MongoDB (Database)
- JWT (Authentication)
- Bcrypt (Password Hashing)

AI/Analytics:
- Custom AI Service with mock logic
- Ready for Groq/OpenAI integration
```

## 📊 Database Schema

### User Model
- firstName, lastName, email, password
- role (player)
- phone, location (country, state, city)
- socialLinks, timestamps

### PlayerProfile Model
- userId, battingStats, bowlingStats
- performanceHistory, strengths/weaknesses
- talentRating (0-100)
- currentTeamId

### Team Model
- name, captainId, players array
- location, aiStrategy
- matchesPlayed, wins, losses, draws

### Match Model
- title, matchType (T20/ODI/Test)
- team1, team2, venue, date
- scorecard, result, aiAnalysis

### Scout Model
-- (Removed) Scout model and related APIs have been removed.

## 🚀 Quick Start

### Setup (5 minutes)

1. **Install Dependencies**
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

2. **Configure Environment**
```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```

3. **Start MongoDB** (local or Atlas)

4. **Seed Sample Data**
```bash
cd backend && npm run seed
```

5. **Run Application**
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm start
```

6. **Open Browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## 🔐 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Player | virat@cricket.com | password123 |

## 📱 Main Pages

### For All Users
- **Home** (`/`) - Landing page with features overview
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - New user registration

### Player Dashboard
- Player profile with stats
- Batting and bowling statistics
- AI performance analysis
- Talent rating visualization
- Performance trend charts

### Team Dashboard
- Team overview and statistics
- Player roster management
- Playing XI AI suggestions
- Team analytics and charts
- Match results distribution

## 🔌 API Endpoints Summary

### Authentication
```
POST /api/auth/signup - Register
POST /api/auth/login - Login
GET /api/auth/me - Current user
```

### Players
```
POST /api/players/profile - Create profile
GET /api/players/:id/analysis - Get AI analysis
GET /api/players/search - Search with filters
GET /api/players/leaderboard - Top players
```

### Teams
```
POST /api/teams - Create team
POST /api/teams/:id/playing-xi - Get suggested XI
GET /api/teams/:id/analytics - Team stats
```

### Scouts
Scout APIs have been removed from this release.

### Matches
```
POST /api/matches - Create match
GET /api/matches/:id/prediction - Predict outcome
POST /api/matches/:id/analysis - Get AI analysis
```

## 📈 AI Features

### 1. Player Performance Analysis
- Analyzes batting average, strike rate
- Evaluates bowling economy and wickets
- Generates strengths/weaknesses assessment
- Provides improvement suggestions

### 2. Talent Rating (0-100)
- Calculates based on stats
- Considers consistency and form
- Updated after each match
- Used for player comparisons

### 3. Playing XI Suggestion
- Scores players based on role
- Optimizes for T20/ODI/Test formats
- Creates optimal batting order
- Suggests bowling combinations

### 4. Strategy Recommendations
- Match-specific strategies
- Format-based suggestions
- Team composition analysis

### 5. Match Prediction
- Predicts match outcomes
- Provides probability estimates
- Considers team strength
- Lists key factors

## 🎨 UI/UX Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Role-based dashboards
- ✅ Interactive charts with Recharts
- ✅ Clean, modern Tailwind CSS styling
- ✅ Loading states and error handling
- ✅ Toast notifications
- ✅ Protected routes with auth checks
- ✅ Mobile hamburger menu

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control (RBAC)
- Protected API endpoints
- Secure token storage in localStorage
- CORS enabled for cross-origin requests

## 📦 Project Structure

```
cricket-intelligence-platform/
├── backend/                    # Express.js server
│   ├── src/
│   │   ├── models/            # MongoDB schemas
│   │   ├── controllers/       # Business logic
│   │   ├── routes/            # API endpoints
│   │   ├── middleware/        # Auth & validation
│   │   ├── services/          # AI logic
│   │   └── server.js          # Express app
│   ├── seedData.js            # Sample data
│   └── package.json
│
└── frontend/                   # React app
    ├── src/
    │   ├── pages/             # Page components
    │   ├── components/        # Reusable components
    │   ├── context/           # Auth context
    │   ├── utils/             # Helpers & API calls
    │   └── App.js             # Main component
    ├── public/                # Static files
    └── package.json
```

## 🚀 Deployment

### Backend
- Heroku, Render, Railway
- Set environment variables
- Connect MongoDB Atlas

### Frontend
- Netlify, Vercel
- Run `npm run build`
- Deploy build folder

## 🆘 Troubleshooting

**MongoDB not connecting?**
- Start MongoDB locally: `mongod`
- Or use MongoDB Atlas and update URI

**Port 5000 in use?**
- Kill process: `lsof -ti:5000 | xargs kill -9`
- Or change PORT in `.env`

**Frontend can't reach API?**
- Check backend is running
- Verify API URL in `.env`
- Check CORS settings

## 🎓 Learning Resources

- [MERN Stack Guide](https://www.mongodb.com/languages/mern-stack)
- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## ✨ Features Implemented

- ✅ Complete MERN setup
- ✅ User authentication & roles
- ✅ 4 different dashboards
- ✅ AI player analysis
- ✅ Team management
- ✅ Scout functionality
- ✅ Match management
- ✅ Charts and visualizations
- ✅ Responsive design
- ✅ API documentation
- ✅ Sample data seeding
- ✅ Error handling
- ✅ Protected routes

## 🎯 Future Enhancements

- [ ] Real-time updates with WebSocket
- [ ] Advanced statistics
- [ ] Video analysis
- [ ] News feed
- [ ] Player messaging
- [ ] Payment integration
- [ ] Mobile app
- [ ] Advanced AI models

## 📄 License

MIT - Open source

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit PRs.

---

**Ready to transform cricket with intelligence?** 🏏✨

Start at http://localhost:3000 after running the servers!
=======
# Criconnect
>>>>>>> b7a44045a8d1b3f1dbab5131c17784818cc856bb
