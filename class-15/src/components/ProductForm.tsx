"use client"

import React from 'react'
import {z} from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { client } from '@/sanity/lib/client';

interface ProductDataType {
    productName: string,
    description: string,
    price: number
}

const addProduct = async (productData:ProductDataType) => {
    try {
      const result = await client.create({
        _type: 'product', // Schema type
        productName: productData.productName,
        description: productData.description,
        price: productData.price,
      });
  
      console.log('Product added successfully:', result);
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

const formSchema = z.object({
    productName : z.string().min(5, "Product name must be at least 5 characters long")
    .max(30, "Product name must be at most 30 characters long"),
  description: z
    .string()
    .min(30, "Description must be at least 30 characters long")
    .max(200, "Description must be at most 200 characters long"), 

   price: z.string().min(1, "Price should be grater then 1 figure").max(3, "Max limit is 3 figure")
})

const ProductForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: "",
            description: "",
            price: ''
        },
    })

     function onSubmit(data: z.infer<typeof formSchema>) {
     
        console.log(data)
        const productData = {productName: data.productName, description: data.description, price: Number(data.price)}
     addProduct(productData)
      }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

      <FormField
        control={form.control}
        name="productName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product name</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      />



<FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  </Form>

  )
}

export default ProductForm