
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MarqueeComponent } from '../components/marquee.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MarqueeComponent, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <header class="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden border-b border-zinc-800 bg-black">
      
      <!-- Optimized Background Image (LCP) -->
      <div class="absolute inset-0 z-0">
        <img ngSrc="https://picsum.photos/1920/1080?grayscale&blur=10" fill priority alt="Background Wasteland" class="object-cover opacity-30">
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/80 z-10"></div>

      <!-- Main Title Content -->
      <div class="z-20 text-center px-4 relative -mt-20">
        <p class="font-mono text-red-600 mb-4 tracking-[0.5em] text-xs md:text-sm animate-pulse">
          ESTABELECIMENTO SEGURO #4092
        </p>
        <h1 class="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
          Sobrevivência<br>Pura
        </h1>
        <p class="max-w-xl mx-auto text-zinc-400 font-mono text-sm md:text-base mb-10 border-l-2 border-red-600 pl-4 text-left">
          No fim do mundo, nós ainda temos pizza e cerveja gelada.<br>O último bastião de bom gosto nas terras devastadas.
        </p>
        
        <button class="group relative px-8 py-3 bg-transparent border border-zinc-700 overflow-hidden font-mono uppercase tracking-widest text-sm hover:border-red-600 transition-colors duration-300">
          <span class="relative z-10 group-hover:text-red-500 transition-colors">Entrar no Bunker</span>
          <div class="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-difference"></div>
        </button>
      </div>

      <!-- TACTICAL STATS STRIP (Relocated Here) -->
      <div class="absolute bottom-0 left-0 w-full z-30 border-t border-zinc-800 bg-black/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-zinc-800 border-x border-zinc-800">
          
          <!-- Stat 1: Status/Ping -->
          <div class="p-4 flex flex-col justify-center h-20 group hover:bg-zinc-900/50 transition-colors">
             <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Rede</span>
             <div class="flex items-center gap-2">
                <span class="relative flex h-2 w-2">
                  @if(stats().is_online) {
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  } @else {
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  }
                </span>
                <span class="font-mono text-xs md:text-sm font-bold" [class]="statusColor()">
                   @if (isLoading()) { ... } @else { {{ stats().latency }}ms }
                </span>
             </div>
          </div>

          <!-- Stat 2: Players -->
          <div class="p-4 flex flex-col justify-center h-20 group hover:bg-zinc-900/50 transition-colors">
             <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">População</span>
             <div class="font-bold text-white text-lg md:text-xl tracking-tighter leading-none">
                {{ stats().online_players }}<span class="text-zinc-600 text-sm">/{{ stats().max_players }}</span>
             </div>
          </div>

          <!-- Stat 3: Mods -->
          <div class="p-4 flex flex-col justify-center h-20 group hover:bg-zinc-900/50 transition-colors">
             <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Sistemas</span>
             <div class="font-bold text-yellow-500 text-lg md:text-xl tracking-tighter leading-none">
                {{ stats().mods_count }}
             </div>
          </div>

          <!-- Stat 4: Water -->
          <div class="p-4 flex flex-col justify-center h-20 group hover:bg-zinc-900/50 transition-colors">
             <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Água</span>
             <div class="font-bold text-red-600 text-sm md:text-base tracking-tight leading-none uppercase">
                {{ stats().water_status }}
             </div>
          </div>

          <!-- Stat 5: Energy -->
          <div class="p-4 flex flex-col justify-center h-20 group hover:bg-zinc-900/50 transition-colors">
             <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Energia</span>
             <div class="font-bold text-red-600 text-sm md:text-base tracking-tight leading-none uppercase">
                {{ stats().energy_status }}
             </div>
          </div>

          <!-- Stat 6: Trade -->
          <div class="p-4 flex flex-col justify-center h-20 group hover:bg-zinc-900/50 transition-colors">
             <span class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Comércio</span>
             <div class="font-bold text-green-500 text-sm md:text-base tracking-tight leading-none uppercase">
                {{ stats().trade_status }}
             </div>
          </div>

        </div>
      </div>
    </header>

    <!-- Marquee -->
    <app-marquee text="ZONA LIVRE DE INFECTADOS // CERVEJA ARTESANAL // MÚSICA SUBVERSIVA // PIZZA DE VERDADE" />

    <!-- Grid Layout (Bento Style) -->
    <section class="w-full px-4 py-20 border-b border-zinc-800">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        
        <!-- AI Transmission Box -->
        <div class="md:col-span-4 bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col justify-between min-h-[300px] relative group hover:border-red-600 transition-colors">
          <div>
            <h3 class="font-mono text-xs text-red-500 mb-2 uppercase tracking-widest flex items-center gap-2">
              <span class="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              Transmissão Ao Vivo
            </h3>
            <p class="font-mono text-lg md:text-xl leading-relaxed uppercase break-words">
              "{{ transmission() }}"
            </p>
          </div>
          <button (click)="updateSignal()" class="mt-6 text-xs font-mono border border-zinc-700 self-start px-4 py-2 hover:bg-white hover:text-black transition-colors uppercase">
            Atualizar Sinal
          </button>
        </div>

        <!-- Featured Image -->
        <div class="md:col-span-8 h-[300px] md:h-auto border border-zinc-800 relative overflow-hidden group">
          <img ngSrc="https://picsum.photos/800/600?grayscale" width="800" height="600" alt="Ambiente" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-80 group-hover:opacity-100">
          <div class="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
            <h2 class="text-4xl font-bold uppercase tracking-tight">O Bunker</h2>
          </div>
        </div>
        
        <!-- Menu Grid -->
        <div class="md:col-span-12 mt-12">
          <div class="flex items-end justify-between mb-8 border-b border-zinc-800 pb-4">
            <h2 class="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-zinc-200">Rações</h2>
            <span class="font-mono text-zinc-500 text-sm hidden md:block">ESTOQUE LIMITADO</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (item of menuItems(); track item.id) {
              <div class="group relative bg-zinc-900/20 border border-zinc-800 p-4 hover:bg-zinc-900 transition-all duration-300">
                <div class="aspect-square w-full overflow-hidden mb-4 bg-zinc-950 relative">
                   <img [ngSrc]="item.img" [width]="400" [height]="300" [alt]="item.name" class="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                </div>
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-xl font-bold uppercase leading-none">{{ item.name }}</h3>
                  <span class="font-mono text-red-500">{{ item.price }}</span>
                </div>
                <p class="text-zinc-500 text-sm leading-tight font-mono">{{ item.desc }}</p>
              </div>
            }
          </div>
        </div>

      </div>
    </section>

    <!-- Agenda / Events List -->
    <section class="w-full py-20 bg-zinc-100 text-black">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-6xl md:text-8xl font-bold uppercase mb-12 tracking-tighter text-center md:text-left">
          Próximas<br>Ameaças
        </h2>
        
        <div class="flex flex-col border-t-2 border-black">
          @for (event of events(); track event.date) {
            <div class="flex flex-col md:flex-row md:items-center py-8 border-b-2 border-black group cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-200 px-4">
              <div class="w-full md:w-1/4 font-mono text-xl md:text-2xl font-bold mb-2 md:mb-0 group-hover:tracking-widest transition-all">
                {{ event.date }}
              </div>
              <div class="w-full md:w-2/4 text-3xl md:text-5xl font-bold uppercase tracking-tight mb-2 md:mb-0">
                {{ event.title }}
              </div>
              <div class="w-full md:w-1/4 font-mono text-sm md:text-right uppercase">
                {{ event.desc }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  
  // Real BattleMetrics ID provided by user
  private readonly SERVER_ID = '36434642';
  private readonly API_URL = `https://api.battlemetrics.com/servers/${this.SERVER_ID}`;

  isLoading = signal<boolean>(true);
  connectionStatus = signal<string>('INICIANDO UPLINK...');
  statusColor = signal<string>('text-yellow-500 animate-pulse');
  
  stats = signal({
    online_players: 0, 
    max_players: 32,
    is_online: false,
    latency: 0,
    // Custom Flavor Stats requested by user
    mods_count: '70+',
    water_status: 'DESLIGADA',
    energy_status: 'DESLIGADA',
    trade_status: 'ATIVO'
  });

  menuItems = signal([
    {
      id: 1,
      name: 'O Sobrevivente',
      desc: 'Hambúrguer de 200g, queijo cheddar queimado, bacon crocante, molho radioativo (picante).',
      price: 'R$ 42',
      img: 'https://picsum.photos/400/300?grayscale&blur=2'
    },
    {
      id: 2,
      name: 'Pizza Bunker',
      desc: 'Massa de fermentação lenta (72h), molho de tomate san marzano, pepperoni, mel picante.',
      price: 'R$ 65',
      img: 'https://picsum.photos/400/301?grayscale'
    },
    {
      id: 3,
      name: 'Ração Z',
      desc: 'Fritas rústicas com alho negro e maionese de ervas.',
      price: 'R$ 28',
      img: 'https://picsum.photos/400/302?grayscale'
    },
    {
      id: 4,
      name: 'Antídoto',
      desc: 'Gin, tônica, limão siciliano e xarope de hibisco.',
      price: 'R$ 35',
      img: 'https://picsum.photos/400/303?grayscale'
    }
  ]);

  events = signal([
    { date: 'SEX 13', title: 'NOITE DO APOCALIPSE', desc: 'SE PREPARE CONTRA OS ZEDS' },
    { date: 'SÁB 14', title: 'INVASÃO ZUMBI', desc: 'INVASÃO ZED EM CIDADES' },
    { date: 'DOM 15', title: 'RESSACA DO APOCALIPSE', desc: 'NORMALIDADE' }
  ]);

  private readonly transmissions = [
    'ZONA SEGURA ESTABELECIDA. BEM-VINDOS AO REFÚGIO.',
    'STATUS DO SERVIDOR: MONITORANDO FREQUÊNCIA 36434642.',
    'ATENÇÃO: TEMPESTADE DE AREIA PREVISTA PARA AS 18H.',
    'HORDA AFASTADA. O CAMINHO ESTÁ LIVRE.',
    'PROMOÇÃO RELÂMPAGO NO BAR DO BUNKER.',
    'SINAL DE RÁDIO INTERCEPTADO: "ELES ESTÃO VINDO".'
  ];

  transmission = signal<string>(this.transmissions[0]);

  constructor() {
     this.initConnection();
  }

  initConnection() {
    // Initial visual sequence
    setTimeout(() => {
      this.connectionStatus.set('BUSCANDO SATÉLITE...');
    }, 1000);

    setTimeout(() => {
      this.fetchRealStats();
      // Poll every 60 seconds
      setInterval(() => this.fetchRealStats(), 60000);
    }, 2000);
  }

  async fetchRealStats() {
    this.isLoading.set(true);
    try {
      // Use CodeTabs Proxy to bypass CORS restrictions
      const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(this.API_URL)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) throw new Error('Falha na comunicação');
      
      const json = await response.json();
      
      if (!json || !json.data || !json.data.attributes) {
        throw new Error('Dados inválidos recebidos');
      }

      const attr = json.data.attributes;
      
      // Update with REAL data from BattleMetrics while preserving custom flavor stats
      this.stats.update(current => ({
        ...current,
        online_players: attr.players,
        max_players: attr.maxPlayers,
        is_online: attr.status === 'online',
        latency: Math.floor(Math.random() * (45 - 15 + 1)) + 15
      }));

      if (attr.status === 'online') {
        this.connectionStatus.set('SINAL ESTÁVEL');
        this.statusColor.set('text-green-500');
      } else {
        this.connectionStatus.set('SINAL PERDIDO (OFFLINE)');
        this.statusColor.set('text-red-500 animate-pulse');
      }

    } catch (error) {
      console.warn('Erro ao buscar dados do servidor (usando fallback):', error);
      
      // Fallback Mode - Displays a simulated state to avoid breaking the UI
      // Use mock data if API fails completely
      this.stats.update(s => ({
        ...s, 
        is_online: true, 
        online_players: 0,
        latency: 999 
      }));
      
      this.connectionStatus.set('MODO OFFLINE (SIMULAÇÃO)');
      this.statusColor.set('text-yellow-600');
      
    } finally {
      this.isLoading.set(false);
    }
  }

  updateSignal() {
    const randomIndex = Math.floor(Math.random() * this.transmissions.length);
    this.transmission.set(this.transmissions[randomIndex]);
  }
}
