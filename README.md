# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a dark/light mode toggle, smooth animations, and a working contact form.

## Features

- **Modern React Stack**: Built with React 18 and Vite for fast development and optimal performance
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Functional contact form with validation (EmailJS integration ready)
- **Single Page Application**: Smooth scrolling navigation between sections
- **Professional Styling**: Custom Tailwind CSS configuration with gradient effects

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: EmailJS (optional integration)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up EmailJS for contact form:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and email template
   - Copy `.env.example` to `.env.local`
   - Add your EmailJS credentials to `.env.local`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Customization

### Updating Content

Edit the component files in `src/components/` to update:
- Personal information (Hero, About)
- Skills and technologies (Skills)
- Project showcase (Projects)
- Work experience (Experience)
- Contact information (Contact)

### Styling

The site uses Tailwind CSS with custom theme configuration in `tailwind.config.js`. Key colors:
- Primary: `#3b82f6` (blue)
- Secondary: `#8b5cf6` (purple)
- Accent: `#06b6d4` (cyan)

### EmailJS Integration

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service and email template
3. Update `src/components/Contact.jsx` with EmailJS integration code
4. Add your credentials to `.env.local`

## Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 Mduduzi Frederick Dube

## Contact

- Email: tungatadube@gmail.com
- LinkedIn: [mduduzifrederickdube](https://linkedin.com/in/mduduzifrederickdube)
- GitHub: [tungatadube](https://github.com/tungatadube)
