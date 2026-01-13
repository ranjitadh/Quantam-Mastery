#!/bin/bash

# Quantum Mastery - Database Setup Script
# This script sets up the database and ensures PostgreSQL is running

echo "🚀 Starting Quantum Mastery Database Setup..."

# Check if PostgreSQL is running
if ! pg_isready -q; then
  echo "📦 Starting PostgreSQL..."
  pg_ctl -D /opt/homebrew/var/postgresql@15 -l /opt/homebrew/var/log/postgresql@15.log start
  sleep 2
fi

echo "✅ PostgreSQL is running"

# Get current username
CURRENT_USER=$(whoami)
echo "👤 Current user: $CURRENT_USER"

# Update .env file with correct DATABASE_URL
echo "📝 Updating .env file..."
if [ -f .env ]; then
  # Backup existing .env
  cp .env .env.backup
  
  # Update DATABASE_URL
  if grep -q "DATABASE_URL" .env; then
    sed -i '' "s|DATABASE_URL=.*|DATABASE_URL=\"postgresql://$CURRENT_USER@localhost:5432/quantum_mastery?schema=public\"|g" .env
  else
    echo "DATABASE_URL=\"postgresql://$CURRENT_USER@localhost:5432/quantum_mastery?schema=public\"" >> .env
  fi
  echo "✅ .env file updated"
else
  echo "⚠️  .env file not found, creating one..."
  cat > .env << EOF
DATABASE_URL="postgresql://$CURRENT_USER@localhost:5432/quantum_mastery?schema=public"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"
NEXTAUTH_URL="http://localhost:3000"
EOF
  echo "✅ .env file created"
fi

# Run Prisma migrations
echo "🔄 Running Prisma migrations..."
npx prisma db push --skip-generate

if [ $? -eq 0 ]; then
  echo "✅ Database migrations completed successfully!"
  
  # Generate Prisma Client
  echo "🔧 Generating Prisma Client..."
  npx prisma generate
  
  echo ""
  echo "🎉 Setup Complete!"
  echo "✨ Your database is ready to use"
  echo "🚀 You can now run: npm run dev"
else
  echo "❌ Migration failed. Please check the error above."
  exit 1
fi
