function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <span className="text-blue-600 font-bold">R$ {product.price}</span>
    </div>
  );
}

export default ProductCard;
