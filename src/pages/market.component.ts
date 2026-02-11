
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen pt-24 px-4 pb-12 bg-zinc-950 flex flex-col items-center">
        
        <div class="max-w-7xl w-full">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-6">
                 <h1 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white">
                    Centro<br>Comercial
                </h1>
                <p class="font-mono text-red-600 md:text-right mt-4 md:mt-0 uppercase">
                    Troca justa. Sem perguntas.<br>
                    Moeda aceita: Créditos, Ouro, Baterias.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Shop 1 -->
                <div class="group border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-colors p-6 flex flex-col">
                    <div class="h-48 bg-black mb-6 relative overflow-hidden border border-zinc-700">
                        <img ngSrc="https://picsum.photos/400/250?grayscale" width="400" height="250" alt="Loja" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <div class="absolute top-2 right-2 bg-red-600 text-black text-xs font-bold px-2 py-1 font-mono uppercase">Aberto</div>
                    </div>
                    <h2 class="text-2xl font-bold uppercase mb-2">O Armeiro</h2>
                    <p class="font-mono text-zinc-400 text-sm mb-4 flex-grow">
                        Manutenção de equipamentos de defesa, reforço de armaduras e venda de sucata balística.
                    </p>
                    <button class="w-full border border-zinc-600 text-zinc-300 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
                        Ver Estoque
                    </button>
                </div>

                <!-- Shop 2 -->
                <div class="group border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-colors p-6 flex flex-col">
                    <div class="h-48 bg-black mb-6 relative overflow-hidden border border-zinc-700">
                         <img ngSrc="https://picsum.photos/400/251?grayscale" width="400" height="250" alt="Loja" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <div class="absolute top-2 right-2 bg-green-600 text-black text-xs font-bold px-2 py-1 font-mono uppercase">Novos Itens</div>
                    </div>
                    <h2 class="text-2xl font-bold uppercase mb-2">Botica da Serra</h2>
                    <p class="font-mono text-zinc-400 text-sm mb-4 flex-grow">
                        Ervas medicinais, curativos improvisados e tônicos revitalizantes. Cuidado com as falsificações.
                    </p>
                    <button class="w-full border border-zinc-600 text-zinc-300 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
                        Consultar
                    </button>
                </div>

                <!-- Shop 3 -->
                <div class="group border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-colors p-6 flex flex-col">
                    <div class="h-48 bg-black mb-6 relative overflow-hidden border border-zinc-700">
                         <img ngSrc="https://picsum.photos/400/252?grayscale" width="400" height="250" alt="Loja" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    </div>
                    <h2 class="text-2xl font-bold uppercase mb-2">Tecnologia Obsoleta</h2>
                    <p class="font-mono text-zinc-400 text-sm mb-4 flex-grow">
                        Rádios, peças de computadores antigos, telas CRT e cabos. Tudo para manter sua comunicação viva.
                    </p>
                    <button class="w-full border border-zinc-600 text-zinc-300 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
                        Trocar Peças
                    </button>
                </div>

                 <!-- Shop 4 -->
                 <div class="group border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-colors p-6 flex flex-col">
                    <div class="h-48 bg-black mb-6 relative overflow-hidden border border-zinc-700">
                         <img ngSrc="https://picsum.photos/400/253?grayscale" width="400" height="250" alt="Loja" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                         <div class="absolute top-2 right-2 bg-zinc-600 text-black text-xs font-bold px-2 py-1 font-mono uppercase">Esgotado</div>
                    </div>
                    <h2 class="text-2xl font-bold uppercase mb-2">Roupas & Trajes</h2>
                    <p class="font-mono text-zinc-400 text-sm mb-4 flex-grow">
                        Moda resistente à radiação. Couro sintético, máscaras de gás customizadas e botas táticas.
                    </p>
                    <button class="w-full border border-zinc-600 text-zinc-300 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors opacity-50 cursor-not-allowed">
                        Sem Estoque
                    </button>
                </div>

            </div>

             <div class="mt-20 border-t border-zinc-800 pt-8 text-center">
                <p class="font-mono text-zinc-500 text-sm uppercase">
                    Interessado em abrir um estande? Fale com a Gerência no Setor 4. Taxa de proteção: 15%.
                </p>
            </div>
        </div>
    </section>
  `
})
export class MarketComponent {}
