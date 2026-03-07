# Enterprise Skeleton (Mimarisi ve Kullanım Kılavuzu)

Bu proje Hexagonal Architecture tabanlı, modüler, ölçeklenebilir ve sağlam bir Çatı Kod'dur.
Ajan Sözleşmeleri prensipleriyle (Interfaces/Ports) donatılmıştır.

## Klasör Yapısı (MonorepoWorkspaces)

- **Core (`packages/core`)**: Portlar, Custom Error Sınıfları ve Evrensel Interfaceler. İş mantığı burada soyutlanır.
- **Infrastructure (`packages/infrastructure`)**: Adaptörler. Dış API'ler, Veritabanları ve Loglama sistemleri (örn. Winston) burundadır.
- **Config (`packages/config`)**: Ortam değişkenlerinin (.env) Zod ile tip güvenli taranması.
- **API Gateway (`apps/api-gateway`)**: Express HTTP Server, Graceful Shutdown mekanizması ve Global Error Handling.
- **Web Client (`apps/web-client`)**: Next.js, Tailwind ve TypeScript'li modern web arayüzü temeli.

## Geliştiriciler İçin Rehber

1. **Katı Bağımlılık Yönü**: `apps` -> `infrastructure` -> `core`
2. `core` paketi hiçbir dış modüle bağlı KALA-MAZ. (ORM veya herhangi bir HTTP modülü çekemez)
3. Modül eklerken önce arayüzü (Interface) `core`'da tanımla, sonra `infrastructure`'da implement et. 
4. Bağımlılık Enjeksiyonu (DI) işlemlerini API Gateway'de yapın.
