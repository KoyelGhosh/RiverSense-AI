import "./globals.css";

export const metadata = {
  title: "RiverSense AI | Dashboard", //  Your new polished title!
  description: "Automated eDNA biodiversity monitoring and alert system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Installs Leaflet design layers smoothly */}
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
