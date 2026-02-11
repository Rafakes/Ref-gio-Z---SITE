
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen pt-24 px-4 pb-12 flex flex-col items-center justify-center relative bg-zinc-950">
        <!-- Abstract Grid Overlay -->
        <div class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div class="max-w-5xl w-full z-10">
            <h1 class="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 border-l-4 border-red-600 pl-6">
                Mapa Tático
            </h1>
            
            <div class="w-full aspect-video border-2 border-zinc-800 bg-black relative overflow-hidden group">
                <!-- Static Satellite Image effect -->
                <img ngSrc="https://picsum.photos/1200/800?grayscale&blur=2" width="1200" height="800" priority alt="Mapa Satélite" class="w-full h-full object-cover opacity-60">
                
                <!-- Radar Scan Effect -->
                <div class="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent animate-scan pointer-events-none"></div>

                <!-- Locations -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div class="w-4 h-4 bg-red-600 rounded-full animate-ping absolute"></div>
                    <div class="w-4 h-4 bg-red-600 rounded-full relative z-10 border-2 border-black"></div>
                    <div class="mt-2 bg-black/80 px-2 py-1 font-mono text-xs border border-red-600 text-red-500 uppercase">
                        Refúgio Z (Você está aqui)
                    </div>
                </div>

                <div class="absolute top-1/3 left-1/4">
                    <div class="w-3 h-3 bg-zinc-500 rounded-full relative z-10 hover:bg-white transition-colors cursor-pointer"></div>
                    <div class="mt-2 bg-black/80 px-2 py-1 font-mono text-xs border border-zinc-700 text-zinc-400 uppercase">
                        Zona de Exclusão
                    </div>
                </div>

                <div class="absolute bottom-1/4 right-1/3">
                    <div class="w-3 h-3 bg-blue-500 rounded-full relative z-10 hover:bg-white transition-colors cursor-pointer"></div>
                     <div class="mt-2 bg-black/80 px-2 py-1 font-mono text-xs border border-blue-700 text-blue-400 uppercase">
                        Fonte de Água
                    </div>
                </div>
                
                <!-- Map UI Elements -->
                <div class="absolute top-4 left-4 font-mono text-xs text-red-500">
                    LAT: -23.5505<br>
                    LON: -46.6333
                </div>
                
                <div class="absolute bottom-4 right-4 font-mono text-xs text-zinc-500 text-right">
                    SATÉLITE: OFFLINE<br>
                    ÚLTIMA ATUALIZAÇÃO: 2024
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 font-mono text-sm">
                <div class="border border-zinc-800 p-4">
                    <h3 class="text-red-500 font-bold mb-2 uppercase">> Rota Segura</h3>
                    <p class="text-zinc-400">Evite a Avenida Principal após as 18h. Atividade hostil detectada no setor norte.</p>
                </div>
                <div class="border border-zinc-800 p-4">
                    <h3 class="text-blue-500 font-bold mb-2 uppercase">> Clima</h3>
                    <p class="text-zinc-400">Chuva ácida prevista para o final de semana. Traga proteção.</p>
                </div>
                 <div class="border border-zinc-800 p-4">
                    <h3 class="text-green-500 font-bold mb-2 uppercase">> Status</h3>
                    <p class="text-zinc-400">Perímetro seguro. Portões abertos.</p>
                </div>
            </div>
        </div>
    </section>
  `,
  styles: [`
    @keyframes scan {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(100%); opacity: 0; }
    }
    .animate-scan {
        animation: scan 4s linear infinite;
    }
  `]
})
export class MapComponent {}
