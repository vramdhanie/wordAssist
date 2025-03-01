import { Button } from './Button'

type User = {
    name: string
}

export interface HeaderProps {
    children: React.ReactNode
    user?: User
    /**
     * Show login and logout controls
     */
    showControls?: boolean
    onLogin?: () => void
    onLogout?: () => void
    onCreateAccount?: () => void
}

export const Header = ({
    user,
    showControls = false,
    children,
    onLogin,
    onLogout,
    onCreateAccount,
}: HeaderProps) => (
    <header className="w-full shadow-sm bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-md shadow-sm font-bold text-lg">
                    W
                </div>
                <h1 className="text-xl font-semibold text-gray-800">{children}</h1>
            </div>
            
            <div className="flex items-center">
                <a 
                    href="https://vincentramdhanie.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                    <span className="hidden sm:inline mr-1">Visit</span>
                    <span className="font-medium">vincentramdhanie.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
                
                {showControls && (
                    <div className="flex items-center ml-4 space-x-3">
                        {user ? (
                            <>
                                <span className="text-sm text-gray-600">
                                    Welcome, <span className="font-medium">{user.name}</span>
                                </span>
                                <Button size="small" onClick={onLogout} label="Log out" />
                            </>
                        ) : (
                            <>
                                <Button size="small" onClick={onLogin} label="Log in" />
                                <Button
                                    primary
                                    size="small"
                                    onClick={onCreateAccount}
                                    label="Sign up"
                                />
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    </header>
)
