# Expense Manager (React + Firebase)

This is a starter Expense Management System built with **React (Vite)** and **Firebase (Firestore + Auth)**.
It includes three modules:
- Expense Management (add/edit/delete)
- Employee Management (list/add/delete)
- Client Management (list/add/delete)

## Features
- Firebase Authentication (Email/Password)
- Firestore collections: `expenses`, `employees`, `clients`
- Tailwind CSS for styling
- Simple CRUD UI

## Setup (local)

1. **Install dependencies**
```bash
# from project root (where package.json is)
npm install
```

2. **Add Firebase config**
- Create a Firebase project at https://console.firebase.google.com
- Enable **Authentication → Email/Password**
- Create a **Firestore** database (you can start in test mode for development)
- From Project Settings → Add Web App → copy the config keys
- Create a `.env.local` file in the project root and add:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

3. **Run dev server**
```bash
npm run dev
# Open http://localhost:5173
```

## Build
```bash
npm run build
npm run preview
```

## Notes & Next steps
- Firestore rules are set to allow authenticated reads/writes for development. Harden rules before production.
- This scaffold provides minimal validation and UX. Improve forms, add filtering, search, and charts.
- You can deploy to Firebase Hosting using `firebase init hosting` and `firebase deploy`.

