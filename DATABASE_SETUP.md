# Database Setup Guide

## Supabase Configuration

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key from the project settings

### 2. Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Schema

Run this SQL in your Supabase SQL editor to create the waitlist and video tables:

```sql
-- Waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'website'
);

-- Video table for YouTube video configuration
CREATE TABLE video (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT -- This field contains the YouTube video ID
);

-- Insert default video config
INSERT INTO video (source)
VALUES ('dQw4w9WgXcQ');

-- Create indexes for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_source ON waitlist(source);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

### 4. Row Level Security (RLS)

Enable RLS and create policies for the tables:

```sql
-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE video ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated and anonymous users for waitlist
CREATE POLICY "Allow inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Allow reads for count queries (no sensitive data)
CREATE POLICY "Allow reads" ON waitlist
  FOR SELECT USING (true);

-- Allow reads for video (public data)
CREATE POLICY "Allow video reads" ON video
  FOR SELECT USING (true);

-- Allow updates for video (admin only - you can restrict this later)
CREATE POLICY "Allow video updates" ON video
  FOR UPDATE USING (true);
```

### 5. API Endpoints

The following API endpoints are automatically created:

- `POST /api/waitlist` - Add email to waitlist
- `GET /api/waitlist/count` - Get total signup count
- `GET /api/config` - Get video configuration including YouTube video ID

### 6. Updating YouTube Video ID

To update the YouTube video ID, you can:

1. **Via Supabase Dashboard:**

   - Go to your Supabase project
   - Navigate to Table Editor
   - Select the `video` table
   - Update the `source` field with your new video ID

2. **Via SQL:**

   ```sql
   UPDATE video
   SET source = 'your_new_video_id_here'
   WHERE id = (SELECT id FROM video LIMIT 1);
   ```

3. **Via API (if you add admin authentication later):**
   ```bash
   curl -X PUT /api/config \
     -H "Content-Type: application/json" \
     -d '{"youtube_video_id": "your_new_video_id"}'
   ```

### 7. Testing

Test the integration by:

1. Starting your development server: `npm run dev`
2. Submitting an email through the waitlist form
3. Checking the Supabase dashboard to see the new record
4. Verifying the count updates in real-time
5. Testing the demo video with your YouTube video ID

### 8. Analytics Queries

Useful queries for analytics:

```sql
-- Total signups
SELECT COUNT(*) FROM waitlist;

-- Signups by source
SELECT source, COUNT(*) as count
FROM waitlist
GROUP BY source
ORDER BY count DESC;

-- Signups by date
SELECT DATE(created_at) as date, COUNT(*) as signups
FROM waitlist
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Get current video config
SELECT * FROM video LIMIT 1;
```

### 9. YouTube Video ID Format

The YouTube video ID is the part after `v=` in a YouTube URL:

- Full URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

You can also get it from:

- Short URL: `https://youtu.be/dQw4w9WgXcQ`
- Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`
