import { Suspense } from 'react';
import Link from 'next/link';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uizard | Hackernews Reader',
  description: 'Uizard frontend engineer challenge',
}

function PostSkeleton () {
  return (
    <div role="status" className="max-w-sm animate-pulse flex flex-col p-2 h-16 gap-1 justify-around">
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <div className='flex justify-between animate-pulse gap-6'>
        <div role='status' className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
        <div role='status' className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3"></div>
      </div>
    </div>
  )
}

async function Post ({id}: {id: number}) {
    const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((res) => res.json() as Promise<{title: string; by: string; url: string}>)

  return (
    <li className='h-16 p-2 flex flex-col gap-1'>
      <header>
        <h3 className='font-bold text-lg truncate'>{data.title}</h3>
      </header>
      <footer className='flex text-xs justify-between'>
        <p className='text-slate-300 font-semibold'>Posted by: {data.by}</p>
        <p className='font-light'>Visit website &gt;&gt;</p>
      </footer>
    </li>
  )
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
              {
                posts.map((id) => (
                  <Link key={id} href={`/${id}`}>
                    <Suspense fallback={<PostSkeleton />}>
                      <Post id={id}/>
                    </Suspense>
                  </Link>
                ))
              }
            </ul>
          </aside>
          {children}
        </main>
      </body>
    </html>
  )
}
