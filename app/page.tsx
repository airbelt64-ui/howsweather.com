import UploadCard from "@/components/UploadCard";

export default function Page(){
  return (
    <main style={{maxWidth:980, margin:'0 auto', padding:'40px 20px'}}>
      <header style={{display:'flex', alignItems:'center', gap:16, marginBottom:20}}>
        <img src="/logo.svg" alt="How's Weather" width={56} height={56} />
        <div>
          <h1 style={{margin:0, fontSize:28, fontWeight:700}}>How’s Weather</h1>
          <p style={{margin:0, color:'#94a3b8'}}>현지 옷차림 사진 기반 날씨 서비스</p>
        </div>
      </header>

      <section style={{display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:20}}>
        <div style={{background:'#0f172a', border:'1px solid #1f2937', borderRadius:16, padding:20}}>
          <h2 style={{marginTop:0}}>오늘의 날씨(샘플)</h2>
          <div style={{display:'flex', gap:20, alignItems:'center'}}>
            <div style={{fontSize:56, fontWeight:700}}>26°</div>
            <div>
              <div style={{color:'#9ca3af'}}>체감 27° · 맑음</div>
              <div style={{color:'#9ca3af'}}>우산 필요 없음 • 자외선 차단제</div>
            </div>
          </div>
          <div style={{marginTop:16, display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:8}}>
            {['월','화','수','목','금','토','일'].map((d,i)=> (
              <div key={i} style={{textAlign:'center', background:'#111827', border:'1px solid #1f2937', borderRadius:12, padding:12}}>
                <div style={{fontSize:12, color:'#9ca3af'}}>{d}</div>
                <div style={{fontSize:18, fontWeight:700}}>{22+i%3}°</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:'#0f172a', border:'1px solid #1f2937', borderRadius:16, padding:20}}>
          <UploadCard />
        </div>
      </section>

      <footer style={{opacity:.7, fontSize:12, marginTop:28}}>
        © {new Date().getFullYear()} How’s Weather
      </footer>
    </main>
  );
}
