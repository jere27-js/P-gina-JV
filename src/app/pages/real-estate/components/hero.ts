import { Component, computed, inject } from "@angular/core";
import { LayoutService } from "@/layout/service/layout.service";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { CommonModule } from "@angular/common";
import { FloatingCustomers } from "@/layout/components/floatingcustomers";

@Component({
  selector: "real-estate-hero",
  standalone: true,
  imports: [
    AnimatedContainer,
    CommonModule,
    FloatingCustomers,
  ],
  template: `
    <animated-container className="relative min-h-screen">
      <!-- Navbar con logo Eximius -->
      <div class="container relative z-20 pt-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img src="/logos/eximius.png" alt="Eximius" class="h-12 lg:h-16 w-auto invert dark:invert-0" />
            <span class="text-sm lg:text-base font-semibold text-surface-900 dark:text-white uppercase tracking-wider">Juventud Verbo</span>
          </div>
          <div class="flex items-center gap-8">
            <a href="#" class="text-sm lg:text-base font-medium text-surface-700 dark:text-surface-300 hover:text-primary-500 transition-colors">JUCONF</a>
            <a href="#inscripciones" class="text-sm lg:text-base font-medium text-surface-700 dark:text-surface-300 hover:text-primary-500 transition-colors">INSCRIPCIONES</a>
          </div>
        </div>
      </div>

      <!-- Fecha en esquina superior derecha -->
      <div class="absolute top-20 right-8 lg:right-16 z-20 text-right">
        <div class="text-6xl lg:text-8xl font-black text-surface-900 dark:text-white leading-none">
          <div>MA</div>
          <div>YO</div>
        </div>
        <div class="text-3xl lg:text-5xl font-black text-surface-600 dark:text-surface-400 mt-2">
          1-3
        </div>
      </div>

      <!-- Banner principal -->
      <div class="container mt-32 lg:mt-40 relative z-10">
        <div class="relative bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl min-h-[500px] lg:min-h-[600px] flex items-center">
          <!-- Decoraciones -->
          <div class="absolute top-8 left-8 w-16 h-16 lg:w-24 lg:h-24 bg-white/20 rounded-full"></div>
          <div class="absolute bottom-12 right-12 w-20 h-20 lg:w-28 lg:h-28 bg-white/15 rounded-full"></div>
          
          <!-- Patrón decorativo derecha -->
          <div class="absolute top-0 right-0 w-64 lg:w-96 h-full opacity-30">
            <div class="absolute top-12 right-8 w-2 h-64 bg-white rotate-12 origin-top"></div>
            <div class="absolute top-12 right-12 w-2 h-64 bg-white rotate-12 origin-top"></div>
            <div class="absolute top-12 right-16 w-2 h-64 bg-white rotate-12 origin-top"></div>
            <div class="absolute top-12 right-20 w-2 h-64 bg-white rotate-12 origin-top"></div>
            <div class="absolute top-12 right-24 w-2 h-64 bg-white rotate-12 origin-top"></div>
          </div>

          <!-- Contenido -->
          <div class="relative z-10 px-8 lg:px-20 py-16 lg:py-24 w-full">
            <h1 class="text-7xl lg:text-9xl font-black text-white leading-none tracking-tight">
              <span class="block">CAUSA</span>
              <span class="block text-blue-600 stroke-white" style="-webkit-text-stroke: 3px white;">Y</span>
              <span class="block">EFECTO</span>
            </h1>
            
            <div class="mt-8 lg:mt-12">
              <div class="inline-block">
                <div class="text-2xl lg:text-4xl font-bold text-surface-900 uppercase tracking-wider flex items-center gap-4">
                  <span class="inline-block w-12 lg:w-16 h-1 bg-surface-900"></span>
                  Guatemala 2026
                  <span class="inline-block w-12 lg:w-16 h-1 bg-surface-900"></span>
                </div>
              </div>
            </div>

            <p class="mt-6 text-xl lg:text-2xl text-surface-900 font-semibold max-w-2xl">
              En este mundo, pero no de este mundo
            </p>

            <!-- Botón Inscríbete -->
            <div class="mt-10 lg:mt-12 flex justify-end">
              <button class="px-10 py-5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 text-surface-900 font-black text-xl lg:text-2xl rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-110 transition-all duration-300 animate-pulse-scale uppercase tracking-wide">
                Inscríbete Ahora
                <i class="pi pi-arrow-right !text-lg ml-3"></i>
              </button>
            </div>

            <!-- Logo Juventud Verbo -->
            <div class="mt-12">
              <img src="/logos/eximius.png" alt="Juventud Verbo" class="h-8 lg:h-10 w-auto" />
            </div>

            <!-- Fecha abajo -->
            <div class="absolute bottom-8 right-8 lg:bottom-12 lg:right-16 text-right">
              <div class="text-2xl lg:text-4xl font-black text-surface-900 uppercase tracking-wider">
                Mayo 1 al 3
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logos de sponsors/partners - ancho completo -->
      <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-700 py-8">
        <floating-customers
          className=""
          iconClass="[&_path]:fill-surface-900 dark:[&_path]:fill-surface-900"
          labelClass="text-surface-900 dark:text-surface-900"
        />
      </div>
    </animated-container>
  `,
})
export class RealEstateHero {
  layoutService = inject(LayoutService);

  isDarkTheme = computed(() => this.layoutService.isDarkTheme());

  isWide = computed(() => this.layoutService.isWide());
}
