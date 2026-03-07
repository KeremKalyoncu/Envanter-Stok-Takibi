# Contribution Guidelines (Takım Anayasası)

Bu repo **Conventional Commits** standartlarına uymak zorundadır. Kod incelemelerinde katı standartlar yürütülür.

## Commit Kuralları
- `feat:` Yeni bir özellik (İş mantığı katmanı veya dış servis eklentileri)
- `fix:` Kritik veya UI hatalarının onarılması
- `chore:` Konfigürasyonlar veya rutin yapılandırmalar
- `refactor:` İşlevselliği etkilemeyen mimari revizyonları

## PR (Pull Request) Kabul Şartları
1. Linter (`eslint`) veya Formatter (`prettier`) kurallarını ihlal eden PR'lar incelenmeden reddedilir.
2. Spagetti koda izin yok: İsteği doğrudan veritabanında yürüten controller'lar yasaktır.
3. Mimariye uyum: "Business Rule" içeren hiçbir kod `infrastructure` adaptörü içerisine enjekte edilemez.
4. Çökmelere Karşı Hata Yönetimi: Kritik modüllerde global "try-catch" veya Express Middleware Error Handler tetiklenecektir.
