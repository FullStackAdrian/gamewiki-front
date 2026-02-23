function AuthLayout({ children }) {
    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6">
            {children}
        </div>
    );
}

export default AuthLayout;
