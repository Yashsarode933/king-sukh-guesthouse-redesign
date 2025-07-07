🏨 **King Sukh Guest House – Website Redesign**
***
**Project ID:** 78GRB6TY2D  
**Developer:** [Your Name Here]  
**Old Site:** https://www.kingsukhguesthouse.com/  
**New Site:** https://kingsukhguesthouseredesign.vercel.app/

### 📌 Project Overview

This project is a complete, from-scratch redesign of the King Sukh Guest House website. The primary objective was to transform the original, outdated site into a modern, visually appealing, and fully responsive web application. By leveraging the power of Next.js, the new site offers a significantly improved user experience, faster performance, and a codebase that is scalable and maintainable.

### 🎨 Features

-   ✅ **Modern UI/UX:** Clean, elegant design with a professional color palette and typography.
-   ✅ **Fully Responsive:** Flawless viewing experience across mobile, tablet, and desktop devices.
-   ✅ **Optimized Performance:** Built with Next.js for fast page loads and automatic image optimization.
-   ✅ **Enhanced Navigation:** A sticky navigation bar that remains visible on scroll, with smooth-scrolling anchor links for easy navigation.
-   ✅ **Interactive Gallery:** A beautiful image gallery featuring a full-screen, clickable lightbox for an immersive viewing experience.
-   ✅ **Component-Based Architecture:** Built with reusable React components for consistency and scalability.
-   ✅ **Dynamic Data:** Centralized data files for easy management of rooms and gallery images.
-   ✅ **Functional Contact Form:** A clean and user-friendly contact form with basic client-side validation.

### 🧰 Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (React Framework for Production)
-   **UI Library:** [React.js](https://reactjs.org/)
-   **Styling:** [CSS Modules](https://github.com/css-modules/css-modules) (for component-scoped, conflict-free styles)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
-   **Image Lightbox:** [yet-another-react-lightbox](https://yet-another-react-lightbox.com/)
-   **Deployment:** [Vercel](https://vercel.com/)

### 📁 Folder Structure

The project uses the standard Next.js 13+ App Router structure for clear organization.

king-sukh-redesign/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── page.module.css
│
├── components/
│   ├── Footer.js
│   ├── Footer.module.css
│   ├── Navbar.js
│   └── Navbar.module.css
│
├── data/
│   ├── galleryData.js
│   └── roomData.js
│
├── public/
│   └── assets/
│       ├── gallery-1.jpg
│       ├── image-1.jpg
│       ├── logo.png
│       ├── room-1.jpg
│       └── ... (all other images)
│
├── .gitignore
├── next.config.js
├── package-lock.json
├── package.json
└── README.md

### 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/[your-github-username]/king-sukh-guesthouse-redesign.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd king-sukh-guesthouse-redesign
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🧩 Maintenance Guide

-   **Add new images:** Place them in the `/public/assets/` folder. To add them to the gallery, update the array in `/data/galleryData.js`.
-   **Update room details:** Modify the room objects in the `/data/roomData.js` file.
-   **Change page content:** Edit the JSX in the relevant `page.js` file within the `/app` directory.
-   **Adjust styles:** Find the corresponding `.module.css` file for the component or page you wish to change. Global styles are in `app/globals.css`.

### 🐞 Challenges Faced & Solutions

| Challenge                                       | Solution                                                                                                   |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Original site was not mobile-friendly           | Implemented a mobile-first approach using CSS Grid, Flexbox, and media queries within CSS Modules.           |
| Managing image optimization and loading speed   | Leveraged Next.js's built-in `<Image>` component for automatic optimization, resizing, and lazy loading.     |
| Creating a maintainable styling system          | Used CSS Modules to scope styles to individual components, preventing class name conflicts.                |
| Implementing a functional image gallery         | Integrated the `yet-another-react-lightbox` library and managed its state with React's `useState` hook.    |
| Ensuring consistent navigation across all pages | Created a reusable `<Navbar />` component and made it sticky using `position: fixed` and global CSS padding. |

### 📄 Future Enhancements

-   **Integrate a Headless CMS:** Use a CMS like Sanity or Strapi to allow for dynamic content updates without touching the code.
-   **Real Booking System:** Develop a backend and database to handle real-time room bookings and availability.
-   **Advanced Animations:** Incorporate libraries like `Framer Motion` to add on-scroll reveal animations and more complex transitions.
-   **Enhanced SEO:** Implement dynamic metadata generation for each page to improve search engine visibility.
