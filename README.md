# Property Pilot 🏠

**The Future of Property Management is Coming**

Property Pilot is a revolutionary platform designed specifically for Airbnb hosts and property managers who want to streamline their rental operations with intelligent automation and data-driven insights.

## ✨ Features

### 🚀 Coming Soon

- **Smart Email Automation** - Automatically send check-in instructions, house rules, and checkout reminders
- **Revenue-Optimized Calendar** - See all bookings, track profits, and get AI-powered pricing suggestions
- **Review Collection & Management** - Automatically collect and manage guest reviews across all platforms

### 🎯 Target Audience

- Airbnb hosts
- Property managers
- Vacation rental owners
- Real estate investors

## 🎨 Design

Built with a modern, vibrant design featuring:

- **Purple & Pink Color Scheme** - Modern and professional
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Enhanced user experience
- **Clean Typography** - Easy to read and navigate

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom gradients
- **Icons**: Remix Icons
- **UI Components**: Custom components with modern design
- **Backend**: Supabase for database and API
- **Notifications**: Sonner for toast notifications
- **Deployment**: Ready for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (for waitlist functionality)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kadynjaipearce/property-pilot-frontend.git
   cd property-pilot-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Supabase** (see [DATABASE_SETUP.md](./DATABASE_SETUP.md))

   - Create a Supabase project
   - Run the database schema
   - Add environment variables to `.env.local`

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Sections

- **Hero Section** - Main landing with email signup
- **Demo Preview** - Sneak peek of the platform
- **Features** - Game-changing features overview
- **Waitlist Benefits** - Exclusive early access perks
- **Testimonials** - What property professionals say
- **Final CTA** - Join the waitlist

## 🎯 Waitlist System

### Features

- **Email Collection** - Secure email capture with validation
- **Real-time Counter** - Dynamic signup count display
- **Optimistic Updates** - Instant UI feedback
- **Toast Notifications** - Success/error feedback with Sonner
- **Source Tracking** - Track signups from different sections
- **Duplicate Prevention** - Prevents duplicate email submissions

### API Endpoints

- `POST /api/waitlist` - Add email to waitlist
- `GET /api/waitlist/count` - Get total signup count

### Waitlist Benefits

Join the exclusive waitlist to get:

- **50% off first year** (Early Bird Special)
- **Exclusive beta access** before public launch
- **Free onboarding and setup**
- **Direct input on final features**

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
property-pilot-frontend/
├── app/                 # Next.js app directory
├── components/          # React components
│   └── ui/             # UI components
├── public/             # Static assets
└── lib/                # Utility functions
```

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a production URL instantly

## 📈 Analytics & Tracking

Ready for integration with:

- Google Analytics
- Facebook Pixel
- Google Workspace
- Email marketing platforms

## 🤝 Contributing

This is a private project, but we welcome feedback and suggestions for future features.

## 📞 Contact

- **Website**: [Property Pilot](https://propertypilot.com.au)
- **Email**: [Contact us for early access]

---
