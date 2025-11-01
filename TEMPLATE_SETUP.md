# Template Setup Guide

This guide will help you customize this portfolio template for your own use.

## Quick Setup Checklist

After cloning or using this template, follow these steps:

### 1. Personal Information
- [ ] Update `src/pages/index.astro`
  - Replace "Your Name Here" with your name
  - Replace "Your Job Title" with your actual job title
  - Update professional bio and tagline
  - Replace all placeholder emails with your email
  - Update social media links (GitHub, LinkedIn, etc.)
  - Remove social links you don't use
  - Update statistics in the Quick Stats section
  - Update "Current Focus" section with your goals

### 2. Work Experience
- [ ] Edit experience section in `src/pages/index.astro`
  - Replace company names, dates, and locations
  - Update job titles and descriptions
  - Replace technology tags with your tech stack
  - Update company website links

### 3. Education
- [ ] Update education section in `src/pages/index.astro`
  - Replace university names and degrees
  - Update graduation dates
  - Modify descriptions as needed

### 4. Projects
- [ ] Customize projects section in `src/pages/index.astro`
  - Replace with your own projects
  - Update project names, descriptions, and tech stacks
  - Add your live demo and GitHub links
  - Update project icons/colors

### 5. Certifications (Optional)
- [ ] If you have certifications:
  - Add your certificate images to `/public/` folder
  - Update certificate section in `src/pages/index.astro`
  - Update certificate links and descriptions
- [ ] If you don't have certifications:
  - Remove the entire certifications section from `index.astro`

### 6. Skills
- [ ] Update technical skills section in `src/pages/index.astro`
  - Replace technologies with your tech stack
  - Update proficiency levels if using skill bars
  - Add/remove skills as needed

### 7. Footer & Layout
- [ ] Edit `src/components/Footer.astro`
  - Update copyright name
  - Update all social media links
  - Remove links you don't want to include

- [ ] Edit `src/layouts/Layout.astro`
  - Update JSON-LD structured data:
    - Your name
    - Job title
    - Description
    - Alumni information
    - Social media URLs

### 8. Configuration
- [ ] Update `astro.config.mjs`
  - Replace `site:` URL with your actual deployment URL after deploying

### 9. Assets
- [ ] Replace files in `/public/` folder:
  - `me.webp` - Your profile photo
  - `og-image.png` - Your Open Graph image (1200x630px)
  - `favicon.svg` / `favicon.ico` - Your favicon
  - Add your resume PDF (e.g., `YourName_Resume.pdf`)
  - Add any certificate images you reference

### 10. Meta Information
- [ ] Update page title and description in `src/pages/index.astro`
- [ ] Update meta tags in `src/layouts/Layout.astro`

## What to Delete

If you don't need certain sections, you can safely remove them:

### Removing Certifications Section
Find and delete the entire certifications section in `src/pages/index.astro` (look for the comment `<!-- Certifications -->`).

### Removing Education Section
Find and delete the entire education section in `src/pages/index.astro` (look for the comment `<!-- Education -->`).

### Removing Projects
Find and delete individual project cards or the entire projects section in `src/pages/index.astro`.

### Removing Social Links
In `src/pages/index.astro` and `src/components/Footer.astro`, remove individual `<a>` tags for social platforms you don't use.

## Finding TODO Comments

Search for `TODO:` in the codebase to find all placeholders that need replacement:

```bash
grep -r "TODO:" src/
```

## Testing Locally

After making changes, test locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see your changes.

## Common Customizations

### Changing Colors
- Edit `tailwind.config.cjs` to change theme colors
- Update gradient colors in component classes

### Adding More Projects
- Duplicate an existing project card in `src/pages/index.astro`
- Update all fields with new project info

### Adding a Blog
- Check Astro documentation for content collections
- This template is primarily for portfolios, but can be extended

## Need Help?

- Check the main [README.md](./README.md) for deployment instructions
- Visit [Astro Documentation](https://docs.astro.build)
- Open an issue on the GitHub repository

## Final Steps

After customization:

1. Test locally
2. Commit your changes
3. Deploy to Netlify (see README.md for instructions)
4. Update `astro.config.mjs` with your actual site URL
5. Redeploy with the updated URL

Your portfolio is now ready!
