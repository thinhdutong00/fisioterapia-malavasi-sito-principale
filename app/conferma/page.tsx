// app/thank-you/page.tsx
export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#022166] text-white p-6 text-center">
      <h1 className="text-5xl font-bold mb-4 text-[#55B4FF]">Grazie!</h1>
      <p className="text-xl mb-8">La tua richiesta è stata inviata. Ti ricontatteremo al più presto.</p>
      <a href="/" className="bg-white text-[#022166] px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#55B4FF] transition-all">
        Torna alla Home
      </a>
    </div>
  );
}