import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your  NextJS app refresher!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
