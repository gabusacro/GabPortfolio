-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Members table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  role VARCHAR NOT NULL,
  status VARCHAR DEFAULT 'active',
  join_date TIMESTAMPTZ DEFAULT NOW(),
  profile_image_url TEXT,
  bio TEXT,
  skills TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL,
  description TEXT,
  tech_stack TEXT[],
  github_url TEXT,
  live_url TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  category VARCHAR,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Announcements table
CREATE TABLE announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES members(id),
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR DEFAULT 'unread',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Members table policies
CREATE POLICY "Public read access to members" ON members
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can update own profile" ON members
  FOR UPDATE USING (auth.uid()::text = id::text);

-- Projects table policies
CREATE POLICY "Public read access to projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert projects" ON projects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update projects" ON projects
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Announcements table policies
CREATE POLICY "Public read access to published announcements" ON announcements
  FOR SELECT USING (published = true);

CREATE POLICY "Authenticated users can insert announcements" ON announcements
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update own announcements" ON announcements
  FOR UPDATE USING (auth.uid()::text = author_id::text);

-- Contact submissions table policies
CREATE POLICY "Authenticated users can insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_announcements_published ON announcements(published);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);

-- Insert sample data
INSERT INTO members (email, name, role, bio, skills) VALUES
('admin@example.com', 'Admin User', 'admin', 'System administrator', ARRAY['Next.js', 'TypeScript', 'Supabase']),
('developer@example.com', 'Developer User', 'developer', 'Full-stack developer', ARRAY['React', 'Node.js', 'PostgreSQL']);

INSERT INTO projects (title, description, tech_stack, github_url, live_url, featured, category) VALUES
('Portfolio Website', 'Modern portfolio built with Next.js and Supabase', ARRAY['Next.js', 'TypeScript', 'Supabase'], 'https://github.com/example/portfolio', 'https://portfolio.example.com', true, 'Full-Stack'),
('E-Commerce Platform', 'Full-stack e-commerce solution', ARRAY['React', 'Node.js', 'PostgreSQL'], 'https://github.com/example/ecommerce', 'https://ecommerce.example.com', true, 'Full-Stack');
