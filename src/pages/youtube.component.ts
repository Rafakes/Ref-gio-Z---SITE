
import { Component, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen pt-24 px-4 pb-12 bg-zinc-950 flex flex-col items-center">
        
        <div class="max-w-6xl w-full">
            <!-- Header -->
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-6">
                 <div>
                    <p class="font-mono text-red-600 text-xs tracking-widest mb-2 animate-pulse">SINAL DE VÍDEO DETECTADO</p>
                    <h1 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white">
                        Arquivos<br>Visuais
                    </h1>
                 </div>
                <div class="flex flex-col md:items-end mt-4 md:mt-0">
                    <span class="font-mono text-zinc-500 text-xs uppercase">Canal de Transmissão</span>
                    <a href="https://www.youtube.com/@RefugioZ" target="_blank" class="text-red-600 font-bold uppercase hover:text-white transition-colors flex items-center gap-2 mt-2 group">
                        Inscrever-se no Canal 
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>

            <!-- Featured Video (Playlist Embed) -->
            <div class="w-full mb-16">
                <div class="border border-zinc-800 bg-zinc-900/30 p-1 relative group">
                    <!-- Decorators -->
                    <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 z-10"></div>
                    <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 z-10"></div>
                    
                    <div class="aspect-video w-full bg-black relative overflow-hidden">
                        
                        <iframe 
                            class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            [src]="featuredVideoUrl()" 
                            title="YouTube Video Player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    
                    <div class="p-4 flex justify-between items-start">
                        <div>
                            <h2 class="text-2xl font-bold uppercase text-white mb-1">Playlist de Transmissões</h2>
                            <p class="font-mono text-zinc-500 text-sm">FREQUÊNCIA #4092 // CANAL REFÚGIO Z</p>
                        </div>
                        <div class="flex items-center gap-2">
                             <div class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                             <span class="font-mono text-red-600 text-xs uppercase font-bold">Ao Vivo / Recente</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Grid -->
            <h3 class="font-mono text-zinc-400 text-lg uppercase mb-6 border-l-4 border-red-600 pl-4">Registros Anteriores</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                @for (video of videos(); track video.id) {
                    <div class="group border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 hover:border-red-600/50 transition-all duration-300 cursor-pointer flex flex-col">
                        <div class="aspect-video bg-black relative overflow-hidden">
                            <img [ngSrc]="video.thumb" width="400" height="225" [alt]="video.title" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                            
                            <!-- Play Button Overlay -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                                    <span class="text-white text-xl ml-1">▶</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="p-4 flex flex-col flex-grow">
                            <span class="font-mono text-red-500 text-xs mb-2">{{ video.date }}</span>
                            <h4 class="text-lg font-bold uppercase leading-tight text-zinc-200 group-hover:text-white mb-2">{{ video.title }}</h4>
                            <p class="font-mono text-zinc-500 text-xs mt-auto">{{ video.views }} visualizações</p>
                        </div>
                    </div>
                }
            </div>

        </div>
    </section>
  `
})
export class YoutubeComponent {
  private sanitizer = inject(DomSanitizer);

  // Playlist de Lives fornecida pelo usuário
  playlistId = signal('PLRt37dnIYk5fbuYI-rDp_PZ3mNU1LQI2c');

  // URL do embed ajustada para 'videoseries' que é o padrão correto para playlists
  featuredVideoUrl = computed(() => {
    const id = this.playlistId();
    // Usa o endpoint 'videoseries' que renderiza o player da playlist corretamente
    const url = `https://www.youtube.com/embed/videoseries?list=${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  videos = signal([
    {
      id: 1,
      title: 'Expedição ao Shopping: Deu Errado',
      date: 'REGISTRO: ONTEM',
      views: '1.2K',
      thumb: 'https://picsum.photos/400/225?grayscale&blur=1'
    },
    {
      id: 2,
      title: 'Tutorial: Construindo Base na Floresta',
      date: 'REGISTRO: 3 DIAS ATRÁS',
      views: '850',
      thumb: 'https://picsum.photos/400/226?grayscale'
    },
    {
      id: 3,
      title: 'Review de Mods: Armas Silenciosas',
      date: 'REGISTRO: 1 SEMANA ATRÁS',
      views: '2.4K',
      thumb: 'https://picsum.photos/400/227?grayscale&blur=2'
    },
    {
      id: 4,
      title: 'Melhores Receitas com Enlatados',
      date: 'REGISTRO: 2 SEMANAS ATRÁS',
      views: '500',
      thumb: 'https://picsum.photos/400/228?grayscale'
    },
    {
      id: 5,
      title: 'PVP: Emboscada na Ponte',
      date: 'REGISTRO: 1 MÊS ATRÁS',
      views: '5.1K',
      thumb: 'https://picsum.photos/400/229?grayscale'
    },
    {
      id: 6,
      title: 'O Fim de Louisville (Cinematic)',
      date: 'REGISTRO: ARQUIVO ANTIGO',
      views: '10K',
      thumb: 'https://picsum.photos/400/230?grayscale&blur=1'
    }
  ]);
}
