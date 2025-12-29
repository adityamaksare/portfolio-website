# Quick Start Guide

Your portfolio is ready to customize and deploy! Follow these steps to get started.

## ⚡ Immediate Next Steps

### 1. **Update Your Information** (5-10 minutes)

Open `/data/portfolio.ts` and replace ALL placeholder text:

```typescript
// Change these first:
name: "Your Full Name",           // ← Your actual name
email: "your.email@example.com",   // ← Your real email
linkedin: "https://linkedin.com/in/yourprofile",  // ← Your LinkedIn URL
github: "https://github.com/yourusername",        // ← Your GitHub URL
```

**IMPORTANT**: Update every field with "Your", "you", or "example" in it!

### 2. **Add Your Resume** (2 minutes)

1. Export your resume as `resume.pdf`
2. Place it in the `/public` folder
3. Delete the `PLACE_RESUME_HERE.txt` file

### 3. **Test Locally**

The dev server is already running at:
👉 **http://localhost:3000**

Open it in your browser to see your portfolio!

### 4. **Customize Projects** (10-15 minutes)

In `/data/portfolio.ts`, find the `projects` array and:

1. Replace project titles and descriptions
2. Update metrics with YOUR project numbers
3. Add YOUR GitHub repository links
4. Update tech stacks to match what you actually used

**Example**:
```typescript
{
  id: "my-project-id",
  title: "My Real Project Name",
  githubUrl: "https://github.com/yourusername/your-real-repo",
  metrics: [
    { label: "Your Metric", value: "Your Value" },
  ],
}
```

### 5. **Update Skills** (5 minutes)

Scroll to the `skills` object in `/data/portfolio.ts`:

```typescript
export const skills = {
  "Data Engineering & Stream Processing": [
    "Apache Kafka",  // ← Keep what you know, remove what you don't
    "PySpark",       // ← Add skills you have
    // Add more...
  ],
}
```

## 🚀 Deploy (10 minutes)

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Next.js)
   - Your site will be live in 2-3 minutes!

### Option 2: Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## 📝 Content Customization Tips

### Hero Section Tagline
Keep it under 2 sentences. Formula:
1. What you specialize in + key tech
2. Notable achievement with metrics

**Example**:
"Data Engineer specializing in real-time pipelines with Kafka and Spark. Built fraud detection system processing 50K+ daily transactions with 99.9% accuracy."

### Project Descriptions
- **Short description** (1 line for card): "What + Key metric"
- **Full description** (for modal): "What you built + Scale + Technical challenge + Outcome"

### Journey Timeline
- Order: Newest first
- Include: Projects, certifications, major learning milestones
- Keep it to 5-7 key items

## 🎨 Theme Customization (Optional)

Want different colors? Edit `/tailwind.config.ts`:

```typescript
primary: {
  500: '#1890ff',  // ← Change to your brand color
},
accent: {
  500: '#13c2c2',  // ← Change to your accent color
},
```

Use [Coolors.co](https://coolors.co) to generate a palette!

## ✅ Pre-Deploy Checklist

Before deploying, verify:

- [ ] Personal info updated (name, email, location, links)
- [ ] Resume PDF added to `/public` folder
- [ ] All projects have YOUR details, not placeholders
- [ ] Skills match what you actually know
- [ ] GitHub links work and point to YOUR repos
- [ ] Journey timeline reflects YOUR path
- [ ] Tested on mobile (inspect element → device toolbar)
- [ ] Dark/light mode both look good
- [ ] All links open in new tabs and work

## 🆘 Common Issues

**Portfolio not loading?**
```bash
# Stop the dev server (Ctrl+C) and restart:
npm run dev
```

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Build errors?**
- Check for syntax errors in `/data/portfolio.ts`
- Make sure all strings have quotes
- Ensure commas between array items

**Need help customizing?**
- See `CUSTOMIZATION_GUIDE.md` for detailed instructions
- See `README.md` for full documentation

## 📚 Documentation

- **README.md** - Full setup and deployment guide
- **CUSTOMIZATION_GUIDE.md** - Detailed customization instructions
- **This file (QUICKSTART.md)** - Get started in 30 minutes

## 🎯 Your 30-Minute Launch Plan

1. ✏️ Update personal info (5 min)
2. 📄 Add resume PDF (2 min)
3. 🚀 Update projects (10 min)
4. 💪 Update skills (5 min)
5. 🧪 Test locally (3 min)
6. 🌐 Deploy to Vercel (5 min)

**Total: 30 minutes to a live portfolio!**

---

**Questions?** Check the other docs or search the error online. Most issues are simple typos in `/data/portfolio.ts`.

**Good luck with your job search! 🎉**
