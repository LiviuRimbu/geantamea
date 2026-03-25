import { Item } from '@/shared/types';

type Locale = 'ro' | 'en' | 'ru' | 'uk';

export function buildProductJsonLd(item: Item, locale: Locale) {
    const url = `https://geantamea.md/${locale}/products/${item.id}`;

    const description =
        item[`description_${locale}`] ||
        item.description_ro; // fallback to RO if locale description is empty

    const price = item.onSale
        ? item.priceSale
        : item.price;

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: item.displayCode,
        description,
        image: item.images,
        brand: {
            '@type': 'Brand',
            name: item.Brand.name_ro,
        },
        color: item.Color[`name_${locale}`] || item.Color.name_ro,
        material: item.Material[`name_${locale}`] || item.Material.name_ro,
        offers: {
            '@type': 'Offer',
            url,
            priceCurrency: 'MDL',
            price: price.toFixed(2),
            availability: item.available
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            itemCondition: 'https://schema.org/NewCondition',
        },
    };
}