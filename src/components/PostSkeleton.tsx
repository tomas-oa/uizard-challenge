export default function PostSkeleton () {
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
