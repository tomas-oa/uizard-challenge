import './globals.css'
import type { Metadata } from 'next'
import Posts from '@/components/Posts';

export const metadata: Metadata = {
  title: 'Uizard | Hackernews Reader',
  description: 'Uizard frontend engineer challenge',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const posts = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"').then((res) => res.json() as Promise<number[]>)

  return (
    <html lang="en">
      <body className='grid grid-rows-[60px,1fr] min-h-screen'>
        <header className='flex justify-center items-center bg-yellow-400 text-black font-bold'>Uizard Hackernews Reader</header>
        <main className='grid grid-cols-[320px,1fr]'>
          <aside>
            <ul>
              {posts.map((id) => ( <Posts key={id} id={id} /> ))}
            </ul>
          </aside>
          {children}
        </main>
      </body>
    </html>
  )
}
