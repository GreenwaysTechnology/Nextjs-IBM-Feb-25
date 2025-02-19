export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Shop Domain</h1>
                {children}
            </body>
        </html>
    );
}