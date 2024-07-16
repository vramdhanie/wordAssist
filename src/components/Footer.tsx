interface FooterProps {
    children: React.ReactNode
}

export function Footer({ children }: FooterProps = { children: '' }) {
    return (
        <div className="text-xs font-light text-center p-2 border-t border-t-solid border-t-slate-100 text-slate-500">
            {children}
        </div>
    )
}
