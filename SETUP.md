# Quick Setup Guide

## ✅ Project is ready!

Your Next.js 14 sharing subdomain for Thought Bites is fully built and ready to test.

## 🚀 Next Steps

### 1. Update Supabase Credentials

Edit `.env.local` and replace the placeholder values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
```

**Where to find these:**
- Open your Supabase dashboard
- Go to Settings > API
- Copy "Project URL" and "anon public" key

### 2. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 3. Test with a Real Bite ID

Once the dev server is running, test a bite by visiting:
```
http://localhost:3000/bite/[YOUR_BITE_ID]
```

Replace `[YOUR_BITE_ID]` with an actual bite UUID from your Supabase `bites` table.

### 4. Test Deep Dive Redirect

Test the deep dive redirect route:
```
http://localhost:3000/deep-dive/[YOUR_DEEP_DIVE_ID]
```

This should automatically redirect to the corresponding bite page.

## 📱 iOS Deep Link Testing

To test the iOS deep link functionality:

1. Open the bite page on an iOS device
2. You should see "Open in Thought Bites" button
3. Clicking it will try to open: `thoughtbites://bite/[id]`
4. Configure this URL scheme in your iOS app's Info.plist

## 🎨 Customize Branding

- **Homepage text**: Edit `app/page.tsx` (line ~15-20)
- **App Store ID**: Update `.env.local` after app is published
- **Colors**: Already configured in `tailwind.config.ts`

## 🚢 Deploy to Production

When ready to deploy:

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Set custom domain: `share.thoughtbites.app`

## 📋 Features Included

✅ Mobile-first responsive design
✅ Purple gradient background
✅ Persistent bottom CTA bar
✅ iOS deep link detection
✅ Download modal with App Store link
✅ Error states for missing content
✅ Loading skeletons
✅ Open Graph meta tags for social sharing
✅ Deep dive redirect route
✅ Homepage with branding

## 🛠️ Troubleshooting

**Build fails?**
- Make sure `.env.local` has valid URL format (even if placeholder)
- Run `rm -rf .next && npm run build`

**Page not loading?**
- Check Supabase credentials are correct
- Verify bite ID exists in your database
- Check browser console for errors

**Deep link not working?**
- Ensure iOS app has URL scheme configured
- Test on actual iOS device (not simulator for full testing)
- Check that URL scheme matches in both places
