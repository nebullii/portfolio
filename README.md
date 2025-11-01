# Modern Portfolio Template

A beautiful, accessible, and SEO-optimized portfolio website template built with Astro. Perfect for developers, designers, and anyone looking to showcase their work professionally.

> **Originally based on** [astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio) by Gianmarco Cavallo
>
> **Enhanced and maintained by** Neha Chaudhari with significant improvements in accessibility, SEO, and user experience.

![Portfolio Preview](public/template_preview.png)

## Live Demo

See an example of this template in action: **[https://portfolio-chaudhari.netlify.app/](https://portfolio-chaudhari.netlify.app/)**

> **Note:** This is the original creator's portfolio. Your portfolio will be uniquely yours once you customize it!

---

## First Time Setup

**After cloning this template**, see the [TEMPLATE_SETUP.md](./TEMPLATE_SETUP.md) file for a complete step-by-step customization checklist.

---

## Features

- **Modern Design** - Clean, professional layout with smooth animations
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Accessibility First** - WCAG compliant with screen reader support, keyboard navigation, and ARIA labels
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), and canonical URLs
- **Fully Responsive** - Looks great on all devices (mobile, tablet, desktop)
- **Lightning Fast** - Built with Astro for optimal performance (100/100 Lighthouse score)
- **Secure** - All external links protected against tabnabbing with `rel="noopener noreferrer"`
- **Easy to Customize** - **No coding required for basic changes**
- **Professional Icons** - Uses Remix Icons and Simple Icons for brand logos
- **Analytics Ready** - Easy to integrate with Google Analytics, Plausible, or Umami
- **Free Deployment** - Deploy for free on Netlify with automatic updates

---

## Table of Contents

- [Quick Start (No Coding Required)](#quick-start-no-coding-required)
- [For Developers](#for-developers)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start (No Coding Required)

**Don't know how to code? No problem!** Follow these simple steps to create your own portfolio:

### Step 1: Get Your Own Copy

1. Click the green **"Use this template"** button at the top of this page
2. Choose a name for your portfolio repository (e.g., `my-portfolio`)
3. Select "Public" if you want others to see your code
4. Click **"Create repository"**

### Step 2: Edit Your Information

You only need to edit **ONE main file** to customize everything: `src/pages/index.astro`

#### How to Edit on GitHub (No Software Needed)

1. Go to your new repository on GitHub
2. Click on `src` folder → `pages` folder → `index.astro`
3. Click the pencil icon (edit button) at the top right to edit
4. Now find and replace the following information:

#### Your Basic Information

Find these lines and replace with your info:

| Line | Find | Replace With |
|------|------|--------------|
| 68 | `Neha Chaudhari` | Your Full Name |
| 72 | `Software Developer` | Your Job Title |
| 74-75 | The description text | Your own description |

#### Your Contact & Social Links

| What | Line | Find | Replace With |
|------|------|------|--------------|
| Email | 74, 652 | `nebullii3@gmail.com` | your-email@gmail.com |
| GitHub | 79, 89 | `https://github.com/nebullii` | Your GitHub URL |
| LinkedIn | 93 | `https://linkedin.com/in/nehavchaudhari` | Your LinkedIn URL |
| Medium | 97 | `https://medium.com/@nebullii3` | Your Medium URL (or delete this link) |
| Substack | 103 | `https://substack.com/@nebulli` | Your Substack URL (or delete) |
| Music/Playlist | 113 | Apple Music link | Your playlist (or delete) |
| LeetCode | 118 | `https://leetcode.com/u/Nebuli/` | Your LeetCode URL (or delete) |
| HackerRank | 124 | `https://www.hackerrank.com/profile/nebullii` | Your HackerRank URL (or delete) |

**Tip:** If you don't have an account on some platforms (like Medium or LeetCode), you can delete those entire link sections.

#### Your Statistics (Quick Stats Section)

Around lines 132-160, update these numbers with your own achievements:

```astro
Line 139: 5+ → Your years of experience
Line 140: Years Experience → Keep or change the label
Line 141: Full-Stack Development → Your specialization

Line 145: 40% → Your metric
Line 146: Performance → Your metric label
Line 147: Database Optimization → What you improved

Line 151: 15+ → Your number
Line 152: API Endpoints → Your achievement
Line 153: REST Integration → Details

Line 157: 30% → Your percentage
Line 158: Load Time → Your metric
Line 159: Redis Optimization → What you did
```

#### Your Education

Find the Education section (around lines 358-389) and update:

```astro
Line 369: Master of Science in Computer Science → Your degree
Line 370: Clark University, Worcester, MA → Your university, location
Line 373: December 2025 → Your graduation date
Line 374: Advanced studies in... → Your description

Line 383: Bachelor of Science in Electronics → Your degree
Line 384: MAKAUT, Burdwan, WB → Your university
Line 387: July 2018 → Your graduation date
```

#### Your Work Experience

Find the Experience section and update with your job history. Follow the same format.

#### Your Projects

Update the "Featured Projects" section (around lines 540-640) with your own projects:

```astro
Project Name → Your project name
Description → What your project does
Tech Stack → Technologies you used (Django, React, etc.)
Live Demo URL → Link to your live project
GitHub URL → Link to your code repository
```

**Tip:** You can copy-paste the entire project card to add more projects.

### Step 3: Add Your Files

#### Add Your Resume

1. Prepare your resume as a PDF file
2. Go to the `public` folder in your repository
3. Click **"Add file"** → **"Upload files"**
4. Upload your resume PDF
5. **Important:** Either:
   - Rename your file to `ChaudhariNeha_Resume.pdf`, OR
   - Update line 108 in `index.astro` with your filename

#### Add Your Certificates (Optional)

1. Take screenshots of your certificates (HackerRank, Coursera, etc.)
2. Save them as `.jpg` or `.png` files
3. Upload them to the `public` folder
4. Update the certificate section (around line 398-420) with your filenames and links

**To add more certificates:**
- Copy the entire certificate card code (lines 398-420)
- Paste it below
- Change the image filename, title, and URL

#### Add Social Media Preview Image (Optional but Recommended)

When people share your portfolio on Facebook, LinkedIn, or Twitter, a preview image appears:

1. Create a 1200x630px image with:
   - Your name
   - Your title
   - A professional background
2. Use [Canva](https://www.canva.com/) (free) to create it easily
3. Save it as `og-image.png`
4. Upload it to the `public` folder

### Step 4: Save Your Changes

1. Scroll to the bottom of the edit page
2. In the "Commit changes" box, type: `Updated with my information`
3. Click **"Commit changes"**
4. GitHub saves your changes

### Step 5: Deploy to Netlify (100% FREE - No Credit Card Required)

**Important: Netlify is completely FREE for personal portfolios. You get:**
- Free hosting forever
- Free SSL certificate (HTTPS)
- Free automatic deployments from GitHub
- Free bandwidth (100GB/month)
- Free build minutes (300 minutes/month - more than enough)
- No credit card required to start
- No hidden costs

Now let's make your portfolio live on the internet:

1. **Sign up for Netlify (FREE)**
   - Go to [netlify.com](https://www.netlify.com/)
   - Click **"Sign up"**
   - Choose **"Sign up with GitHub"** (easiest and free)
   - No credit card required

2. **Create a New Site (FREE)**
   - Click **"Add new site"** → **"Import an existing project"**
   - Click **"GitHub"**
   - Find and select your portfolio repository
   - Authorize Netlify to access your repository

3. **Configure Settings (Auto-detected - FREE)**
   - Netlify will automatically detect Astro settings
   - You don't need to change anything
   - All settings are pre-configured
   - Just click **"Deploy site"**

4. **Wait for Deployment (Takes 2-3 minutes)**
   - This takes about 2-3 minutes
   - You'll see a progress bar
   - Once done, your site is LIVE
   - All completely FREE

5. **Get Your FREE URL**
   - Netlify gives you a free URL like: `https://random-name-12345.netlify.app`
   - You can customize this FREE URL
   - Click **"Site settings"** → **"Change site name"**
   - Choose something like: `yourname-portfolio`
   - Your new FREE URL: `https://yourname-portfolio.netlify.app`
   - This URL is yours forever, completely free

**FREE Forever Features:**
- Automatic deployments every time you push to GitHub
- Free SSL certificate (secure HTTPS)
- Free CDN (fast loading worldwide)
- Free form submissions (up to 100/month)
- Free analytics (basic)
- No ads on your site
- No "powered by" badges required

**Optional Paid Features (NOT required):**
- Custom domain ($12-15/year if you want yourdomain.com instead of .netlify.app)
- Advanced analytics
- More bandwidth/build minutes (only if you have millions of visitors)

**For a personal portfolio, the FREE plan is more than enough!**

### Step 6: Update Site URL in Your Code

Important for SEO:

1. Copy your Netlify URL (e.g., `https://yourname-portfolio.netlify.app`)
2. Go back to your GitHub repository
3. Click on `astro.config.mjs`
4. Click the pencil icon (edit button) to edit
5. Find line 28: `site: "https://portfolio-chaudhari.netlify.app"`
6. Replace with YOUR Netlify URL
7. Commit the change (click "Commit changes" at bottom)
8. Netlify will automatically redeploy (takes 1-2 minutes) - Still FREE

### You're Done!

Your portfolio is now live! Share it with:
- Potential employers
- On LinkedIn
- On your resume
- With friends and family

**Every time you edit your code on GitHub, Netlify automatically updates your live site - all for FREE!**

---

## For Developers

### Prerequisites

- Node.js 18.20.8 or higher
- npm or pnpm package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run astro` | Run Astro CLI commands |

---

## Customization Guide

### Changing Colors

The template uses a blue/purple gradient theme. To change colors:

#### Main Heading Gradient (Your Name)
```astro
Line 68-69:
from-blue-400 via-purple-500 to-pink-500
↓ Change to:
from-green-400 via-teal-500 to-cyan-500
```

#### Button Colors
```astro
Line 75:
from-blue-500 to-purple-600
↓ Change to:
from-green-500 to-emerald-600
```

**Available Tailwind Colors:**
- `blue`, `indigo`, `purple`, `pink`, `red`
- `orange`, `amber`, `yellow`, `lime`, `green`
- `emerald`, `teal`, `cyan`, `sky`

### Adding New Sections

Want to add a "Testimonials" or "Skills" section?

1. Open `src/pages/index.astro`
2. Find a good spot (between existing sections)
3. Add this template:

```astro
<!-- Your New Section -->
<section class="py-16 px-4 animate-section">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl lg:text-5xl font-bold mb-4">Section Title</h2>
      <p class="text-xl text-neutral-600 dark:text-neutral-400">Section subtitle</p>
    </div>

    <!-- Your content cards here -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Add your cards/content -->
    </div>
  </div>
</section>
```

### Changing Icons

This template uses two icon libraries:

1. **Remix Icons** (UI elements)
   - Browse: [remixicon.com](https://remixicon.com/)
   - Usage: `<Icon name="ri:icon-name" />`
   - Example: `<Icon name="ri:heart-line" />`

2. **Simple Icons** (Brand logos)
   - Browse: [simpleicons.org](https://simpleicons.org/)
   - Usage: `<Icon name="simple-icons:brand-name" />`
   - Example: `<Icon name="simple-icons:react" />`

### Updating Meta Tags for SEO

Edit `src/layouts/Layout.astro` around lines 40-67:

```astro
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",                    ← Change this
  "jobTitle": "Your Job Title",           ← Change this
  "description": "Your bio...",           ← Change this
  "url": "https://your-site.com",         ← Change this
  "sameAs": [                             ← Update your social URLs
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ]
}
```

---

## Deployment

### Netlify (Recommended - FREE & Easiest)

**IMPORTANT: Netlify is 100% FREE for personal portfolios**

**What's Included in the FREE Plan:**
- Unlimited sites
- 100GB bandwidth/month (plenty for portfolios)
- 300 build minutes/month
- Free SSL certificate (HTTPS)
- Free form submissions (100/month)
- Automatic deployments from GitHub
- Custom `.netlify.app` subdomain
- No credit card required
- No hidden fees
- No time limit (free forever)

**Optional Paid Features (NOT needed for most portfolios):**
- Custom domain (buy separately ~$12/year)
- More bandwidth (only if millions of visitors)
- Advanced analytics
- Background functions

**Automatic Deployment (Best for Beginners - FREE):**

1. Sign up at [netlify.com](https://www.netlify.com/) - FREE, no credit card
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Click "Deploy site"
5. Done! Every git push auto-deploys

**Build Settings** (Auto-detected):
```
Build command: pnpm install --no-frozen-lockfile && pnpm run build
Publish directory: dist
Node version: 18.20.8
```

All these settings are automatically detected by Netlify - you don't need to configure anything.

### Vercel (Also FREE & Easy)

**FREE Plan Includes:**
- Unlimited sites
- 100GB bandwidth/month
- Free SSL
- Automatic deployments

1. Sign up at [vercel.com](https://vercel.com/) - FREE
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done!

### GitHub Pages (FREE, Requires Setup)

**Completely FREE but requires more setup:**

1. Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name',
})
```

2. Enable GitHub Pages in Settings → Pages
3. Choose GitHub Actions as source
4. Create `.github/workflows/deploy.yml` (see Astro docs)

### Other FREE Platforms

- **Cloudflare Pages** - Free, fast global CDN
- **Railway** - Free tier available
- **Render** - Free tier available

**All these platforms offer free hosting for static sites like this portfolio.**

---

## Project Structure

```
portfolio-astro/
├── public/                          # Static files (served as-is)
│   ├── favicon.svg                 # Browser tab icon
│   ├── og-image.png                # Social media preview image (1200x630px)
│   ├── ChaudhariNeha_Resume.pdf    # Your resume PDF
│   └── sql_intermediate_certificate.jpg  # Certificate images
│
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Card/
│   │   └── Footer.astro           # Site footer
│   │
│   ├── layouts/
│   │   └── Layout.astro           # Main layout (meta tags, theme toggle)
│   │
│   ├── lib/
│   │   ├── constants.ts           # Animation settings
│   │   └── remark-reading-time.mjs
│   │
│   └── pages/
│       └── index.astro            # MAIN FILE - Your portfolio content
│
├── astro.config.mjs               # Astro settings (site URL, integrations)
├── tailwind.config.mjs            # Tailwind CSS configuration
├── netlify.toml                   # Netlify deployment settings
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

### Files You'll Edit Most

| File | What It Controls | When to Edit |
|------|-----------------|--------------|
| `src/pages/index.astro` | Your entire portfolio content | Change text, projects, experience |
| `src/layouts/Layout.astro` | SEO meta tags, theme toggle | Update site metadata |
| `astro.config.mjs` | Site URL | After deploying to get real URL |
| `public/ChaudhariNeha_Resume.pdf` | Your resume download | Replace with your resume |
| `public/og-image.png` | Social sharing preview | Create your own branded image |

---

## Technologies Used

### Core Framework
- **[Astro](https://astro.build/)** v4.0 - Modern static site generator
  - Zero JS by default (only loads what you need)
  - 100/100 Lighthouse scores
  - Built-in image optimization

### Styling & Design
- **[Tailwind CSS](https://tailwindcss.com/)** v3.4 - Utility-first CSS
- **[UnoCSS](https://unocss.dev/)** v0.58 - Instant atomic CSS
- **Dark Mode** - System preference detection + manual toggle

### Animations & Interactivity
- **[Motion](https://motion.dev/)** v12.7 - Smooth animations
- **[GSAP](https://greensap.com/)** v3.12 - Advanced animations

### Icons & Graphics
- **[Astro Icon](https://github.com/natemoo-re/astro-icon)** v1.1
- **[Remix Icons](https://remixicon.com/)** - 2,800+ UI icons
- **[Simple Icons](https://simpleicons.org/)** - 2,900+ brand logos

### SEO & Performance
- **Sitemap Generation** - Auto-generated XML sitemap
- **robots.txt** - Search engine directives
- **RSS Feed** - Optional blog feed support
- **Structured Data** - JSON-LD for rich search results
- **Open Graph** - Rich social media previews

### Development
- **[TypeScript](https://www.typescriptlang.org/)** v5.3 - Type safety
- **[MDX](https://mdxjs.com/)** - Markdown with components (for blog)

---

## Accessibility Features

This template follows WCAG 2.1 Level AA standards:

**Keyboard Navigation**
- Skip to content link
- All interactive elements keyboard accessible
- Visible focus indicators
- Proper tab order

**Screen Reader Support**
- Semantic HTML5 elements
- ARIA labels on icon-only buttons
- Descriptive alt text on images
- Proper heading hierarchy (h1 → h2 → h3)

**Visual Accessibility**
- High contrast colors (4.5:1 ratio minimum)
- Respects `prefers-reduced-motion`
- Respects `prefers-color-scheme`
- Scalable text (no fixed pixel sizes)

**Security**
- All external links use `rel="noopener noreferrer"`
- Content Security Policy headers (via Netlify)
- No mixed content issues

---

## Troubleshooting

### Common Issues

**Issue: Site won't build on Netlify**
- Check Node.js version is 18.20.8 or higher
- Verify all dependencies installed correctly
- Look at Netlify build logs for specific errors

**Issue: Images not showing**
- Make sure images are in `public` folder
- Check file names match exactly (case-sensitive)
- Verify image paths start with `/` (e.g., `/image.jpg`)

**Issue: Theme toggle not working**
- Clear browser cache
- Check browser console for JavaScript errors
- Ensure `Layout.astro` theme script is present

**Issue: Changes not appearing on live site**
- Wait 2-3 minutes for Netlify to rebuild
- Check deployment status in Netlify dashboard
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Need More Help?

- [Astro Documentation](https://docs.astro.build/)
- [Astro Discord Community](https://astro.build/chat)
- [Open an Issue](https://github.com/yourusername/portfolio-template/issues)

---

## Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation.

### How to Contribute

1. **Fork** this repository
2. **Create a branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Commit**: `git commit -m "Add amazing feature"`
5. **Push**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Ideas for Contributions

- New color theme presets
- Additional sections (testimonials, blog, contact form)
- Accessibility improvements
- Internationalization (i18n) support
- Analytics integration tutorials
- Animation variants
- Better documentation
- Bug fixes

---

## License

This project is licensed under the **MIT License**.

**What you CAN do:**
- Use for personal portfolios
- Use for commercial projects
- Modify and customize
- Distribute and sell

**What you MUST do:**
- Include the original MIT license
- Give credit to original authors

**What you CANNOT do:**
- Hold authors liable for issues

See the [LICENSE](LICENSE) file for full details.

---

## Credits & Acknowledgments

### Original Template
**[astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio)** by [Gianmarco Cavallo](https://github.com/Ladvace)
- Original bento-style design concept
- Base Astro structure and animations

### Enhanced Version
**Maintained by [Neha Chaudhari](https://github.com/nebullii)**

**Major Enhancements:**
- Complete accessibility overhaul (WCAG 2.1 AA)
- Advanced SEO optimization
- Security improvements
- Enhanced responsive design
- Professional icon integration
- Beginner-friendly documentation

### Built With
- Icons from [Remix Icon](https://remixicon.com/) and [Simple Icons](https://simpleicons.org/)
- Fonts: System font stack for optimal performance
- Deployed on [Netlify](https://www.netlify.com/)

---

## Contributing

**We welcome contributions!**

Feel free to:
- Tweak the design - Make it your own or create variations
- Fix bugs - Report or fix issues you find
- Add features - New sections, animations, or improvements
- Improve docs - Help make this even more beginner-friendly
- Enhance accessibility - A11y contributions are highly valued

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**Ideas we'd love:**
- Alternative color schemes
- New layout variations
- Blog integration guide
- Video tutorials
- Translations

Every contribution makes this template better for everyone.

---

## Show Your Support

If this template helped you create an awesome portfolio:

- Star this repository on GitHub
- Share it on Twitter/LinkedIn
- Tell others about it
- Contribute improvements (see [CONTRIBUTING.md](CONTRIBUTING.md))

---

## Contact & Support

**Created by Neha Chaudhari**

- Website: [https://portfolio-chaudhari.netlify.app/](https://portfolio-chaudhari.netlify.app/)
- LinkedIn: [linkedin.com/in/nehavchaudhari](https://linkedin.com/in/nehavchaudhari)
- GitHub: [@nebullii](https://github.com/nebullii)

**Need Help?**
- Read the [Astro Docs](https://docs.astro.build/)
- Join [Astro Discord](https://astro.build/chat)
- [Report a Bug](https://github.com/yourusername/portfolio-template/issues)

---

## Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/portfolio-template?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/portfolio-template?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/portfolio-template)
![GitHub license](https://img.shields.io/github/license/yourusername/portfolio-template)

---

<div align="center">

**If this template helped you land your dream job, let me know!**

[Back to Top](#modern-portfolio-template)

</div>
