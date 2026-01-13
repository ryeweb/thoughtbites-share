# Thought Bites Share - Public Sharing Subdomain

Public sharing subdomain for Thought Bites at `share.thoughtbites.app`. Anonymous visitors see teaser content with CTAs to download the app.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Update `.env.local` with your actual values:

**Important:** The file currently has placeholder values. You MUST update these for the app to work properly!

```bash
# Get these from your Supabase dashboard (Settings > API)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key_here

# iOS App Store ID (update after app is published)
NEXT_PUBLIC_IOS_APP_STORE_ID=123456789

# iOS URL Scheme (configured in your Xcode project Info.plist)
NEXT_PUBLIC_IOS_URL_SCHEME=thoughtbites
```

**How to get your Supabase credentials:**
1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the "Project URL" → paste as `NEXT_PUBLIC_SUPABASE_URL`
4. Copy the "anon public" key → paste as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Where to Update Branding & Configuration

1. **iOS App Store ID** (`/.env.local:4`)
   - Update `NEXT_PUBLIC_IOS_APP_STORE_ID` with your actual App Store ID
   - Format: Just the numeric ID (e.g., `1234567890`)
   - Used in: Download links and App Store redirects

2. **iOS URL Scheme** (`.env.local:5`)
   - Update `NEXT_PUBLIC_IOS_URL_SCHEME` when you configure your iOS app
   - This should match your iOS app's Info.plist URL scheme
   - Default: `thoughtbites` (becomes `thoughtbites://bite/[id]`)
   - How to set up in Xcode:
     1. Open your iOS project in Xcode
     2. Select your app target → Info tab
     3. Add URL Types → Add scheme: `thoughtbites`
     4. Update the value here to match

2. **Homepage Branding** (`/app/page.tsx`)
   - Update logo text: Line ~15 (search for "Thought Bites")
   - Update tagline: Look for "5 daily micro-lessons"
   - Update any marketing copy

3. **App Store Deep Link** (`/app/components/DownloadModal.tsx` and other components)
   - Search for: `NEXT_PUBLIC_IOS_APP_STORE_ID`
   - Update with your actual App Store ID once published

4. **URL Scheme Configuration**:
   - The deep link URL scheme is `thoughtbites://bite/[id]`
   - In your iOS app's `Info.plist`, add:
   ```xml
   <key>CFBundleURLTypes</key>
   <array>
     <dict>
       <key>CFBundleURLSchemes</key>
       <array>
         <string>thoughtbites</string>
       </array>
     </dict>
   </array>
   ```
   - In your iOS app, handle the URL scheme to open the correct bite

5. **Homepage Branding**: Update the homepage logo/tagline in `app/page.tsx`

## Database Setup

Ensure your Supabase tables are publicly readable:
- `bites` table (columns: id, title, hook, bullets, example, micro_action, category)
- `deep_dives` table (columns: id, bite_id, content)

## Development

```bash
npm run dev       # Start development server on http://localhost:3000
npm run build     # Build for production
npm run start     # Start production server
```

## Deployment

Deploy to Vercel with custom domain: share.thoughtbites.app

1. Connect to GitHub repo
2. Add environment variables (Supabase keys, App Store ID)
3. Set custom domain in Vercel settings

## iOS App Configuration

To enable deep linking from the web app to your iOS app:

1. In Xcode, add URL scheme to Info.plist:
   ```xml
   <key>CFBundleURLTypes</key>
   <array>
     <dict>
       <key>CFBundleURLSchemes</key>
       <array>
         <string>thoughtbites</string>
       </array>
     </dict>
   </array>
   ```

2. Handle incoming URLs in your iOS app (AppDelegate or SceneDelegate)
