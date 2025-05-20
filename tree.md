# Zentoric Project Structure

```
src/
├── app/
│   ├── layout.js                  # Root layout with providers
│   ├── page.js                    # Home page
│   ├── globals.css                # Global styles
│
├── components/
│   ├── ui/                        # Reusable UI components
│   │   ├── button.jsx             # Button component
│   │   ├── card.jsx               # Card component
│   │   ├── container.jsx          # Container component
│   │   ├── gradient-border.jsx    # Gradient border component
│   │   ├── gradient-button.jsx    # Gradient button component 
│   │   ├── grid-background.jsx    # Grid background component
│   │   ├── section-heading.jsx    # Section heading component
│   │   ├── theme-toggle.jsx       # Theme toggle component
│   │   └── code-block.jsx         # Code block component
│   │
│   ├── layout/                    # Layout components
│   │   ├── navbar.jsx             # Navigation bar component
│   │   └── footer.jsx             # Footer component
│   │
│   ├── home/                      # Home page components
│   │   ├── hero.jsx               # Hero section component
│   │   ├── features.jsx           # Features section component
│   │   ├── how-it-works.jsx       # How it works section component
│   │   ├── testimonials.jsx       # Testimonials section component
│   │   ├── pricing.jsx            # Pricing section component
│   │   ├── faq.jsx                # FAQ section component
│   │   └── cta.jsx                # Call to action component
│
├── context/
│   └── theme-context.jsx          # Theme context for dark/light mode
│
├── lib/
│   └── utils.js                   # Utility functions
│
└── styles/
    └── animations.css             # CSS animations
```