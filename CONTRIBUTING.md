# Contributing to Portfolio Template

Thank you for your interest in improving this portfolio template!

## Philosophy

This template is designed to be **beginner-friendly** and **accessible**. Any contributions should maintain these core values:
- Easy to use for non-developers
- WCAG 2.1 AA accessibility compliance
- Clear documentation
- Performance-focused
- SEO-optimized

## Ways to Contribute

### Design Improvements
**Feel free to tweak the design!** Some ideas:
- Alternative color schemes
- New layout variations
- Animation improvements
- Better mobile responsiveness
- Unique visual elements

### Bug Fixes
Found a bug? Please:
1. Check if it's already reported in [Issues](https://github.com/nebullii/portfolio/issues)
2. If not, open a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### New Features
Before adding major features, please:
1. Open an issue to discuss it first
2. Ensure it aligns with the beginner-friendly philosophy
3. Update documentation accordingly

**Feature ideas we'd love:**
- Additional portfolio sections
- More animation options
- Blog integration guide
- Alternative project card layouts
- More social media icons
- Internationalization (i18n)

### Documentation
Help make this template even more accessible:
- Fix typos or unclear instructions
- Add examples for common customizations
- Translate documentation to other languages
- Create video tutorials
- Add troubleshooting guides

### Accessibility
Accessibility is a priority! Contributions that improve a11y are highly valued:
- Screen reader improvements
- Keyboard navigation enhancements
- Color contrast fixes
- Focus state improvements
- ARIA label additions

## How to Contribute

### Quick Fixes (Typos, Small Changes)
1. Click the "Edit" button on GitHub
2. Make your changes
3. Submit a pull request

### Larger Contributions

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio.git
   cd portfolio
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make your changes**
   - Write clear, commented code
   - Follow existing code style
   - Test thoroughly

5. **Test locally**
   ```bash
   pnpm install
   pnpm run dev
   ```
   - Check http://localhost:4321
   - Test dark/light mode
   - Test responsiveness
   - Test keyboard navigation

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   # or
   git commit -m "Fix: your bug fix description"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes clearly
   - Reference any related issues

## Pull Request Guidelines

### Good PR Checklist
- [ ] Descriptive title and detailed description
- [ ] Code follows existing style and conventions
- [ ] Changes are tested locally
- [ ] Documentation updated (if needed)
- [ ] Accessibility maintained or improved
- [ ] No breaking changes (or clearly documented)
- [ ] Commits are clear and logical

### PR Description Template
```markdown
## What does this PR do?
Brief description of changes

## Why is this needed?
Problem this solves or feature this adds

## How to test
Steps to verify the changes work

## Screenshots (if applicable)
Before/after images

## Checklist
- [ ] Tested locally
- [ ] Documentation updated
- [ ] Accessibility checked
- [ ] No breaking changes
```

## Code Style

### General Guidelines
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Follow existing file structure

### Astro/TypeScript
- Use TypeScript for type safety
- Follow Astro component conventions
- Keep styles scoped when possible

### Tailwind CSS
- Use Tailwind utility classes
- Maintain dark mode support with `dark:` variants
- Keep responsive design with `md:`, `lg:` breakpoints

### Accessibility
- Always include ARIA labels
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Test with screen readers when possible

## What We're Looking For

### High Priority
- Accessibility improvements
- Performance optimizations
- Bug fixes
- Documentation clarity
- Mobile responsiveness

### Medium Priority
- Design variations
- New features (if simple and useful)
- Animation enhancements
- Better error messages

### Lower Priority
- Major architectural changes (discuss first)
- Features that add complexity
- Breaking changes

## Not Sure Where to Start?

Check out issues labeled:
- `good first issue` - Great for newcomers
- `help wanted` - We need your expertise!
- `documentation` - Improve the docs
- `enhancement` - New feature ideas

## Questions?

- Open an [issue](https://github.com/nebullii/portfolio/issues) for questions
- Check existing issues and discussions first
- Be respectful and patient

## Recognition

Contributors will be:
- Listed in the README
- Credited in release notes
- Appreciated immensely

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Thank You!

Every contribution, no matter how small, makes this template better for everyone. Whether you're fixing a typo, adding a feature, or improving accessibility - **your effort matters**!

**Feel free to experiment, tweak the design, and make this template your own!**

Happy coding!
