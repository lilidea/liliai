export default function AdminLoading() {
  return (
    <div className="flex-1 p-8">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-8 w-48 bg-gray-700/50 rounded-lg animate-pulse mb-2" />
        <div className="h-4 w-72 bg-gray-700/30 rounded animate-pulse" />
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-700/50 rounded-lg animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-20 bg-gray-700/50 rounded animate-pulse mb-2" />
                <div className="h-6 w-16 bg-gray-700/30 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-3 w-full bg-gray-700/30 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* Table Skeleton */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <div className="h-5 w-32 bg-gray-700/50 rounded animate-pulse" />
        </div>
        <div className="divide-y divide-gray-700">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-700/50 rounded-lg animate-pulse" />
              <div className="flex-1">
                <div className="h-4 w-40 bg-gray-700/50 rounded animate-pulse mb-2" />
                <div className="h-3 w-24 bg-gray-700/30 rounded animate-pulse" />
              </div>
              <div className="h-8 w-20 bg-gray-700/30 rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
