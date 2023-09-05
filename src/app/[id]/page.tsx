export default async function Page ({ params: {id} }: {params: {id: string}}) {
  const data = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((res) => res.json() as Promise<{url: string}>)
  const url = data?.url || ''

  return (
    <iframe className="w-full h-full" src={`${url}`}></iframe>
  )
}