type Params = {
  category: string;
};

export async function generateMetadata ({params} : { params:Params}){
  const local_params = await params;
  const cat= await local_params.category;
    return {
      
        title: `${cat.toUpperCase()} Projects`,
    };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;

  return (
    <div style={{ padding: '10px', color: 'white' }}>
      <h1>{category.toUpperCase()} Projects</h1>
      
    </div>
  );
}
