type BuildCategoryJsonLdParams = {
    category: string;
    subcategory: string;
    locale: string;
    categoryLabel: string;
    subcategoryLabel: string;
};

export function buildCategoryJsonLd({
                                        category,
                                        subcategory,
                                        locale,
                                        categoryLabel,
                                        subcategoryLabel,
                                    }: BuildCategoryJsonLdParams) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'GeantaMea',
                item: `${baseUrl}/${locale}`,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: categoryLabel,
                item: `${baseUrl}/${locale}/${category}`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: subcategoryLabel,
                item: `${baseUrl}/${locale}/${category}/${subcategory}`,
            },
        ],
    };
}