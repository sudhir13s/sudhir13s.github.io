import { NextResponse } from 'next/server';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'contact', label: 'Contact' },
];

export function GET() {
  return NextResponse.json(NAV_ITEMS, {
    headers: { 'Cache-Control': 'public, max-age=3600' },
  });
}
