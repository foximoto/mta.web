import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kqkvmdvoqoputsijgezu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxa3ZtZHZvcW9wdXRzaWpnZXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NjA3MjUsImV4cCI6MjA4MDMzNjcyNX0.pkPUshmJZkTTW14QyNJRj8DZbK5Q5ajeKQstfBVIIJ0"
);
