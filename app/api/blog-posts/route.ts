import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://v2.velog.io/rss/@meloncoder');
    const posts = feed.items.slice(0, 3).map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
    }));
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
