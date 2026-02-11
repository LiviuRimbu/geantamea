import { notFound } from "next/navigation";
import {
  isValidCategory,
  isValidSubcategory,
} from "@/shared/config/categories";

interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { category, subcategory } = await params;

  // 1. Validăm Categoria
  if (!isValidCategory(category)) {
    return notFound(); // Aruncă automat pagina 404 din Next.js
  }

  // 2. Validăm Subcategoria (doar dacă categoria a fost validă)
  // TypeScript știe deja aici că `category` este de tip valid datorită validatorului tău
  if (!isValidSubcategory(category, subcategory)) {
    return notFound();
  }

  // Dacă am ajuns aici, datele sunt 100% sigure și tipizate
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Produse pentru {category}</h1>
      <p>
        Subcategoria selectată: <strong>{subcategory}</strong>
      </p>

      {/* Aici poți face fetch la produse în siguranță */}
      <div className="product-grid">{/* Lista de produse... */}</div>
    </main>
  );
}
