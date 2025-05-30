import Image from "next/image";

export default function Home() {
    const items = [
      { id: 1, name: 'Residential Solar Panel', description: 'Perfect for powering your home with clean energy.', price: 499, quantity: 1 },
      { id: 2, name: 'Commercial Solar Panel', description: 'Ideal for businesses and industrial applications.', price: 799, quantity: 2 },
      { id: 3, name: 'Premium Solar Panel', description: 'High efficiency with advanced solar technology.', price: 999, quantity: 1 }
    ];

  return (
      <div>
        {/* Hero Section */}
        <section className="hero">
          <div>
            <h2>Power Your Home with Solar Energy</h2>
            <p>High-quality solar panels for homes, businesses, and industries.</p>
          </div>
        </section>

        <section id="products" className="product-grid">
          {items.map(item=>           (
            <div className="product-card" key={item.id}>
              <Image src="/solar-panel.jpg" width={1000} height={1000} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button>Add to Cart</button>
          </div>))}
        </section>
      </div>
  );
}