import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { urls } = await request.json();
  console.log('Received URLs:', urls);

  if (!urls || !Array.isArray(urls)) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const results = await Promise.all(
    urls.map(async (url: string) => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return { url, exists: response.ok };
      } catch {
        return { url, exists: false };
      }
    })
  );

  const resultObject = results.reduce(
    (acc, { url, exists }) => {
      acc[url] = exists;
      return acc;
    },
    {} as { [key: string]: boolean }
  );

  return NextResponse.json(resultObject);
}
