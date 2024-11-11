import { FormControl } from '@angular/forms';

export interface ScrapeFormData {
  productColour: FormControl<string | null>;
  productBrand: FormControl<string | null>;
  productType: FormControl<string | null>;
  productCondition: FormControl<string | null>;
  productSize: FormControl<string | null>;
  productDescription: FormControl<string | null>;
}
