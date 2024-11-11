import { FormBuilder } from '@angular/forms';
import { CustomValidators } from '../../../shared/validators/custom-validators';
import { Validators } from '@angular/forms';
import { ScrapeFormData } from '../models/scrape-form.model';

export const createScrapeForm = (fb: FormBuilder) => {
  return fb.group<ScrapeFormData>({
    productColour: fb.control('', [
      CustomValidators.lettersOnly(),
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    productBrand: fb.control('', [
      CustomValidators.lettersOnly(),
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    productType: fb.control('', [
      CustomValidators.lettersOnly(),
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    productCondition: fb.control('', [
      CustomValidators.lettersOnly(),
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    productSize: fb.control('', [
      CustomValidators.lettersOnly(),
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
    productDescription: fb.control('', [
      CustomValidators.lettersOnly(),
      Validators.maxLength(30),
      Validators.minLength(3),
    ]),
  });
};
