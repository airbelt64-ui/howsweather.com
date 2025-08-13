export const metadata = {
  title: "How's Weather",
  description: "현지 옷차림 사진 기반 날씨 서비스",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={{fontFamily:'Inter, system-ui, Arial', background:'#0b1220', color:'#e5e7eb'}}>
        {children}
      </body>
    </html>
  );
}
