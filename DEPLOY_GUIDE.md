# Deployment Guide for AWS EC2

This guide assumes you have `node`, `npm`, `nginx`, and `postgresql` installed on your EC2 instance.

## 1. Get the Latest Code
Login to your EC2 instance and navigate to your project folder.
```bash
cd /path/to/Quantam-Mastery
git pull origin feat/upgradeUI
```

## 2. Environment Setup
Create a production `.env` file. You can use the `env.example` as a template.
```bash
cp env.example .env
nano .env
```
**Required Variables:**
- `DATABASE_URL`: Connection string to your Postgres DB (e.g., `postgresql://db_user:password@localhost:5432/quantum_db`).
- `NEXTAUTH_SECRET`: Generate one with `openssl rand -base64 32`.
- `NEXTAUTH_URL`: Your domain or IP (e.g., `http://your-ec2-ip` or `https://example.com`).

## 3. Install Dependencies
```bash
npm install
```

## 4. Database Setup
Apply migrations to your production database.
```bash
npx prisma migrate deploy
npx prisma db seed
```

## 5. Build the Application
Compile the Next.js app for production.
```bash
npm run build
```

## 6. Start with PM2 (Process Manager)
Use PM2 to keep the app running in the background.
```bash
# Install PM2 if not already installed
npm install -g pm2

# Start the app
pm2 start npm --name "quantum-app" -- start

# Save the process list to restart on reboot
pm2 save
pm2 startup
```

## 7. Configure Nginx (Reverse Proxy)
Edit your Nginx config site (usually `/etc/nginx/sites-available/default`).

```nginx
server {
    listen 80;
    server_name 18.215.47.179; # or your_server_ip

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Check and restart Nginx:
```bash
v
```
