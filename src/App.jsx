import { useState } from 'react';
import Home from './Home';
function App() {
  // Set Invitation Open
  const [open, setOpen] = useState(false);
  const [audio] = useState(() => {
    const a = new Audio('/bg_music.mp3');
    a.preload = 'auto';
    a.loop = true;
    a.load();
    return a;
  });

  const handleOpen = async () => {
    try {
      await audio.play();
    } catch (e) {
      console.warn('Audio play failed:', e);
    } finally {
      setOpen(true);
    }
  };

  if (open) {
    return <Home />;
  }

  // Section Home
  return (
    <div className='relative h-[calc(100dvh-env(safe-area-inset-bottom))] w-full max-w-md mx-auto overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/landing_photos/IMG_8898.jpg')" }}
      />
      <div className='pointer-events-none absolute inset-0 bg-black/20' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_50%,rgba(0,0,0,0.6)_100%)]' />

      <div className='relative z-10 h-full flex flex-col pt-[env(safe-area-inset-top)]'>
        <div className='flex-1 flex justify-center text-center px-6'>
          <div className='mt-20'>
            <p className='text-white/80 tracking-[0.3em] text-[10px] mb-2'>
              THE WEDDING OF
            </p>
            <h1
              className='text-white text-4xl leading-tight'
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              Thomi Jasir
            </h1>
            <h2 className='text-white/90 text-xl font-medium my-1'>&</h2>
            <h1
              className='text-white text-4xl leading-tight'
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              Shafira Yasmin
            </h1>
          </div>
        </div>

        <div className='px-6 pb-[max(2rem,env(safe-area-inset-bottom))]'>
          <div className='text-center text-white/80 text-xs'>
            Kepada Yth. Bapak/Ibu/Saudara/i
          </div>
          <div className='text-center text-white text-lg font-semibold mb-4'>
            Tamu Undangan
          </div>
          <button
            onClick={handleOpen}
            className='w-full py-3 rounded-full font-bold border border-white/80 text-white hover:bg-white/10 transition-colors'
          >
            OPEN INVITATION
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
