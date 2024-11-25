"use server";

export default async function createProduct(formData:FormData) {
    await fetch(`${process.env.API_URL}}/products`,{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body: JSON.stringify(Object.fromEntries(formData))
    })
    
}