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


app/
│
├── (auth)/                       # Authentication group
│   ├── login/                    # Login page
│   │   └── page.tsx
│   ├── register/                 # Registration page
│   │   └── page.tsx
│   └── forgot-password/          # Password recovery
│       └── page.tsx
│
├── dashboard/                    # Main dashboard after login
│   ├── page.tsx                  # Dashboard overview
│   ├── layout.tsx                # Layout wrapper for dashboard
│   │
│   ├── models/                   # Model management routes
│   │   ├── page.tsx              # Model overview page
│   │   ├── [modelId]/            # Specific model route
│   │   │   ├── page.tsx          # Model details
│   │   │   ├── edit/             # Edit model
│   │   │   │   └── page.tsx
│   │   │   ├── metrics/          # Model metrics & performance
│   │   │   │   └── page.tsx
│   │   │   └── api-access/       # API management for this model
│   │   │       └── page.tsx
│   │   └── create/               # Create new model
│   │       └── page.tsx
│   │
│   ├── datasets/                 # Dataset management
│   │   ├── page.tsx              # Dataset overview
│   │   ├── [datasetId]/          # Specific dataset
│   │   │   ├── page.tsx          # Dataset details
│   │   │   ├── edit/             # Edit dataset
│   │   │   │   └── page.tsx
│   │   │   └── visualize/        # Dataset visualization
│   │   │       └── page.tsx
│   │   ├── create/               # Create new dataset
│   │   │   └── page.tsx
│   │   └── import/               # Import dataset
│   │       └── page.tsx
│   │
│   ├── training/                 # Training jobs
│   │   ├── page.tsx              # Training overview
│   │   ├── create/               # Create new training job
│   │   │   └── page.tsx
│   │   ├── templates/            # Training templates
│   │   │   ├── page.tsx
│   │   │   └── [templateId]/
│   │   │       └── page.tsx
│   │   └── [jobId]/              # Specific training job
│   │       ├── page.tsx          # Job details
│   │       ├── logs/             # Training logs
│   │       │   └── page.tsx
│   │       └── metrics/          # Training metrics
│   │           └── page.tsx
│   │
│   ├── api-management/           # API management
│   │   ├── page.tsx              # API overview
│   │   ├── keys/                 # API keys management
│   │   │   ├── page.tsx
│   │   │   └── [keyId]/
│   │   │       └── page.tsx
│   │   └── docs/                 # API documentation
│   │       ├── page.tsx
│   │       └── [modelId]/
│   │           └── page.tsx
│   │
│   ├── settings/                 # User settings
│   │   ├── page.tsx              # Settings overview
│   │   ├── profile/              # User profile
│   │   │   └── page.tsx
│   │   ├── billing/              # Billing information
│   │   │   └── page.tsx
│   │   └── team/                 # Team management
│   │       └── page.tsx
│   │
│   └── playground/               # Model testing playground
│       └── page.tsx
│
├── api/                          # API Routes
│   ├── auth/                     # Authentication endpoints
│   │   ├── login/
│   │   │   └── route.ts
│   │   ├── register/
│   │   │   └── route.ts
│   │   └── logout/
│   │       └── route.ts
│   │
│   ├── models/                   # Model management endpoints
│   │   ├── route.ts              # GET: list, POST: create
│   │   └── [modelId]/
│   │       ├── route.ts          # GET, PUT, DELETE
│   │       └── inference/
│   │           └── route.ts      # POST: run inference
│   │
│   ├── datasets/                 # Dataset management endpoints
│   │   ├── route.ts              # GET: list, POST: create
│   │   ├── import/
│   │   │   └── route.ts          # POST: import data
│   │   └── [datasetId]/
│   │       ├── route.ts          # GET, PUT, DELETE
│   │       └── validate/
│   │           └── route.ts      # POST: validate
│   │
│   ├── training/                 # Training job endpoints
│   │   ├── route.ts              # GET: list, POST: create
│   │   ├── templates/
│   │   │   ├── route.ts          # GET: list templates
│   │   │   └── [templateId]/
│   │   │       └── route.ts      # GET: template details
│   │   └── [jobId]/
│   │       ├── route.ts          # GET, PUT
│   │       ├── status/
│   │       │   └── route.ts      # GET: job status
│   │       ├── logs/
│   │       │   └── route.ts      # GET: training logs
│   │       └── cancel/
│   │           └── route.ts      # POST: cancel job
│   │
│   ├── keys/                     # API key management endpoints
│   │   ├── route.ts              # GET: list, POST: create
│   │   └── [keyId]/
│   │       └── route.ts          # GET, PUT, DELETE
│   │
│   └── usage/                    # Usage metrics endpoints
│       ├── route.ts              # GET: overall usage
│       └── [modelId]/
│           └── route.ts          # GET: model usage
│
├── (marketing)/                  # Marketing/public pages group
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Marketing layout
│   ├── pricing/                  # Pricing page
│   │   └── page.tsx
│   ├── features/                 # Features page
│   │   └── page.tsx
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── blog/                     # Blog section
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/               # Blog post
│   │       └── page.tsx
│   ├── docs/                     # Documentation
│   │   ├── page.tsx              # Docs home
│   │   └── [category]/
│   │       ├── page.tsx          # Category index
│   │       └── [slug]/
│   │           └── page.tsx      # Doc page
│   └── contact/                  # Contact page
│       └── page.tsx
│
└── layout.tsx                    # Root layout