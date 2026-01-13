#!/bin/bash

# Quantum Mastery - Auto-start PostgreSQL
# This script ensures PostgreSQL is running before starting the dev server

echo "🔍 Checking PostgreSQL status..."

if ! pg_isready -q; then
  echo "🚀 Starting PostgreSQL..."
  pg_ctl -D /opt/homebrew/var/postgresql@15 -l /opt/homebrew/var/log/postgresql@15.log start
  sleep 2
  
  if pg_isready -q; then
    echo "✅ PostgreSQL started successfully"
  else
    echo "❌ Failed to start PostgreSQL"
    exit 1
  fi
else
  echo "✅ PostgreSQL is already running"
fi

echo "🚀 Starting Next.js development server..."
npm run dev
