
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const CotizacionesPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-200 text-blue-800 p-10 rounded-lg shadow-2xl text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Esta sección continúa en desarrollo</h1>
        <DotLottieReact
          src="https://lottie.host/c4407925-be46-47c7-aae3-74bb5baaf7d0/MxvCtv8l18.lottie"
          loop
          autoplay
        />
      </div>

      {/* Ir hacia arriba */}
      <div id="back-to-top" className="fixed bottom-8 right-8">
          <a href="#top" className="bg-yellow-400 text-black p-3 rounded-full hover:bg-blue-700">
            <i className="ui-arrow-up">↑</i>
          </a>
        </div>
    </div>
    
    
  );
};