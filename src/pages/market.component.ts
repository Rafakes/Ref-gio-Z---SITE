
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
            <div class="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zinc-800 pb-6">
                 <h1 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white">
                    Centro<br>Comercial
                </h1>
                <p class="font-mono text-red-600 md:text-right mt-4 md:mt-0 uppercase">
                    Troca justa. Sem perguntas.<br>
                    Moeda aceita: Créditos, Ouro, Baterias.
                </p>
            </div>

            <!-- Tactical Map Section (CSS Recreation of the provided image) -->
            <div class="w-full mb-16">
                <div class="border border-zinc-800 bg-zinc-900/30 p-1">
                    <div class="flex justify-between items-center px-4 py-2 bg-zinc-900 border-b border-zinc-800 mb-1">
                         <span class="font-mono text-xs text-zinc-400 uppercase tracking-widest">>> Mapa Tático: Setor Comercial</span>
                         <span class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                    </div>
                    
                    <!-- Map Container -->
                    <div class="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#1a1a1a] overflow-hidden group select-none shadow-inner shadow-black">
                        
                        <!-- Grid Background -->
                        <div class="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                        
                        <!-- Terrain/Roads simulation -->
                        <div class="absolute top-0 bottom-0 left-[55%] w-[10%] bg-zinc-800/50 border-x border-zinc-700/30"></div> <!-- Main Road -->
                        <div class="absolute top-[85%] left-0 right-0 h-[8%] bg-zinc-800/50 border-y border-zinc-700/30"></div> <!-- Bottom Road -->

                        <!-- === ZONES (Based on User Image) === -->

                        <!-- Estacionamento Norte -->
                        <div class="absolute top-[5%] left-[25%] w-[25%] h-[15%] border-2 border-blue-600 bg-blue-900/20 flex items-center justify-center hover:bg-blue-900/40 transition-colors cursor-pointer group/zone">
                            <span class="bg-black/80 text-blue-400 text-[10px] md:text-xs font-mono px-2 py-0.5 border border-blue-600">ESTACIONAMENTO</span>
                        </div>

                        <!-- Main Building Block -->
                        <div class="absolute top-[22%] left-[25%] w-[25%] h-[60%] border-2 border-zinc-600 bg-zinc-900/80 shadow-2xl">
                            
                            <!-- Internal: Oficina NFA -->
                            <div class="absolute top-[25%] left-[5%] w-[60%] h-[20%] border-2 border-orange-500 bg-orange-900/20 flex items-center justify-center hover:bg-orange-900/40 transition-colors cursor-pointer">
                                <span class="text-orange-500 font-bold text-[8px] md:text-[10px] text-center leading-none">OFICINA<br>NFA</span>
                            </div>

                            <!-- Internal: Alfaiataria -->
                            <div class="absolute top-[48%] left-[5%] w-[60%] h-[18%] border-2 border-red-500 bg-red-900/20 flex items-center justify-center hover:bg-red-900/40 transition-colors cursor-pointer">
                                <span class="text-red-500 font-bold text-[8px] md:text-[10px] text-center leading-none">ALFAIATARIA<br>M&DM</span>
                            </div>

                            <!-- Internal: Sala Disponível -->
                            <div class="absolute top-[68%] left-[5%] w-[60%] h-[12%] border border-white/50 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                                <span class="text-white/70 font-mono text-[8px] text-center leading-none">SALA<br>VAGA</span>
                            </div>

                            <!-- Internal: Cozinha -->
                            <div class="absolute bottom-[5%] left-[5%] w-[60%] h-[12%] border border-yellow-700 bg-yellow-900/20 flex items-center justify-center hover:bg-yellow-900/30 transition-colors cursor-pointer">
                                <span class="text-yellow-600 font-mono text-[8px] text-center leading-none">COZINHA</span>
                            </div>

                            <!-- Internal: Corredor -->
                            <div class="absolute top-[5%] right-[15%] w-[15%] bottom-[5%] border-x border-zinc-700 bg-black/40">
                                <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] text-zinc-500 rotate-90 tracking-widest">CORREDOR</span>
                            </div>

                            <!-- Internal: Biblioteca (-2 Andar label simulation) -->
                            <div class="absolute top-[65%] -right-[15%] w-[30%] h-[10%] bg-white border-2 border-black flex items-center justify-center shadow-lg z-10 transform rotate-[-2deg]">
                                <span class="text-black font-bold text-[8px] md:text-[10px] text-center leading-none">BIBLIOTECA<br>-2 ANDAR</span>
                                <div class="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-black border-b-[6px] border-b-transparent"></div>
                            </div>
                        </div>

                        <!-- Area de Embarque (Bottom) -->
                        <div class="absolute bottom-[2%] left-[35%] w-[20%] h-[15%] border-2 border-blue-500 bg-blue-900/20 flex items-center justify-center hover:bg-blue-900/40 transition-colors cursor-pointer z-10">
                             <div class="text-center">
                                <span class="bg-black/80 text-blue-400 text-[8px] md:text-[10px] font-mono px-1 border border-blue-500 block mb-1">ÁREA DE EMBARQUE</span>
                            </div>
                        </div>

                        <!-- Estacionamento Leste -->
                        <div class="absolute top-[40%] right-[32%] w-[10%] h-[45%] border-2 border-blue-600 bg-blue-900/20 flex items-center justify-center hover:bg-blue-900/40 transition-colors cursor-pointer">
                             <span class="text-blue-500 text-[8px] -rotate-90 tracking-widest whitespace-nowrap">ESTACIONAMENTO</span>
                        </div>

                        <!-- Parque (Green) -->
                        <div class="absolute top-[40%] right-[5%] w-[20%] h-[30%] border border-green-600 bg-green-900/20 flex items-center justify-center hover:bg-green-900/30 transition-colors cursor-pointer">
                            <span class="bg-black/60 text-green-500 text-[10px] font-mono px-1">PARQUE</span>
                        </div>

                        <!-- Location Pin (You are here) -->
                        <div class="absolute top-[88%] left-[45%] flex flex-col items-center z-20 group-hover:scale-110 transition-transform duration-300">
                             <div class="w-8 h-8 md:w-12 md:h-12 text-red-600 drop-shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                                  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                             </div>
                             <span class="bg-red-600 text-white text-[8px] md:text-[10px] px-1 font-bold rounded shadow-lg whitespace-nowrap">ENTRADA PRINCIPAL</span>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Shops Grid -->
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
