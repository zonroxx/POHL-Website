# Pacific Ombudsman for Humanitarian Law (POHL) Website

Modern remake of the POHL non-profit organization website.

## Overview

This is a static website built with HTML, CSS, and JavaScript for the Pacific Ombudsman for Humanitarian Law, a 501(c)(3) non-profit organization providing legal services and support to victims of crime in the Pacific Region.

## Pages

- **Home** - Introduction to POHL and its mission
- **About** - Vision, mission, and operations information
- **Services** - Overview of legal services, translation, and support programs
- **Founders** - Board of Directors information
- **Partners** - Collaborating organizations and agencies
- **Activities** - Community outreach and awareness campaigns
- **Contacts** - Contact information and inquiry form
- **News** - News updates and job announcements
- **Donate** - Donation information and methods

## Color Theme

```css
--text: #180209;
--background: #fef8fa;
--primary: #ea2d55;
--secondary: #f3c088;
--accent: #eed454;
```

## Features

- Fully responsive design for mobile, tablet, and desktop
- Modern, clean interface with accessible navigation
- Font Awesome icons integration
- Mobile-friendly hamburger menu
- Contact and donation forms
- Social media integration (Facebook, Twitter)

## Technology Stack

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- Font Awesome 6.4.0 (CDN)

## File Structure

```
New/
├── index.html
├── about.html
├── services.html
├── founders.html
├── partners.html
├── activities.html
├── contacts.html
├── news.html
├── donate.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── [various images from original site]
└── README.md
```

## Getting Started

1. Simply open `index.html` in a web browser to view the site locally
2. For deployment to GitHub Pages:
   - Create a new repository on GitHub
   - Upload all files from the `New` folder
   - Enable GitHub Pages in repository settings
   - Select the main branch as source

## Form Functionality

The contact and donation forms currently use a placeholder action (`php/html_form_send.php`). For production:

1. Set up a backend form handler (PHP, Node.js, etc.)
2. Or use a form service like Formspree, Netlify Forms, or similar
3. Update the `action` attribute in the forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 Pacific Ombudsman for Humanitarian Law. All rights reserved.

## Contact

Pacific Ombudsman for Humanitarian Law
Suite 101, Marianas Business Plaza
Saipan, MP 96950, USA
Phone: 670.234.9480
Email: manager.pohlaw@gmail.com
