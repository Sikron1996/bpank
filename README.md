# banana-x402-fixed-v2

Готовий endpoint для x402bscan:

- мережа: Base
- asset (USDC): 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
- сума: 1 USDC (1000000 у мінімальних одиницях)
- payTo / payer: 0xF97a410f2f0b64Cb5820baD63d878c3A967235AA
- ресурс: /api/mint

## Як працює
- GET /api/mint -> 402 strict x402 response
- POST /api/mint -> 200 OK після оплати

## Деплой
1. Завантаж проєкт на Vercel
2. Після деплою використай https://<твоє-ім’я>.vercel.app/api/mint у x402bscan
