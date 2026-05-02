export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="w-full flex flex-col bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-100 overflow-hidden animate-pulse">
          {/* Image Placeholder */}
          <div className="w-full pt-[75%] flex-shrink-0 bg-stone-200" />
          
          <div className="p-3 flex flex-col flex-1 justify-between gap-4">
            <div>
              <div className="h-4 bg-stone-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-stone-200 rounded w-1/2 mb-4" />
              <div className="h-3 bg-stone-200 rounded w-1/3" />
            </div>

            <div className="mt-3 w-full py-2 h-8 rounded-full bg-stone-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
