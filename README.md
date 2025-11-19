# 🦸 Hero Store: All Android/AOS Apps Hub

<img src="https://i.ibb.co.com/b5pKWMy5/Screenshot-10.png" alt="Hero Store E-Commerce Screenshot" width="800"/>

---
> A modern and secure **Apps Store** for Android and AOS apps, built with **React Native**, ensuring seamless apps, robust security, and responsive design.

## 🔗 Live URL

🔗 [Hero Store](https://hero-apps-store.netlify.app/)

---

## 🎯 Project Overview & Purpose

Hero Store Android/AOS app provides a high-quality, smooth mobile shopping experience where users can:

- **Browse Products:** Explore and view detailed information for various product listings.
- **Secure Authentication:** Log in or register securely using Firebase Authentication.
- **Listing Management:** Add, edit, and delete their own product listings (for sellers) or manage cart/orders.
- **User Profile:** Dynamically update personal profile information.
- **Responsive Mobile UI:** Enjoy a consistent and adaptive interface across devices.

---

## 🚀 Key Features

✅ **Authentication & Security**

- Firebase-based login, registration, and logout.
- Password reset capability via email.
- **Protected Screens** to ensure only authorized users access sensitive areas (e.g., My Listings, Dashboard).

✅ **Product Management**

- Add, Update, and Remove product data (for sellers).
- Organized product categories with dedicated detailed product pages.

✅ **User Profile**

- Displays user name, email, and photo.
- Allows dynamic editing/updating using Firebase `updateProfile()`.

✅ **User Experience (UX)**

- **Responsive UI:** Optimized for Android and mobile devices using **Tailwind CSS** and **DaisyUI**.
- **Error Handling:** Clean toast notifications for actions and errors.
- **Navigation:** Smooth navigation with custom 404 error screen and easy routing.

---

## 🧠 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | React Native | Primary framework for Android & mobile UI development. |
| **Styling** | Tailwind CSS & DaisyUI | Mobile-first utility CSS and component library. |
| **Authentication** | Firebase | Sign-up, sign-in, profile update, password reset. |
| **Routing/Navigation** | React Navigation | Mobile navigation and protected screens. |
| **Deployment** | Play Store / Firebase App Distribution | Distribution of Android/AOS apps. |

### 🧩 npm Packages Used

| Package | Purpose |
| :--- | :--- |
| **@react-navigation/native** | Navigation and screen routing. |
| **firebase** | Core Authentication & database operations. |
| **react-native-toast-message** | Clean toast notifications for mobile UI. |
| **react-native-vector-icons** | Wide collection of icons for UI enhancement. |
| **prop-types** | Type checking for component props. |
| **aos** | Scroll-based animations for mobile elements. |

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
