export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50/30 flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E69419]/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#0073FF]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Brand */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E69419] to-[#0073FF] rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="relative w-20 h-20 bg-white backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg flex items-center justify-center">
            <img 
              src="/app_icon.png" 
              alt="Liliai" 
              className="w-12 h-12 object-contain animate-bounce-subtle"
            />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-[#E69419] animate-spin" />
        </div>

        {/* Loading Text */}
        <div className="space-y-2 text-center">
          <p className="text-lg font-medium text-gray-800">Yükleniyor</p>
          <div className="flex items-center justify-center gap-1">
            <span className="w-2 h-2 bg-[#E69419] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 bg-[#E69419] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 bg-[#E69419] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
