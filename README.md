# LandingMVP - High-Converting Landing Page

A modern, responsive landing page MVP built with Next.js and Tailwind CSS. Perfect for startups and small businesses looking to validate their product quickly and convert visitors into customers.

## What is this MVP?

**This is a minimal viable product that delivers a fully functional landing page with core features: responsive layout, key sections, and a working contact form. It's designed for quick client validation and fast deployment.**

The MVP includes:
- ✅ Single-page responsive design (desktop + mobile)
- ✅ Hero section with call-to-action
- ✅ Features showcase
- ✅ Customer testimonials
- ✅ Pricing plans
- ✅ Working contact form with validation
- ✅ Smooth scrolling and fade-in animations
- ✅ Modern, professional design
- ✅ SEO-optimized
- ✅ Fast page load times

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel/Netlify ready

## Project Structure

```
landing-mvp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles & animations
│   └── components/
│       ├── Hero.tsx            # Hero section with CTA
│       ├── Features.tsx        # Features grid
│       ├── Testimonials.tsx    # Customer testimonials
│       ├── Pricing.tsx         # Pricing plans
│       ├── ContactForm.tsx     # Contact form with validation
│       └── Footer.tsx          # Footer with links
├── public/                     # Static assets
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository:
```bash
cd landing-mvp
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

You should see your landing page running locally!

## Development

### Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

#### Change Colors
Edit `tailwind.config.js` or modify the gradient colors directly in components.

#### Update Content
- **Hero text:** Edit `src/components/Hero.tsx`
- **Features:** Modify the `features` array in `src/components/Features.tsx`
- **Testimonials:** Update the `testimonials` array in `src/components/Testimonials.tsx`
- **Pricing:** Change the `plans` array in `src/components/Pricing.tsx`

#### Contact Form Integration
The contact form currently logs to console and sends to a dummy API. To connect to a real service:

1. Open `src/components/ContactForm.tsx`
2. Replace the API endpoint in the `handleSubmit` function:
```typescript
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

Popular options:
- **Formspree:** https://formspree.io
- **EmailJS:** https://www.emailjs.com
- **Your own backend API**

## Build for Production

Build the optimized production version:
```bash
npm run build
```

Test the production build locally:
```bash
npm run start
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts. Your site will be live in seconds!

**Or use Vercel's web interface:**
1. Push your code to GitHub
2. Visit https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

**Or use Netlify's web interface:**
1. Push your code to GitHub
2. Visit https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy"

## GitHub Setup

### Initialize Git and Push to GitHub

1. Initialize git repository:
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Create initial commit:
```bash
git commit -m "Initial commit: Landing page MVP"
```

4. Create a new repository on GitHub (https://github.com/new)

5. Add remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Quick Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Features Overview

### Responsive Design
Works perfectly on all devices - desktop, tablet, and mobile.

### Smooth Animations
Fade-in animations and smooth scrolling create a polished user experience.

### Contact Form
- Client-side validation
- Success/error messages
- Console logging for debugging
- Ready to integrate with your backend

### SEO Optimized
- Meta tags configured
- Semantic HTML
- Fast page load times
- Mobile-friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your projects!

## Support

For issues or questions:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Check the Tailwind CSS documentation: https://tailwindcss.com/docs

## Next Steps

After deploying your MVP:

1. **Add Analytics:** Integrate Google Analytics or Plausible
2. **Connect Form:** Link contact form to your email/CRM
3. **A/B Testing:** Test different headlines and CTAs
4. **Add More Pages:** Create About, Blog, or Product pages
5. **Collect Feedback:** Talk to users and iterate

---

**Ready to launch?** Follow the deployment instructions above and get your landing page live in minutes!
