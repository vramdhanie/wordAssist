interface FooterProps {
    children: React.ReactNode
}

export function Footer({ children }: FooterProps = { children: '' }) {
    return (
        <footer className="mt-auto py-3 px-4 text-center border-t border-gray-200 text-sm text-gray-500 bg-white">
            {children}
        </footer>
    )
}
