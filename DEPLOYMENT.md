# Deployment Instructions for SITEDZ Website

## Vercel Deployment

This website is optimized for deployment on Vercel. Follow these steps:

### Prerequisites
- Vercel account (sign up at https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect the project settings

3. **Configuration**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables**
   - No environment variables are required for this project

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at the provided URL

### SSL/HTTPS
- SSL certificates are automatically provided by Vercel
- HTTPS is enabled by default
- Security headers are configured in `vercel.json`

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

### Responsive Design
The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

### Performance Optimizations
- Images and videos are optimized for web
- CSS is minified and optimized
- JavaScript is bundled and minified
- Responsive images prevent oversized downloads

### Security Headers
The following security headers are automatically applied via `vercel.json`:
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test responsive design on multiple devices
- [ ] Check all forms and contact links
- [ ] Verify SSL certificate is active
- [ ] Test page load speed
- [ ] Verify security headers are applied
