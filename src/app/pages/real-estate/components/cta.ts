import { Component } from "@angular/core";
import { AnimatedContainer } from "@/layout/components/animatedcontainer";
import { ImageModule } from 'primeng/image';

@Component({
  selector: "real-estate-cta",
  standalone: true,
  imports: [AnimatedContainer,ImageModule],
  template: `
    <animated-container className="w-full px-4 lg:px-8 mt-40 lg:mt-64 relative z-10">
      <div
        class="flex items-center justify-center h-[21rem] lg:h-[45rem] relative rounded-4xl overflow-hidden px-4 shadow-2xl"
      >
        <div
          class="-z-1 absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.6)_100%)]"
        ></div>
        <p-image
          class="object-cover -z-2 absolute w-full h-full brightness-110"
          src="/pages/real-estate/cta-background.jpg"
          alt="Real Estate CTA Background Image"
        />
        <div class="max-w-[16rem] lg:max-w-[38rem] text-center">
          <h1 class="title text-3xl lg:text-7xl">
            Únete a Causa y Efecto
          </h1>
          <p class="text-lg text-white/72 max-w-[28rem] mt-6 mx-auto">
            Regístrate ahora para ser parte de esta experiencia transformadora del 1 al 3 de mayo
          </p>
          <button class="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-scale">
            Inscribete
            <i class="pi pi-arrow-right !text-sm ml-2"></i>
          </button>
        </div>
      </div>
    </animated-container>
  `,
})
export class RealEstateCTA {

}
