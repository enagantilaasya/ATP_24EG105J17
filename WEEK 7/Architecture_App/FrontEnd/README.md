# FrontEnd Overview
## Technologies Used

- React JS
- Vite
- Tailwind CSS
- React Router DOM
- Zustand
- Axios

## Frontend Project Structure

FrontEnd\
│\
├── public\
│\
├── src\
│   ├── assets\
│   │\
│   ├── components\
│   │   ├── AdminProfile.jsx\
│   │   ├── ArticleByID.jsx\
│   │   ├── Articles.jsx\
│   │   ├── AuthorArticles.jsx\
│   │   ├── AuthorProfile.jsx\
│   │   ├── AuthorsList.jsx\
│   │   ├── EditArticle.jsx\
│   │   ├── Footer.jsx\
│   │   ├── Header.jsx\
│   │   ├── Home.jsx\
│   │   ├── Login.jsx\
│   │   ├── ProtectedRoute.jsx\
│   │   ├── Register.jsx\
│   │   ├── RootComponent.jsx\
│   │   ├── Unauthorized.jsx\
│   │   ├── UserProfile.jsx\
│   │   └── WriteArticles.jsx\
│   │\
│   ├── stores\
│   │   └── authStore.js\
│   │\
│   ├── styles\
│   │   └── common.jsx\
│   │\
│   ├── App.jsx\
│   ├── index.css\
│   └── main.jsx\
│\
├── .env\
├── .gitignore\
├── eslint.config.js\
├── index.html\
├── package.json\
├── vite.config.js\
└── README.md
## Installation Steps

### Step 1: Install Dependencies

```bash
npm install
```
### Step 2: Create `.env` File

```env
VITE_API_URL=your_backend_url
```
### Step 3: Start Development Server

```bash
npm run dev
```
### Required Packages

```bash
npm install react-router-dom axios zustand tailwindcss
```
