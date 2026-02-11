
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen pt-24 px-4 pb-12 bg-zinc-950 flex flex-col items-center">
        <div class="max-w-5xl w-full">
            <h1 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-12 border-b border-zinc-800 pb-6">
                Agenda<br><span class="text-red-600">Imediata</span>
            </h1>

            <div class="flex flex-col gap-6">
                @for (event of events(); track event.id) {
                    <div class="group border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-red-600 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden">
                        
                        <!-- Decorative background element -->
                        <div class="absolute -right-10 -bottom-10 text-9xl font-bold text-zinc-800/20 z-0 select-none group-hover:text-red-900/10 transition-colors">
                            {{ event.day }}
                        </div>

                        <div class="relative z-10 md:w-1/4 flex flex-col border-b md:border-b-0 md:border-r border-zinc-800 pb-4 md:pb-0 md:pr-6 group-hover:border-red-600 transition-colors">
                            <span class="font-mono text-5xl md:text-6xl font-bold text-zinc-500 group-hover:text-red-500 transition-colors">{{ event.day }}</span>
                            <span class="font-mono text-xl uppercase tracking-widest text-zinc-400">{{ event.weekday }}</span>
                        </div>

                        <div class="relative z-10 md:w-3/4 flex flex-col justify-center">
                            <h2 class="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                                {{ event.title }}
                            </h2>
                            <div class="flex items-center gap-2 mb-4">
                                <span class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                <p class="font-mono text-red-400 text-sm md:text-base uppercase">{{ event.subtitle }}</p>
                            </div>
                            <p class="font-mono text-zinc-400 text-sm leading-relaxed max-w-2xl border-l-2 border-zinc-700 pl-4">
                                {{ event.desc }}
                            </p>
                        </div>

                        <button class="relative z-10 mt-4 md:mt-0 md:self-center border border-zinc-600 text-zinc-300 px-6 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors shrink-0">
                            Confirmar
                        </button>
                    </div>
                }
            </div>

            <div class="mt-12 text-center">
                <p class="font-mono text-zinc-600 text-xs uppercase tracking-widest">
                    * Eventos sujeitos a cancelamento em caso de invasão de horda nível 5.
                </p>
            </div>
        </div>
    </section>
  `
})
export class AgendaComponent {
  events = signal([
    { 
      id: 1,
      day: '13',
      weekday: 'SEX', 
      title: 'NOITE DO APOCALIPSE', 
      subtitle: 'DJ SET: TECHNO / DARKWAVE',
      desc: 'A batida industrial encontra o caos. Traga sua melhor máscara de gás. Entrada liberada para sobreviventes.' 
    },
    { 
      id: 2,
      day: '14',
      weekday: 'SÁB', 
      title: 'INVASÃO ZUMBI', 
      subtitle: 'PERFORMANCE AO VIVO + DRINKS DUPLOS',
      desc: 'Simulação de defesa de perímetro. Quem acertar os alvos ganha dose dupla de radiação (nosso drink especial).'
    },
    { 
      id: 3,
      day: '15',
      weekday: 'DOM', 
      title: 'RESSACA RADIOATIVA', 
      subtitle: 'BRUNCH E JAZZ EXPERIMENTAL',
      desc: 'Recupere suas forças com ração de alta qualidade ao som de saxofones distorcidos. Clima calmo (por enquanto).'
    }
  ]);
}
