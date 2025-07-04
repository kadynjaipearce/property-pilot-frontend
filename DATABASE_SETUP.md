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

Run this SQL in your Supabase SQL editor to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'website'
);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index for source tracking
CREATE INDEX idx_waitlist_source ON waitlist(source);

-- Create index for date queries
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

### 4. Row Level Security (RLS)

Enable RLS and create policies for the waitlist table:

```sql
-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from authenticated and anonymous users
CREATE POLICY "Allow inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Allow reads for count queries (no sensitive data)
CREATE POLICY "Allow reads" ON waitlist
  FOR SELECT USING (true);
```

### 5. API Endpoints

The following API endpoints are automatically created:

- `POST /api/waitlist` - Add email to waitlist
- `GET /api/waitlist/count` - Get total signup count

### 6. Testing

Test the integration by:

1. Starting your development server: `npm run dev`
2. Submitting an email through the waitlist form
3. Checking the Supabase dashboard to see the new record
4. Verifying the count updates in real-time

### 7. Analytics Queries

Useful queries for analytics:

```sql
-- Total signups
SELECT COUNT(*) FROM waitlist;

-- Signups by source
SELECT source, COUNT(*) FROM waitlist GROUP BY source;

-- Daily signups
SELECT DATE(created_at), COUNT(*)
FROM waitlist
GROUP BY DATE(created_at)
ORDER BY DATE(created_at) DESC;

-- Recent signups
SELECT email, created_at, source
FROM waitlist
ORDER BY created_at DESC
LIMIT 10;
```

### 8. Export Data

To export your waitlist data:

```sql
-- Export all emails
SELECT email, created_at, source
FROM waitlist
ORDER BY created_at;

-- Export for CSV (copy results to spreadsheet)
COPY (
  SELECT email, created_at, source
  FROM waitlist
  ORDER BY created_at
) TO STDOUT WITH CSV HEADER;
```
