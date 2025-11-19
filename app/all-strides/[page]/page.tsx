interface PageProps {
  params: {
    page: string;
  };
}

export default function AllStridesPage({ params }: PageProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">All Strides</h1>
      <p>Page: {params.page}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ page: '1' }];
}
