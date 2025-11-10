# TODO: Fix Theme Colors and Reflections

## Overview
Replace JavaScript-based theme conditionals (`theme === 'dark' ? ... : ...`) with Tailwind's built-in `dark:` variants for consistent theme application.

## Steps
- [x] Update App.tsx to use dark: classes
- [ ] Update Hero.tsx to use dark: classes
- [ ] Update Navbar.tsx to use dark: classes
- [ ] Update About.tsx to use dark: classes
- [ ] Update Skills.tsx to use dark: classes
- [ ] Update Projects.tsx to use dark: classes
- [ ] Update Footer.tsx to use dark: classes
- [ ] Update Experience.tsx to use dark: classes
- [ ] Update ContactForm.tsx to use dark: classes
- [ ] Test theme switching functionality
- [ ] Verify animations still work with new classes

## Notes
- ThemeContext.tsx remains unchanged as it handles the 'dark' class toggle
- Ensure all theme-dependent styles are converted
- Use multiple diffs in edit_file for efficiency
