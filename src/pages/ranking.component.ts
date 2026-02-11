
import { Component, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PlayerRank {
  rank: number;
  name: string;
  timeSeconds: number;
  timeFormatted: string;
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen pt-24 px-4 pb-12 bg-zinc-950 flex flex-col items-center">
        
        <div class="max-w-4xl w-full">
            <!-- Header -->
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-6">
                 <div>
                    <p class="font-mono text-red-600 text-xs tracking-widest mb-2 animate-pulse">DADOS BIOMÉTRICOS</p>
                    <h1 class="text-4xl md:text-8xl font-bold uppercase tracking-tighter text-white">
                        Hall da<br>Fama
                    </h1>
                 </div>
                 
                 <!-- Tabs -->
                 <div class="flex gap-2 mt-6 md:mt-0">
                    <button 
                        (click)="setPeriod('30d')" 
                        class="px-6 py-2 font-mono text-sm uppercase border transition-all duration-300"
                        [class.bg-red-600]="currentPeriod() === '30d'"
                        [class.text-white]="currentPeriod() === '30d'"
                        [class.border-red-600]="currentPeriod() === '30d'"
                        [class.border-zinc-700]="currentPeriod() !== '30d'"
                        [class.text-zinc-500]="currentPeriod() !== '30d'"
                        [class.hover:border-zinc-500]="currentPeriod() !== '30d'">
                        Mensal (30d)
                    </button>
                    <button 
                        (click)="setPeriod('all')" 
                        class="px-6 py-2 font-mono text-sm uppercase border transition-all duration-300"
                        [class.bg-red-600]="currentPeriod() === 'all'"
                        [class.text-white]="currentPeriod() === 'all'"
                        [class.border-red-600]="currentPeriod() === 'all'"
                        [class.border-zinc-700]="currentPeriod() !== 'all'"
                        [class.text-zinc-500]="currentPeriod() !== 'all'"
                        [class.hover:border-zinc-500]="currentPeriod() !== 'all'">
                        Todo o Tempo
                    </button>
                 </div>
            </div>

            <!-- Content -->
            <div class="w-full relative min-h-[400px]">
                
                @if (isLoading()) {
                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-950/80 backdrop-blur-sm z-20">
                        <div class="w-16 h-16 border-4 border-zinc-800 border-t-red-600 rounded-full animate-spin"></div>
                        <p class="font-mono text-red-500 text-sm animate-pulse">DESCRIPTOGRAFANDO DADOS...</p>
                    </div>
                }

                <!-- Main Data Display -->
                <div class="flex flex-col gap-2">
                    
                    <!-- Offline Warning Banner -->
                    @if (isOfflineMode()) {
                        <div class="bg-yellow-900/20 border border-yellow-700 p-2 mb-4 flex items-center justify-between px-4">
                            <span class="font-mono text-yellow-500 text-xs uppercase flex items-center gap-2">
                                <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                MODO OFFLINE ATIVADO - EXIBINDO DADOS EM CACHE/ARQUIVO
                            </span>
                            <button (click)="fetchData()" class="text-xs font-mono underline text-yellow-500 hover:text-white">TENTAR RECONEXÃO</button>
                        </div>
                    }

                    <!-- Table Header -->
                    <div class="grid grid-cols-12 gap-4 px-4 py-2 border-b-2 border-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-wider">
                        <div class="col-span-2 md:col-span-1 text-center">#</div>
                        <div class="col-span-6 md:col-span-8">Sobrevivente</div>
                        <div class="col-span-4 md:col-span-3 text-right">Tempo Logado</div>
                    </div>

                    <!-- Table Rows -->
                    @for (player of players(); track player.rank) {
                        <div class="grid grid-cols-12 gap-4 px-4 py-4 border border-zinc-800/50 bg-zinc-900/20 items-center hover:bg-zinc-900 hover:border-red-600/30 transition-all duration-200 group">
                            
                            <!-- Rank -->
                            <div class="col-span-2 md:col-span-1 flex justify-center">
                                <div class="w-8 h-8 flex items-center justify-center font-bold font-mono"
                                        [class.bg-yellow-500]="player.rank === 1"
                                        [class.text-black]="player.rank === 1"
                                        [class.bg-zinc-800]="player.rank > 3"
                                        [class.text-zinc-400]="player.rank > 3"
                                        [class.bg-zinc-700]="player.rank === 2"
                                        [class.text-white]="player.rank === 2"
                                        [class.bg-zinc-700]="player.rank === 3" 
                                        [class.text-white]="player.rank === 3">
                                    {{ player.rank }}
                                </div>
                            </div>

                            <!-- Name -->
                            <div class="col-span-6 md:col-span-8 flex items-center gap-3">
                                <div class="w-2 h-2 rounded-full hidden md:block" 
                                     [class.bg-green-500]="!isOfflineMode()"
                                     [class.bg-yellow-500]="isOfflineMode()"></div>
                                <span class="font-bold text-lg md:text-xl uppercase text-zinc-200 group-hover:text-white truncate">
                                    {{ player.name }}
                                </span>
                            </div>

                            <!-- Time -->
                            <div class="col-span-4 md:col-span-3 text-right font-mono text-red-500 font-bold">
                                {{ player.timeFormatted }}
                            </div>
                        </div>
                    }
                </div>

                <div class="mt-8 text-center flex flex-col items-center gap-2">
                    <p class="font-mono text-zinc-600 text-xs uppercase">
                        {{ isOfflineMode() ? 'DADOS DE ARQUIVO (SIMULAÇÃO)' : 'DADOS SINCRONIZADOS VIA BATTLEMETRICS API' }}
                    </p>
                    <a href="https://www.battlemetrics.com/servers/zomboid/36434642/leaderboard" 
                       target="_blank"
                       class="font-mono text-red-900 hover:text-red-600 text-xs uppercase underline transition-colors">
                       Ver no BattleMetrics Oficial
                    </a>
                </div>

            </div>
        </div>
    </section>
  `
})
export class RankingComponent implements OnInit {
  
  private readonly SERVER_ID = '36434642';
  
  currentPeriod = signal<'30d' | 'all'>('30d');
  players = signal<PlayerRank[]>([]);
  isLoading = signal<boolean>(true);
  isOfflineMode = signal<boolean>(false);

  ngOnInit() {
    this.fetchData();
  }

  setPeriod(period: '30d' | 'all') {
    if (this.currentPeriod() === period) return;
    this.currentPeriod.set(period);
    this.fetchData();
  }

  async fetchData() {
    this.isLoading.set(true);
    this.isOfflineMode.set(false);
    this.players.set([]);

    try {
      // Calculate date
      const now = new Date();
      let dateIsoStr: string;

      if (this.currentPeriod() === '30d') {
        const pastDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        dateIsoStr = pastDate.toISOString().split('.')[0] + 'Z';
      } else {
        dateIsoStr = '2023-01-01T00:00:00Z';
      }

      // 1. Build Original URL
      const targetUrl = new URL(`https://api.battlemetrics.com/servers/${this.SERVER_ID}/relationships/leaderboards/time`);
      targetUrl.searchParams.append('filter[period]', dateIsoStr);
      targetUrl.searchParams.append('page[size]', '50');

      // 2. Wrap in CORS Proxy (CodeTabs is generally more robust for this specific API)
      const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl.toString())}`;

      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`Status da API (Proxy): ${response.status}`);
      }

      const json = await response.json();
      
      if (!json.data || !Array.isArray(json.data)) {
        throw new Error('Formato de dados inválido ou vazio.');
      }
      
      const rankedData: PlayerRank[] = json.data.map((entry: any, index: number) => ({
        rank: index + 1,
        name: entry.attributes.name || 'Sobrevivente Desconhecido', 
        timeSeconds: entry.attributes.value,
        timeFormatted: this.formatTime(entry.attributes.value)
      }));

      this.players.set(rankedData);

    } catch (err: any) {
      console.warn('Falha na conexão com API BattleMetrics, ativando modo offline:', err);
      this.activateOfflineMode();
    } finally {
      this.isLoading.set(false);
    }
  }

  private activateOfflineMode() {
    this.isOfflineMode.set(true);
    
    // Mock Data simulating a cached leaderboard state
    const mockData: PlayerRank[] = [
        { rank: 1, name: "Commander Shepard", timeSeconds: 360000, timeFormatted: "100h 0m" },
        { rank: 2, name: "Rick Grimes", timeSeconds: 342000, timeFormatted: "95h 0m" },
        { rank: 3, name: "Ellie Williams", timeSeconds: 324000, timeFormatted: "90h 0m" },
        { rank: 4, name: "Joel Miller", timeSeconds: 300000, timeFormatted: "83h 20m" },
        { rank: 5, name: "Leon S. Kennedy", timeSeconds: 280000, timeFormatted: "77h 46m" },
        { rank: 6, name: "Jill Valentine", timeSeconds: 250000, timeFormatted: "69h 26m" },
        { rank: 7, name: "Arthur Morgan", timeSeconds: 200000, timeFormatted: "55h 33m" },
        { rank: 8, name: "Survivor_01", timeSeconds: 150000, timeFormatted: "41h 40m" },
        { rank: 9, name: "Daryl Dixon", timeSeconds: 120000, timeFormatted: "33h 20m" },
        { rank: 10, name: "Michonne", timeSeconds: 100000, timeFormatted: "27h 46m" }
    ];

    // If "All time", multiply values slightly for flavor
    if (this.currentPeriod() === 'all') {
        mockData.forEach(p => {
            p.timeSeconds *= 2.5;
            p.timeFormatted = this.formatTime(p.timeSeconds);
        });
    }

    this.players.set(mockData);
  }

  private formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }
}
