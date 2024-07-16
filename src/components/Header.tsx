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
    <header>
        <div className="storybook-header">
            <div className="bg-blue-800 text-blue-200 font-bold text-lg flex gap-2 p-1">
                <div> W </div>
                <h1>{children}</h1>
            </div>
            <div>
                {showControls &&
                    (user ? (
                        <>
                            <span className="welcome">
                                Welcome, <b>{user.name}</b>!
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
                    ))}
            </div>
        </div>
    </header>
)
