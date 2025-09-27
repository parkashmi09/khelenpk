# 🔍 How to Check Your Khelenpk.com Deployment

## Current Status:
- ✅ **Server is reachable** (104.194.154.181)
- ✅ **Domain resolves** (khelenpk.com)
- ⚠️ **Web server not responding** (needs deployment)
- ⚠️ **SSH requires password** (o41gJCQ6cth9GG)

## 📋 Step-by-Step Check Process:

### 1. **Deploy the Website First**
```bash
cd /Users/apple/Downloads/Corefrontend/Main
./deploy.sh
# Enter password when prompted: o41gJCQ6cth9GG
```

### 2. **Check Server Status Manually**
```bash
# Connect to server
ssh root@104.194.154.181
# Password: o41gJCQ6cth9GG

# Check if files are deployed
ls -la /var/www/html/

# Check web server status
systemctl status apache2
# OR
systemctl status nginx

# Check if web server is running
ps aux | grep apache
ps aux | grep nginx
```

### 3. **Test Website Access**

#### Option A: Direct IP Access
- Open browser and go to: `http://104.194.154.181`
- Should show your Khelenpk website

#### Option B: Domain Access
- Open browser and go to: `https://khelenpk.com`
- Should redirect to your website

### 4. **Common Issues & Solutions**

#### If website shows "403 Forbidden" or "404 Not Found":
```bash
# On server, check permissions
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/

# Check if index.html exists
ls -la /var/www/html/index.html
```

#### If website doesn't load at all:
```bash
# Check if web server is running
systemctl start apache2
# OR
systemctl start nginx

# Check if port 80 is listening
netstat -tlnp | grep :80
```

#### If domain doesn't work but IP does:
- Check DNS settings
- Domain might need time to propagate (up to 24 hours)

### 5. **Quick Health Check Commands**

```bash
# Test from your local machine
curl -I http://104.194.154.181
curl -I https://khelenpk.com

# Check if specific files are accessible
curl http://104.194.154.181/index.html
curl http://104.194.154.181/assets/index-lQQmdCng.js
```

## 🎯 Expected Results After Deployment:

1. **Files in /var/www/html/:**
   - `index.html` (main page)
   - `assets/` folder (CSS, JS, images)
   - `favicon.ico`
   - `game.html`

2. **Website should show:**
   - Khelenpk branding
   - Cricket betting content
   - WhatsApp button
   - All images and styling working

3. **Console should show:**
   - No JavaScript errors
   - All assets loading properly

## 🚨 If Still Not Working:

1. **Check server logs:**
   ```bash
   tail -f /var/log/apache2/error.log
   # OR
   tail -f /var/log/nginx/error.log
   ```

2. **Verify web server configuration:**
   ```bash
   apache2ctl configtest
   # OR
   nginx -t
   ```

3. **Check firewall settings:**
   ```bash
   ufw status
   iptables -L
   ```

## 📞 Need Help?
- Server IP: 104.194.154.181
- Password: o41gJCQ6cth9GG
- Domain: khelenpk.com
- Web directory: /var/www/html/
