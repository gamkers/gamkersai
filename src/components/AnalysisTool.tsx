

export function AnalysisTool() {
  return (
    <div className="w-full h-screen">
      <iframe 
        src='https://gamkerscyberanalysis.streamlit.app/?someparam=value&embedded=true'
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
        title="GAMKERS Analysis Tool"
      />
    </div>
  );
}