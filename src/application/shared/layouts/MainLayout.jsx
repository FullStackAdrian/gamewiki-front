const MainLayout = ({ children }) => {
  return (
    <div className="w-screen max-h-screen overflow-y-auto  bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-white font-semibold text-lg">TASKMANAGER</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium">Login</span>
          </button>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default MainLayout;