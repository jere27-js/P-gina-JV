import { Component } from "@angular/core";
import { RealEstateHero } from "./components/hero";
import { RealEstatePartner } from "./components/partner";
import { RealEstateListing } from "./components/listing";
import { RealEstateBestProjectsFirst } from "./components/bestprojectsfirst";
import { RealEstateWorkflow } from "./components/workflow";
import { RealEstateTestimonials } from "./components/testimonial";
import { RealEstateCTA } from "./components/cta";
import { RealEstateFooter } from "./components/footer";

@Component({
  selector: "real-estate",
  standalone: true,
  imports: [
    RealEstateHero,
    RealEstatePartner,
    RealEstateListing,
    RealEstateBestProjectsFirst,
    RealEstateWorkflow,
    RealEstateTestimonials,
    RealEstateCTA,
    RealEstateFooter,
  ],
  template: ` 
    <div class="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-700">
      <real-estate-hero />
      <real-estate-cta />
      <real-estate-workflow />
      <real-estate-partner />
      <real-estate-listing />
      <real-estate-best-projects-first />
      <real-estate-testimonials />
      <real-estate-footer />
    </div>`,
})
export class RealEstate {}
