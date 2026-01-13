# Supabase Database Setup

## 🔴 CRITICAL: Enable Public Read Access

Your sharing subdomain needs **anonymous read access** to the `bites` and `deep_dives` tables.

### Fix RLS (Row Level Security) Policies

#### Option 1: Quick Fix (Enable Public Read)

Run this SQL in your Supabase SQL Editor:

```sql
-- Enable public read access for bites table
CREATE POLICY "Allow anonymous read access to bites"
ON bites
FOR SELECT
TO anon
USING (true);

-- Enable public read access for deep_dives table
CREATE POLICY "Allow anonymous read access to deep_dives"
ON deep_dives
FOR SELECT
TO anon
USING (true);
```

#### Option 2: Via Supabase Dashboard

1. Go to **Table Editor** → select `bites` table
2. Click **RLS** (Row Level Security) at the top
3. Click **New Policy**
4. Choose **"Enable read access for all users"**
5. Policy name: `Allow public read`
6. Target roles: Check **anon**
7. USING expression: `true`
8. Click **Save**

Repeat for the `deep_dives` table.

### Verify Access

After adding the policies, test with:

```bash
node test-supabase-detail.js
```

You should see:
```
✅ Table has X rows
✅ Got X rows
First bite ID: abc-123-def...
```

## Database Schema Requirements

### `bites` table columns:
- `id` (uuid, primary key)
- `title` (text)
- `hook` (text)
- `bullets` (jsonb) - Array of strings: `["bullet 1", "bullet 2", "bullet 3"]`
- `example` (text)
- `micro_action` (text)
- `category` (text) - One of: Entrepreneurship, Psychology, Decision-making, Communication, Health, Technology, Productivity, Design, Finance

### `deep_dives` table columns:
- `id` (uuid, primary key)
- `bite_id` (uuid, foreign key to bites.id)
- `content` (text)

## Security Notes

✅ **This is safe for your use case** because:
- No authentication data is exposed
- Content is meant to be publicly shareable
- No write/update/delete access is granted
- Only SELECT (read) operations are allowed

🔒 **Keep these private:**
- User data tables
- Authentication tables
- Private notes/drafts
- Analytics data
