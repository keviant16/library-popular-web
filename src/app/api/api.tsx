// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Book from '../../interface/Book';
import Bookshelf from '../../interface/Bookshelf';
import Tag from '../../interface/Tag';

const JWTTOKEN = localStorage.getItem('jwtToken')

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'tagApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://library-popular-web-service.herokuapp.com/api',
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${JWTTOKEN}`);
      return headers;
    }
  }),

  tagTypes: ['Tag', 'Bookshelf', 'Credential', 'Book'],
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => `/tags`,
      transformResponse: (res: Tag[]) => res.sort((a, b) => b.id! - a.id!),
      providesTags: ['Tag']
    }),

    createTag: builder.mutation({
      query: (tag: Tag) => ({
        url: `/tags`,
        method: "POST",
        body: tag,
      }),
      invalidatesTags: ['Tag']
    }),

    updateTag: builder.mutation({
      query: (tag: Tag) => ({
        url: `/tags/${tag.id}`,
        method: 'PUT',
        body: tag,
      }),
      invalidatesTags: ['Tag']
    }),

    deleteTag: builder.mutation({
      query: ({ id }) => ({
        url: `/tags/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tag']
    }),

    //bookshelves 
    getAllBookshelves: builder.query({
      query: () => `/bookshelves`,
      transformResponse: (res: Bookshelf[]) => res.sort((a, b) => b.id! - a.id!),
      providesTags: ['Bookshelf']
    }),

    createBookshelf: builder.mutation({
      query: (bookshelf: Bookshelf) => ({
        url: `/bookshelves`,
        method: "POST",
        body: bookshelf,
      }),
      invalidatesTags: ['Bookshelf']
    }),

    updateBookshelf: builder.mutation({
      query: (bookshelf: Bookshelf) => ({
        url: `/bookshelves/${bookshelf.id}`,
        method: 'PUT',
        body: bookshelf,
      }),
      invalidatesTags: ['Bookshelf']
    }),

    deleteBookshelf: builder.mutation({
      query: ({ id }) => ({
        url: `/bookshelves/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bookshelf']
    }),

    //credentials 
    getAllCredentials: builder.query({
      query: () => `/credentials`,
      transformResponse: (res: any[]) => res.sort((a, b) => b.id! - a.id!),
      providesTags: ['Credential']
    }),
    login: builder.mutation({
      query: (credential) => ({
        url: `/credentials/login`,
        method: "POST",
        body: credential,
      }),
      invalidatesTags: ['Credential']
    }),
    register: builder.mutation({
      query: (credential) => ({
        url: `/credentials/register`,
        method: "POST",
        body: credential,
      }),
      invalidatesTags: ['Credential']
    }),
    deleteCredential: builder.mutation({
      query: ({ uid }) => ({
        url: `/credentials/${uid}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Credential']
    }),

    //books
    getAllBooks: builder.query({
      query: () => `/books`,
      transformResponse: (res: Book[]) => res.sort((a, b) => b.id! - a.id!),
      providesTags: ['Book']
    }),
    getBooksByIsbn: builder.query({
      query: (isbn: string) => `/books/isbn=${isbn}`,
      transformResponse: (res: Book[]) => res.sort((a, b) => b.id! - a.id!),
      providesTags: ['Book']
    }),
    createBook: builder.mutation({
      query: (book: Book) => ({
        url: `/books`,
        method: "POST",
        body: book,
      }),
      invalidatesTags: ['Book']
    }),
    updateBook: builder.mutation({
      query: (book: Book) => ({
        url: `/books/${book.id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ['Book']
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book']
    }),
  }),
})

export const {
  useGetAllTagsQuery, useCreateTagMutation, useDeleteTagMutation, useUpdateTagMutation,
  useCreateBookshelfMutation, useDeleteBookshelfMutation, useGetAllBookshelvesQuery, useUpdateBookshelfMutation,
  useDeleteCredentialMutation, useLoginMutation, useRegisterMutation, useGetAllCredentialsQuery,
  useCreateBookMutation, useDeleteBookMutation, useGetAllBooksQuery, useUpdateBookMutation, useGetBooksByIsbnQuery
} = api;