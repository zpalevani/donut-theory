# Donut Theory 🍩

> A high-end, artisan donut shop website designed for the refined palate. Located in Donut Land.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🔗 Live Demo
**[View the Live Site Here](https://zpalevani.github.io/donut-theory/)**

---

## 📖 About The Project
**Donut Theory** is a modern, static website built to showcase a luxury donut brand. The design philosophy focuses on "Chic & Minimalist" aesthetics, utilizing serif typography, ample whitespace, and high-quality photography to convey a premium feel.

### Key Features
*   **Landing Page:** Hero section with immersive imagery and a curated product collection.
*   **About Page:** Storytelling section regarding the "Theory" behind the baking process.
*   **Contact Page:** Location details and a stylized inquiry form.
*   **Responsive Design:** Fully mobile-optimized using Tailwind CSS.
*   **Static Export:** Built using Next.js Static Exports for fast, serverless hosting on GitHub Pages.

---

## 🛠️ Tech Stack
*   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** TypeScript
*   **Fonts:** Google Fonts (Playfair Display & Lato)
*   **Deployment:** GitHub Actions & GitHub Pages

---

## 🚀 Getting Started Locally

Follow these steps to run the project on your machine.

### Prerequisites
*   Node.js installed (Version 18 or higher recommended)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/zpalevani/donut-theory.git
    cd donut-theory
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:3000` (or `3001` if 3000 is busy) to see the application.

---

## 📦 Deployment

This project is configured to deploy automatically to **GitHub Pages** using GitHub Actions.

### How it works:
1.  **Config:** The `next.config.mjs` is set to `output: "export"` and `images: { unoptimized: true }`.
2.  **Workflow:** The file `.github/workflows/nextjs.yml` handles the build process.
3.  **Trigger:** Pushing to the `main` branch triggers the deployment action.

To deploy updates, simply run:
```bash
git add .
git commit -m "Update website"
git push origin main
