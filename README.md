# Data Engineer Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a responsive design optimized for ATS compatibility and recruiter engagement.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion
- **Responsive Design**: Fully responsive and mobile-optimized
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML for search engines
- **ATS-Friendly**: Clean, crawlable content for Applicant Tracking Systems
- **Project Showcase**: Expandable project cards with detailed metrics and tech stacks
- **Timeline Journey**: Visual learning path and career progression
- **Contact Section**: Multiple ways to connect with download resume button

## 📋 Sections

1. **Hero** - Professional introduction with CTAs
2. **About** - Expertise highlights and current learning
3. **Skills** - Categorized technical skills (Data Engineering, Programming, DevOps, AI/ML)
4. **Projects** - Featured projects with expandable details, metrics, and tech stacks
5. **Journey** - Timeline showing learning path and achievements
6. **Contact** - Contact information and social links

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git installed

### Step 1: Clone or Setup

```bash
# If you're already in the portfolio-website directory, you're good!
# Otherwise:
cd portfolio-website
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Customize Your Content

Edit the `/data/portfolio.ts` file with your personal information:

```typescript
export const personalInfo = {
  name: "Your Full Name",
  role: "Data Engineer",
  location: "Your City, State, Country",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resumeUrl: "/resume.pdf", // Add your resume.pdf to /public folder
  tagline: "Your professional tagline...",
  // ... update other fields
};
```

**Important**: Update ALL fields in `portfolio.ts`:
- `personalInfo` - Your name, contact details, tagline
- `skills` - Your technical skills by category
- `projects` - Your project details, metrics, tech stacks, GitHub links
- `journey` - Your learning timeline and achievements
- `currentlyLearning` - Technologies you're currently exploring

### Step 4: Add Your Resume

Place your resume PDF in the `/public` folder:

```bash
# Copy your resume to public folder
cp /path/to/your/resume.pdf public/resume.pdf
```

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your primary color shades
    500: '#1890ff',
    600: '#096dd9',
    // ...
  },
  accent: {
    // Your accent color shades
    500: '#13c2c2',
    600: '#08979c',
    // ...
  },
}
```

### Adding New Projects

In `/data/portfolio.ts`, add a new project object:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  shortDescription: "Brief description for card",
  description: "Full detailed description for modal",
  techStack: ["Tech1", "Tech2", "Tech3"],
  metrics: [
    { label: "Metric Name", value: "Value" },
  ],
  highlights: ["Key highlight 1", "Key highlight 2"],
  technicalDetails: ["Technical detail 1", "Technical detail 2"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-live-demo.com", // Optional
  featured: true
}
```

### Adding New Skills

Update the `skills` object in `/data/portfolio.ts`:

```typescript
export const skills = {
  "Category Name": [
    "Skill 1",
    "Skill 2",
    // ...
  ],
  // Add more categories
};
```

### Updating Journey Timeline

Modify the `journey` array in `/data/portfolio.ts`:

```typescript
{
  id: 1,
  period: "2024",
  title: "Achievement Title",
  description: "Description of the achievement",
  type: "project" | "certification" | "learning",
  status: "completed" | "in-progress" | "planned"
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js - click "Deploy"
6. Your site will be live at `https://your-portfolio.vercel.app`

### Deploy to Netlify

1. Push code to GitHub (same as above)
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Custom Domain

Both Vercel and Netlify allow custom domains:
- Go to your project settings
- Add your custom domain
- Update DNS records as instructed

## 📱 Testing

### Development Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Test Responsiveness

- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
- Test on different screen sizes:
  - Mobile: 375px, 414px
  - Tablet: 768px, 1024px
  - Desktop: 1280px, 1920px

### Test Dark/Light Mode

- Click the theme toggle button (top right)
- Verify all sections look good in both modes

## 🎯 SEO Optimization

The portfolio is already optimized for search engines:

✅ Semantic HTML structure
✅ Meta tags (title, description, keywords)
✅ Open Graph tags for social sharing
✅ Twitter Card tags
✅ Robots.txt friendly
✅ Sitemap ready
✅ Mobile responsive
✅ Fast loading with Next.js optimization

**Update SEO tags** in `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Data Engineer Portfolio",
  description: "Your custom description...",
  keywords: ["Your", "Custom", "Keywords"],
  // ...
};
```

## 📊 Performance Tips

- **Images**: Use Next.js Image component for optimization
- **Fonts**: System fonts are used for fast loading
- **Code Splitting**: Next.js handles this automatically
- **Lazy Loading**: Sections animate on scroll

## 🤝 Support & Feedback

If you encounter any issues:

1. Check that all dependencies are installed: `npm install`
2. Ensure Node.js version is 18+: `node --version`
3. Clear cache and rebuild: `rm -rf .next && npm run build`

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ for Data Engineers looking to showcase their real-time data pipeline expertise**

For questions or customization help, feel free to reach out!
