# Barford Cricket Club

A mobile-first public club website with searchable seasonal/all-time statistics and a protected scorecard-entry area for approved administrators.

## Statistics calculations

- Batting average: total runs / dismissals (innings minus not-outs)
- Strike rate: runs / balls faced × 100
- Bowling average: runs conceded / wickets
- Economy: runs conceded / overs, calculated from legal balls (six balls per over)
- Bowling strike rate: legal balls / wickets
- Seasonal totals group performances by player and match season; all-time totals use the same source rows without a season filter.

## Connect the admin area

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. Create each approved administrator in Authentication > Users.
3. Add the user's UUID to `public.admins`.
4. Put the project URL and anon key into `assets/config.js`.

Public users receive read-only access. Inserts and edits are limited by row-level security to users listed in `public.admins`.

The starter names in `assets/data.js` are deliberately marked placeholders until the historical Excel records are imported and verified.
