# Parkview Badminton Club Database

## Setup Instructions

1. **Create Supabase Project**: 
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Copy the connection string

2. **Update Environment Variables**:
   Update `.env.local` with your Supabase credentials:
   ```env
   DATABASE_URL=postgresql://postgres:[password]@[host]:6543/postgres
   ```

3. **Run Schema**:
   Execute the SQL schema in Supabase SQL Editor:
   ```bash
   # Copy contents of schema.sql and run in Supabase SQL Editor
   ```

## Tables

- **users**: User accounts
- **session_waitlist**: Waitlist entries when sessions are full
- **discussion_posts**: Discussion board threads
- **discussion_replies**: Replies to discussions
- **gallery_photos**: Photo gallery metadata

## Notes

- Sessions themselves are stored in Dashify as products
- Bookings are stored in Dashify as orders
- This database handles supplementary features (waitlist, discussions, gallery)
