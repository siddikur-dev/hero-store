# 🦸 Hero Store: All Android/Aos Apps Hub


<img src="https://i.ibb.co.com/b5pKWMy5/Screenshot-10.png" alt="Hero Store E-Commerce Screenshot" width="800"/>

---
> A modern and secure **E-Commerce Marketplace** built with the MERN stack principles (Frontend with React) for buying and selling unique items, ensuring robust security and a responsive design.

## 🔗 Live URL

🔗 [ Hero Store](https://hero-apps-store.netlify.app/)

---



## 🎯 Project Overview & Purpose

Hero Store is designed to provide a high-quality, seamless online shopping experience where users can:

- **Browse Products:** Explore and view detailed information for various product listings.
- **Secure Authentication:** Log in or register securely using Firebase Authentication.
- **Listing Management:** Add, edit, and delete their own product listings (or manage their cart/orders if applicable).
- **User Profile:** Dynamically update personal profile information.
- **Responsive UI:** Enjoy a consistent and responsive design across all devices.

---

## 🚀 Key Features

✅ **Authentication & Security**

- Complete **Firebase-based** login, registration, and logout functionalities.
- Password reset capability via email.
- **Protected Routes** to ensure only authorized users access sensitive areas (e.g., My Listings, Dashboard).

✅ **Product Management**

- Functionality to **Add, Update, and Remove** product data (if applicable for sellers).
- Displays products in organized categories, alongside dedicated detailed product pages.

✅ **User Profile**

- Displays user name, email, and photo.
- Allows dynamic editing and updating of user info using the Firebase `updateProfile()` method.

✅ **User Experience (UX)**

- **Responsive UI:** Optimized for mobile, tablet, and desktop viewing using **Tailwind CSS** and **DaisyUI**.
- **Error Handling:** Uses toast notifications for clear alerts on actions and errors.
- **Navigation:** Features a custom **404 error page** with helpful navigation options.

---

## 🧠 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | React | Primary JavaScript library for building the UI. |
| **Styling** | Tailwind CSS & DaisyUI | Utility-first CSS framework and component library. |
| **Authentication** | Firebase | Robust service handling user sign-up, sign-in, and profile updates. |
| **Routing** | React Router | Declarative routing for navigation and protected routes. |
| **Deployment** | Netlify / Firebase Hosting | Platform used for hosting the live application. |

### 🧩 npm Packages Used

| Package | Purpose |
| :--- | :--- |
| **react-router-dom** | Handling routing and navigation. |
| **firebase** | Core library for Authentication and data persistence. |
| **react-hot-toast** | Providing clean and interactive toast notification alerts. |
| **react-icons** | Access to a wide collection of modern icons for UI enhancement. |
| **prop-types** | For JavaScript type checking, ensuring prop validity in components. |

---

## 💻 Setup Instructions (Local Development)

Follow these steps to get a copy of the project running on your local machine.



### 1 Clone the Repository
```bash
git clone https://github.com/siddikur-dev/hero-store.git
cd hero-store
```
### 2 Install Dependencies
```bash
npm install
```
### 3 Run Development Server
```bash
npm run dev
```
### 4 Open in Browser
```bash
http://localhost:5173
```

### 🌍 Live Links
- **Live Site**: https://hero-apps-store.netlify.app
