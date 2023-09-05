export default async function Post ({id}: {id: number}) {
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