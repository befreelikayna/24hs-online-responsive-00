export const StreamPlayer = () => {
  return (
    <section className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(155,135,245,0.15)] bg-gradient-to-r from-[#2C2F3E] to-[#1A1F2C] p-1">
      <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://iblups.com/embed/abretv" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};