'use server'

import prisma from './db'

export async function createProduct(data) {
  try {
    const product = await prisma.product.create({ data })
    return { success: true, product }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany()
    return { success: true, products }
  } catch (error) {
    return { success: false, error: error.message }
  }
}