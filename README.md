# Quantum Mastery - Full-Stack Trading Platform

A comprehensive trading education and community platform built with Next.js, TypeScript, and modern web technologies.

## Features

- **Responsive Landing Pages**: Multiple marketing pages for different programs
- **Trader Dashboard**: Comprehensive dashboard similar to TraderWaves
- **User Authentication**: Secure authentication and authorization
- **Payment Integration**: Stripe integration for subscriptions
- **Community Features**: Trading competitions, leaderboards, and community access
- **Course Modules**: Structured learning paths for traders
- **Trade Journal**: Calendar-based journaling with analytics
- **Trade Copier**: Multi-account trade synchronization
- **Affiliate Program**: Commission-based referral system

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (configurable)
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form, Zod validation
- **Payments**: Stripe
- **Email**: Automated email workflows
- **Security**: Google reCAPTCHA, DDoS protection

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL (or compatible database)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing landing pages
│   ├── dashboard/         # Protected dashboard routes
│   └── api/              # API routes
├── components/            # Reusable React components
├── lib/                  # Utility functions and configurations
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: Application URL
- `NEXTAUTH_SECRET`: Secret for NextAuth
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `STRIPE_SECRET_KEY`: Stripe API secret key
- `STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `RECAPTCHA_SITE_KEY`: Google reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA secret key
- `EMAIL_FROM`: Default email sender
- `EMAIL_SERVER`: SMTP server configuration

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## License

Proprietary - All rights reserved
