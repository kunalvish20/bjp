import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://api.janawaaz.example/v1',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
})

export const isApiError = (error: unknown): error is { message: string } =>
  typeof error === 'object' && error !== null && 'message' in error
