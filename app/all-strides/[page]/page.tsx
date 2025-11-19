interface Props {
  params: Promise<{ page: string }>;
}

export default async function AllStridesPage({ params }: Props) {
  const { page } = await params;
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">All Strides</h1>
      <p>Page: {page}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ page: '1' }];
}
