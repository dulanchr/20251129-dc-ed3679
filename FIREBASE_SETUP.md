# Firebase Setup Guide

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter your project name (e.g., "my-education-app")
4. Disable Google Analytics (optional) or configure it
5. Click **"Create project"**

## 2. Register Your Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`)
2. Enter an app nickname (e.g., "education-web-app")
3. Skip Firebase Hosting setup for now
4. Click **"Register app"**
5. Copy the Firebase configuration object shown

## 3. Get Firebase Config Values

After registering, you'll see a config object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## 4. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Firebase values in `.env`:
   ```
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

## 5. Enable Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** provider
3. Click **Save**

## 6. Set Up Firestore Database

1. Go to **Firestore Database** in Firebase Console
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select a Cloud Firestore location close to your users
5. Click **"Enable"**

## 7. Deploy Security Rules

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init firestore
   ```

4. When prompted, select your project and use existing `firestore.rules`

5. Deploy rules:
   ```bash
   firebase deploy --only firestore:rules
   ```

## 8. Populate Firestore with Sample Data

### Option A: Using Firebase Console (Manual)

1. Go to **Firestore Database** in Firebase Console
2. Click **"Start collection"**
3. Create collection named `classes`
4. Add documents from `data/sampleClasses.json`
5. Repeat for `seminars` collection with `data/sampleSeminars.json`

### Option B: Using a Script (Recommended)

Create a file `scripts/seedDatabase.js`:

```javascript
// Run with: node scripts/seedDatabase.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const classesData = require('../data/sampleClasses.json');
const seminarsData = require('../data/sampleSeminars.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seedDatabase() {
  // Seed classes
  for (const classItem of classesData.classes) {
    await db.collection('classes').doc(classItem.id).set(classItem);
    console.log(`Added class: ${classItem.title}`);
  }

  // Seed seminars
  for (const seminar of seminarsData.seminars) {
    await db.collection('seminars').doc(seminar.id).set({
      ...seminar,
      date: new Date(seminar.date),
      endTime: new Date(seminar.endTime)
    });
    console.log(`Added seminar: ${seminar.title}`);
  }

  console.log('Database seeded successfully!');
  process.exit(0);
}

seedDatabase().catch(console.error);
```

To get the service account key:
1. Go to Firebase Console > Project Settings > Service Accounts
2. Click **"Generate new private key"**
3. Save as `scripts/serviceAccountKey.json`
4. **Add to .gitignore!**

Run the script:
```bash
npm install firebase-admin
node scripts/seedDatabase.js
```

## 9. Install Firebase Dependencies

```bash
npm install firebase
```

## 10. Test Your Setup

```javascript
import { useAuth } from '@/hooks/useAuth';
import { fetchClassesByCategory } from '@/lib/firebaseOperations';

// In a component:
const { user, loading } = useAuth();

// Fetch ICT classes
const { data, error } = await fetchClassesByCategory('ICT');
```

## Troubleshooting

- **"Firebase app not initialized"**: Check your `.env` file has correct values
- **"Permission denied"**: Check Firestore rules or run in test mode
- **"Network error"**: Ensure Firebase project has billing enabled if needed

## Security Reminders

- ⚠️ Never commit `.env` to version control
- ⚠️ Never commit `serviceAccountKey.json`
- ⚠️ Switch to production Firestore rules before deploying
