# Portfolio Customization Guide

This guide will help you quickly customize your portfolio to match your profile and projects.

## 🎯 Quick Start Checklist

- [ ] Update personal information
- [ ] Add your resume PDF
- [ ] Update skills
- [ ] Add your projects with GitHub links
- [ ] Update journey/timeline
- [ ] Customize colors (optional)
- [ ] Test locally
- [ ] Deploy to Vercel/Netlify

## 📝 Step-by-Step Customization

### 1. Personal Information

**File**: `/data/portfolio.ts`

Update the `personalInfo` object:

```typescript
export const personalInfo = {
  name: "Your Full Name",                    // ← Change this
  role: "Data Engineer",                      // ← Your role
  location: "Pune, Maharashtra, India",       // ← Your location
  email: "your.email@example.com",            // ← Your email
  linkedin: "https://linkedin.com/in/yourprofile",  // ← Your LinkedIn
  github: "https://github.com/yourusername",   // ← Your GitHub
  resumeUrl: "/resume.pdf",
  tagline: "Data Engineer specializing in...", // ← Your tagline (Hero section)
  about: [
    "First paragraph about you...",            // ← Update these 3 paragraphs
    "Second paragraph...",
    "Third paragraph..."
  ],
  targetRole: "Data Engineer",
  experience: "Fresher (0 YOE)",               // ← Your experience level
  targetSalary: "12-16 LPA",                   // ← Your expected salary
  targetCompanies: ["Company1", "Company2"]    // ← Companies you're targeting
};
```

### 2. Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `/public` folder
4. The download buttons will automatically work!

### 3. Update Your Skills

**File**: `/data/portfolio.ts`

Edit the `skills` object by category:

```typescript
export const skills = {
  "Data Engineering & Stream Processing": [
    "Apache Kafka",           // ← Add/remove skills
    "PySpark",
    "Your Skill Here",
  ],
  "Programming & Databases": [
    "Python",
    "MongoDB",
    // Add more...
  ],
  // Add more categories if needed
};
```

**Tips**:
- Keep primary skills first
- Organize by relevance to your target role
- Don't overload - quality over quantity

### 4. Add Your Projects

**File**: `/data/portfolio.ts`

Each project in the `projects` array should follow this structure:

```typescript
{
  id: "unique-project-id",                    // Unique identifier
  title: "Project Name",                       // Project title
  shortDescription: "One-line description",    // Shown on card
  description: "Full detailed description",    // Shown in modal
  techStack: [                                 // Technologies used
    "Apache Kafka",
    "PySpark",
    "MongoDB",
  ],
  metrics: [                                   // Key numbers (4 max recommended)
    { label: "Transactions", value: "14,400+" },
    { label: "Accuracy", value: "95%+" },
    { label: "Latency", value: "200ms" },
    { label: "Uptime", value: "99.9%" },
  ],
  highlights: [                                // Key features (5-7 bullets)
    "Real-time streaming ETL pipeline",
    "Fault-tolerant architecture",
  ],
  technicalDetails: [                          // Technical implementation (6-8 bullets)
    "Kafka topic partitioning for scalability",
    "PySpark checkpointing mechanism",
  ],
  githubUrl: "https://github.com/you/project", // Your GitHub repo
  liveUrl: "https://demo.com",                 // Optional live demo
  featured: true                                // Show "Featured" badge
}
```

**Example Project Entry**:

```typescript
{
  id: "my-etl-pipeline",
  title: "Real-Time ETL Pipeline for E-commerce",
  shortDescription: "Streaming pipeline processing 100K+ daily orders with sub-second latency",
  description: "Built a production-grade ETL pipeline using Kafka and Spark...",
  techStack: ["Kafka", "Spark", "PostgreSQL", "Docker"],
  metrics: [
    { label: "Daily Orders", value: "100K+" },
    { label: "Latency", value: "800ms" },
    { label: "Uptime", value: "99.9%" },
    { label: "Data Loss", value: "Zero" }
  ],
  highlights: [
    "Real-time order processing with Kafka Streams",
    "Exactly-once semantics with transactional writes",
    "Automated data quality checks"
  ],
  technicalDetails: [
    "Kafka topic design with 12 partitions for parallelism",
    "Spark Structured Streaming with 5-minute checkpoints",
    "PostgreSQL with connection pooling"
  ],
  githubUrl: "https://github.com/yourusername/etl-pipeline",
  liveUrl: "",
  featured: true
}
```

### 5. Update Your Journey

**File**: `/data/portfolio.ts`

Edit the `journey` array to show your learning timeline:

```typescript
{
  id: 1,
  period: "2024",                              // Time period
  title: "Built Fraud Detection System",       // Achievement
  description: "Short description...",          // Details
  type: "project",                              // project | certification | learning
  status: "completed"                           // completed | in-progress | planned
}
```

**Timeline Items**:
- **Projects**: Your major projects
- **Certifications**: Courses/certificates completed or in progress
- **Learning**: Technologies you're mastering

**Tip**: Keep it reverse chronological (newest first)

### 6. Update "Currently Learning"

**File**: `/data/portfolio.ts`

```typescript
export const currentlyLearning = [
  "Apache Airflow",            // ← Add technologies you're learning
  "AWS (S3, EMR)",
  "dbt",
];
```

### 7. Social Links

**File**: `/data/portfolio.ts`

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  email: "your.email@example.com",
  twitter: ""  // Optional
};
```

## 🎨 Color Customization (Optional)

**File**: `/tailwind.config.ts`

Change the primary and accent colors:

```typescript
colors: {
  primary: {
    // Blue tones (default)
    500: '#1890ff',  // ← Change to your preferred color
    600: '#096dd9',
    700: '#0050b3',
  },
  accent: {
    // Cyan/Green tones (default)
    500: '#13c2c2',  // ← Change to your accent color
    600: '#08979c',
    700: '#006d75',
  },
}
```

**Color Recommendations**:
- **Primary**: Main brand color (buttons, headings)
- **Accent**: Secondary highlights (badges, icons)
- Use a color palette generator like [Coolors](https://coolors.co/)

## 🔍 SEO Customization

**File**: `/app/layout.tsx`

Update metadata for better search rankings:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Data Engineer Portfolio",
  description: "Your custom description mentioning key skills...",
  keywords: [
    "Your Name",
    "Data Engineer",
    "Your City",
    "Apache Kafka",
    // Add more relevant keywords
  ],
  openGraph: {
    url: "https://yourportfolio.com",  // Your domain
    title: "Your Name | Data Engineer",
  },
};
```

## ✅ Testing Your Changes

### Local Testing

```bash
# Start dev server
npm run dev

# Open browser
http://localhost:3000
```

### Checklist

- [ ] Hero section shows your name and tagline
- [ ] About section has your bio (3 paragraphs)
- [ ] Skills are categorized correctly
- [ ] All projects appear with correct info
- [ ] Project modals open with full details
- [ ] GitHub links work
- [ ] Resume download works
- [ ] Journey timeline is chronological
- [ ] Contact section has your email/links
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive (test on small screen)

## 🚀 Common Customizations

### Adding a New Section

1. Create component in `/components/NewSection.tsx`
2. Import in `/app/page.tsx`
3. Add navigation link in `/components/Navigation.tsx`

### Removing a Section

1. Remove import from `/app/page.tsx`
2. Remove `<SectionName />` from the page
3. Remove nav link from `/components/Navigation.tsx`

### Changing Fonts

In `/app/globals.css`, update the `font-family`:

```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Don't forget to import the font if using Google Fonts!

## 📊 Project Metrics Tips

**Good Metrics**:
- Transaction/Record volume (e.g., "14,400+ daily")
- Accuracy/Success rate (e.g., "95%+")
- Latency/Performance (e.g., "200ms")
- Reliability (e.g., "Zero data loss", "99.9% uptime")

**Format**:
- Use `+` for "more than" (14,400+)
- Use `%+` for percentages (95%+)
- Use descriptive labels ("Daily Transactions" not just "Volume")

## 🎯 Content Writing Tips

### Tagline (Hero Section)
- Lead with your specialty
- Mention key technologies
- Include a notable achievement
- Keep it under 2 sentences

**Example**:
"Data Engineer specializing in real-time streaming pipelines with Apache Kafka and PySpark. Built production-grade fraud detection system achieving 95%+ accuracy with sub-500ms latency."

### About Section
- **Para 1**: Your specialty and core skills
- **Para 2**: Your focus and what you're passionate about
- **Para 3**: What you're currently learning

### Project Descriptions
- Start with what you built (noun phrase)
- Mention the scale/impact
- Highlight the technical challenge solved
- End with outcomes/metrics

## 🆘 Need Help?

### Quick Fixes

**Portfolio not loading?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Changes not showing?**
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console for errors (F12)

**Build errors?**
- Check for syntax errors in `/data/portfolio.ts`
- Ensure all strings have quotes
- Ensure all arrays have commas between items

### Where to Get Help

1. Check README.md for setup instructions
2. Review this guide for customization
3. Check Next.js documentation
4. Google the specific error message

---

**Remember**: The portfolio is yours - customize it to reflect YOUR skills and projects authentically!

Good luck with your job search! 🚀
