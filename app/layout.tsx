import "./globals.css";

export const metadata = {
    title: "Prisma Unions",
    description: "Prisma Unions in Next 13",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-slate-800 text-white p-6">{children}</body>
        </html>
    );
}
