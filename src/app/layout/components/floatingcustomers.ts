import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { twMerge } from "tailwind-merge";

@Component({
  selector: "floating-customers",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div
    [ngClass]="
      twMerge(
        'w-full flex flex-nowrap gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-128px),transparent_100%)]',
        className
      )
    "
  >
    <div
      *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8]"
      class="flex flex-nowrap items-center justify-center md:justify-start animate-infinite-scroll"
    >
      <div
        *ngFor="let data of floatingCustomersData; let j = index"
        class="w-44 flex items-center flex-nowrap justify-center h-auto gap-4"
      >
        <img
          *ngIf="data.logo"
          [src]="data.logo"
          [alt]="data.label"
          [class]="twMerge('h-10 w-auto object-contain invert dark:invert-0', iconClass)"
        />
      </div>
    </div>
  </div> `,
})
export class FloatingCustomers {
  @Input() className?: string;
  @Input() iconClass?: string;
  @Input() labelClass?: string;
  twMerge = twMerge;

  floatingCustomersData = [
    {
      logo: "/logos/elcampa.png",
      label: "El Campa",
    },
    {
      logo: "/logos/eximius.png",
      label: "Eximius",
    },
    {
      logo: "/logos/conf.png",
      label: "Conf",
    },
  ];
}
