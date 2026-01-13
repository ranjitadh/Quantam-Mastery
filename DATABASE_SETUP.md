# Database Setup Guide

## ✅ Setup Complete!

Your database has been successfully configured and is ready to use.

## 🚀 Quick Start

### Start Development Server (with auto PostgreSQL start)
```bash
npm run dev:auto
```

This will automatically:
1. Check if PostgreSQL is running
2. Start PostgreSQL if needed
3. Start the Next.js dev server

### Manual Database Commands

```bash
# Check database status
npm run db:status

# Start PostgreSQL
npm run db:start

# Stop PostgreSQL
npm run db:stop

# Reset and setup database
npm run db:setup
```

## 📝 Database Configuration

Your `.env` file has been automatically configured with:
```
DATABASE_URL="postgresql://ranjit@localhost:5432/quantum_mastery?schema=public"
```

## 🔧 Prisma Commands

```bash
# Push schema changes to database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Open Prisma Studio (Database GUI)
npx prisma studio

# Reset database (WARNING: Deletes all data)
npx prisma db push --force-reset
```

## 🗃️ Database Schema

Your database includes:
- **Users** - User accounts and authentication
- **AffiliateLinks** - Affiliate tracking
- **Trades** - Trading journal entries
- **Competitions** - Trading competitions
- And more...

## 🐛 Troubleshooting

### PostgreSQL won't start
```bash
# Remove stale PID file
rm /opt/homebrew/var/postgresql@15/postmaster.pid

# Start PostgreSQL
npm run db:start
```

### Database connection errors
```bash
# Check if PostgreSQL is running
npm run db:status

# If not running, start it
npm run db:start

# Reset database
npm run db:setup
```

### Permission errors
Make sure your `.env` file has the correct username:
```
DATABASE_URL="postgresql://ranjit@localhost:5432/quantum_mastery?schema=public"
```

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Next.js Database Guide](https://nextjs.org/docs/app/building-your-application/data-fetching)

## 🎉 You're All Set!

Your database is configured and ready. Try registering a new user at:
http://localhost:3000/register
