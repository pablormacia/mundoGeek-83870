import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rtdbBaseUrl = process.env.EXPO_PUBLIC_BASE_URL_RTDB

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({baseUrl:rtdbBaseUrl}),
    endpoints: (builder)=>({
        getCategories: builder.query({query: () =>'categories.json'}),
        getProductsByCategory: builder.query({
            /* query: (category)=>'products.json?orderBy="category"&equalTo="'+ category +'"', */
            query: (category)=>`products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
            // Convertir objeto en array:
            return Object.values(response)
            }
        })
    })
})


export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopApi