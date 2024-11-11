export interface FormFieldConfig {
  label: string;
  placeholder: string;
  controlName: string;
}

export const formFields: FormFieldConfig[] = [
  {
    label: 'Product Colour',
    placeholder: 'Enter the colour of the product',
    controlName: 'productColour',
  },
  {
    label: 'Product Brand',
    placeholder: 'Enter the brand of the product',
    controlName: 'productBrand',
  },
  {
    label: 'Product Type',
    placeholder: 'Enter the type of the product',
    controlName: 'productType',
  },
  {
    label: 'Product Condition',
    placeholder: 'Enter the condition of the product',
    controlName: 'productCondition',
  },
  {
    label: 'Product Size',
    placeholder: 'Enter the size of the product',
    controlName: 'productSize',
  },
  {
    label: 'Product Description',
    placeholder: 'Enter the description of the product',
    controlName: 'productDescription',
  },
];
