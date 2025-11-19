import { PageProps } from 'next';

interface Props {
  params: Promise<{ page: string }>;
}

export default async function AllArticlesPage({ params }: Props) {
  const { page } = await params;
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">All Articles</h1>
      <p>Page: {page}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ page: '1' }];
}
