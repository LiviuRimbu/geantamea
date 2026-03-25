const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export function buildHomeJsonLd() {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'GeantaMea',
            url: baseUrl,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GeantaMea',
            url: baseUrl,
            //!!! logo: `${baseUrl}/logo.png`,
        },
    ];
}