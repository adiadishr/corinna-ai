# Corinna AI - AI Sales Assistant

An AI-powered sales assistant chatbot that can be embedded into any website with just a snippet of code. Built with Next.js, TypeScript, and Tailwind CSS.

![Corinna AI Logo](/public/images/corinna-ai-logo.png)

## Features

- 🤖 AI-powered sales assistant
- 📝 Lead capture without forms
- 🎨 Modern UI with dark/light mode
- 🔒 Authentication with Clerk
- 💳 Subscription management
- 🌐 Multi-domain support
- 📊 Analytics and reporting

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/adiadishr/corinna-ai.git
cd corinna-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="your_postgresql_url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── auth/           # Authentication pages
│   ├── dashboard/      # Dashboard pages
│   └── layout.tsx      # Root layout
├── components/         
│   ├── ui/            # Reusable UI components
│   └── forms/         # Form components
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
└── styles/            # Global styles
```

## UI Components

The project uses a combination of Radix UI primitives and shadcn/ui components. All components are fully customizable and support both light and dark modes.

### Key Components:
- Sidebar Navigation
- Cards
- Modals/Sheets
- Forms
- Tables
- Charts
- Tooltips

## Database Schema

The main entities in the database include:
- Users
- Domains
- ChatBots
- Campaigns
- Subscriptions

Reference the Prisma schema for detailed model definitions:
```typescript:prisma/schema.prisma
startLine: 16
endLine: 41
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@corinna.ai or join our Discord community.

---

Built with ❤️ by [Your Team Name]
