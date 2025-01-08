import { defineType, defineField } from 'sanity';

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) =>
        Rule.min(5).max(30).error('Product name must be between 5 and 30 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.min(30).max(200).error('Description must be between 30 and 200 characters'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) =>
        Rule.min(0).error('Price must be a positive number'),
    }),
  ],
});
