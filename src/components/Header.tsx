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
            {showControls && (
                <div className="flex items-center space-x-3">
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
    </header>
)
