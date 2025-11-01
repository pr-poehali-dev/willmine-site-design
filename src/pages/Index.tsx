import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Index = () => {
  const [copiedIp, setCopiedIp] = useState(false);

  const handleCopyIp = () => {
    navigator.clipboard.writeText('mc.willmine.ru');
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-2 h-2 bg-red-600 rounded-full top-[10%] left-[15%] animate-pulse-red"></div>
        <div className="absolute w-3 h-3 bg-red-500 rounded-full top-[20%] left-[75%] animate-pulse-red" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-2 h-2 bg-red-600 rounded-full top-[60%] left-[25%] animate-pulse-red" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-3 h-3 bg-red-500 rounded-full top-[70%] left-[85%] animate-pulse-red" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-2 h-2 bg-red-600 rounded-full top-[40%] left-[50%] animate-pulse-red" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute w-3 h-3 bg-red-500 rounded-full top-[85%] left-[40%] animate-pulse-red" style={{ animationDelay: '1.2s' }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-red-900/20"></div>

      <div className="relative z-10">
        <nav className="flex justify-center gap-4 p-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-6 text-lg transition-all hover:scale-105 border-4 border-red-800 shadow-[0_6px_0_0_#7f1d1d] active:shadow-[0_2px_0_0_#7f1d1d] active:translate-y-1"
              >
                <Icon name="Users" className="mr-2" size={24} />
                Соц сети
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1A1A1A] border-4 border-red-800 p-2 min-w-[200px]">
              <DropdownMenuItem 
                className="cursor-pointer hover:bg-red-600/20 px-4 py-3 text-white font-bold text-base focus:bg-red-600/30 focus:text-white"
                onClick={() => window.open('https://discord.gg/KTKcbQRTkq', '_blank')}
              >
                <Icon name="MessageSquare" className="mr-3" size={20} />
                Discord
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-6 text-lg transition-all hover:scale-105 border-4 border-red-800 shadow-[0_6px_0_0_#7f1d1d] active:shadow-[0_2px_0_0_#7f1d1d] active:translate-y-1"
              >
                <Icon name="Server" className="mr-2" size={24} />
                IP сервера
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1A1A1A] border-4 border-red-800 p-4 min-w-[280px]">
              <div className="text-center">
                <p className="text-red-400 font-bold mb-2 text-sm">IP сервера:</p>
                <div 
                  onClick={handleCopyIp}
                  className="bg-black/50 border-2 border-red-600 px-4 py-3 mb-3 cursor-pointer hover:bg-red-600/20 transition-colors group"
                >
                  <p className="text-white font-bold text-xl group-hover:text-red-400 transition-colors">
                    mc.willmine.ru
                  </p>
                  {copiedIp && (
                    <p className="text-green-400 text-xs mt-1">Скопировано!</p>
                  )}
                </div>
                <div className="bg-red-600/20 border-2 border-red-600 px-3 py-2">
                  <p className="text-red-400 font-bold text-lg minecraft-shadow">Анархия!</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4">
          <div className="text-center space-y-8 max-w-4xl">
            <div className="animate-float">
              <h1 className="text-7xl md:text-9xl font-bold text-red-600 minecraft-shadow mb-4">
                WILLMINE
              </h1>
              <div className="inline-block bg-red-600 border-4 border-red-800 px-8 py-4 transform -rotate-2 shadow-2xl">
                <p className="text-white text-2xl md:text-4xl font-bold minecraft-shadow">
                  🔥 АНАРХИЯ БЕЗ ПРАВИЛ 🔥
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-red-950/40 border-4 border-red-800 p-6 hover:bg-red-950/60 transition-colors hover:scale-105 transform duration-200">
                <div className="text-5xl mb-3">⚔️</div>
                <h3 className="text-white font-bold text-xl mb-2">PvP</h3>
                <p className="text-red-300 text-sm">Сражайся без ограничений</p>
              </div>

              <div className="bg-red-950/40 border-4 border-red-800 p-6 hover:bg-red-950/60 transition-colors hover:scale-105 transform duration-200">
                <div className="text-5xl mb-3">🏰</div>
                <h3 className="text-white font-bold text-xl mb-2">Стройка</h3>
                <p className="text-red-300 text-sm">Создавай свою империю</p>
              </div>

              <div className="bg-red-950/40 border-4 border-red-800 p-6 hover:bg-red-950/60 transition-colors hover:scale-105 transform duration-200">
                <div className="text-5xl mb-3">💎</div>
                <h3 className="text-white font-bold text-xl mb-2">Выживание</h3>
                <p className="text-red-300 text-sm">Докажи свою силу</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleCopyIp}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-8 text-2xl transition-all hover:scale-110 border-4 border-red-900 shadow-[0_8px_0_0_#7f1d1d] active:shadow-[0_3px_0_0_#7f1d1d] active:translate-y-1"
              >
                <Icon name="Copy" className="mr-3" size={28} />
                Скопировать IP
              </Button>
            </div>

            {copiedIp && (
              <div className="bg-green-600 border-4 border-green-800 px-6 py-3 inline-block animate-fade-in">
                <p className="text-white font-bold text-lg">✓ IP скопирован в буфер обмена!</p>
              </div>
            )}
          </div>
        </main>

        <footer className="text-center py-6 text-red-400/60 text-sm">
          <p>© 2025 WillMine • Лучший анархия сервер Minecraft</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
