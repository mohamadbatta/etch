# Etch Mobile App

Etch is a React Native mobile application built using Expo. It allows users to discover interesting places like cafes, attractions, and shopping spots, and save personalized profile data with authentication flows.

---

## 📱 Features

- User onboarding (email → verification code → password → profile)
- Secure password creation with real-time validation
- Category-based filtering for places (e.g., Cafes, Attractions, Shopping)
- Responsive and clean UI with TailwindCSS (NativeWind)
- Local authentication state management with context
- Mocked place data and liking system

---

## 🧰 Tech Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.github.io/router/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Query](https://tanstack.com/query/latest)
- [NativeWind (Tailwind CSS)](https://www.nativewind.dev/)
- [Zustand or Context API] for state (used AuthContext)

---

## 🗂️ Project Structure

etch/
├── assets/ # Static images (e.g., profile.jpg, logo.png)
├── src/
│ ├── app/
│ │ ├── (tabs)/ # Main app tabs: home, create, profile
│ │ ├── auth/ # Auth flow: email, verify, password, profile
│ │ ├── _layout.jsx # Global layout
│ │ └── index.js # Entry screen
│ ├── components/ # Reusable UI components
│ ├── constants/ # Static data like categories and mock places
│ ├── context/ # Auth context
│ ├── hooks/ # Custom hooks (e.g., fetching places)
│ ├── lib/ # Zod validation schemas
│ └── styles/ # Tailwind setup
├── README/README.md # This file
└── app.json / package.json

yaml
Copy
Edit

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/mohamadbatta/etch-app.git
cd etch-app
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npx expo start
🧪 Test Credentials
Use the following code to pass the verification step:

plaintext
Copy
Edit
Code: 0000
🔒 Password Requirements
At least 8 characters

At most 20 characters

Must include at least one letter

Must include at least one special character

🧑‍💻 Author
Made for an interview task using modern React Native tooling Mohamad Batta.

📸 Screenshots
![WhatsApp Image 2025-06-16 at 22 21 10_d3e5eecd](https://github.com/user-attachments/assets/1d2ee0ac-801b-4a7d-95d0-db1935bc2a8e)
![WhatsApp Image 2025-06-16 at 22 21 09_3bd5d035](https://github.com/user-attachments/assets/dd16fe9a-c6c1-4aba-ad6d-491fe972e2b7)
![WhatsApp Image 2025-06-16 at 22 21 09_4d8ddd46](https://github.com/user-attachments/assets/2a1a93e1-62f9-410e-bcff-7bbd71cb5517)
![WhatsApp Image 2025-06-16 at 22 21 09_9f0252b4](https://github.com/user-attachments/assets/7d6123e8-c2e4-43a1-a163-bbd9f5296201)
![WhatsApp Image 2025-06-16 at 22 21 09_9b83665b](https://github.com/user-attachments/assets/c621fcc1-1911-46d4-b276-5f7fb9fd5328)
![WhatsApp Image 2025-06-16 at 22 21 09_2782f407](https://github.com/user-attachments/assets/a66f0980-2080-492a-bca4-9e01cacc90f2)
![WhatsApp Image 2025-06-16 at 22 21 08_255113c0](https://github.com/user-attachments/assets/78acbd28-68f7-459a-a9e1-2f59a5149749)
![WhatsApp Image 2025-06-16 at 22 21 10_b3b4a17c](https://github.com/user-attachments/assets/d0cff8df-b16c-4622-aead-73f9baa50efc)
![WhatsApp Image 2025-06-16 at 22 21 10_435955e2](https://github.com/user-attachments/assets/9b8e093d-5022-447d-a905-4ce5b81b2aad)
![WhatsApp Image 2025-06-16 at 22 21 10_cd77c5ad](https://github.com/user-attachments/assets/83828e31-0d04-4f2f-bb8d-6dcc55c20b46)
