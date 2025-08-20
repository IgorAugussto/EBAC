import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Notebook Gamer",
          price: 4500,
          description: "Notebook potente para jogos e trabalho.",
          image: "../img/matteo-vella-_HB3Y1wGlxw-unsplash.jpg"
        },
        {
          id: 2,
          name: "Smartphone",
          price: 2500,
          description: "Celular rápido com ótima câmera.",
          image: "../../public/img/nubelson-fernandes-jjYCm2cerZA-unsplash.jpg"
        }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const newProduct = { id: Date.now(), ...formData };
    setProducts((prev) => [...prev, newProduct]);
    setFormData({ name: "", price: "", description: "", image: "" });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Catálogo de Produtos</h1>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-4 mb-6 grid gap-3"
      >
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="image"
          placeholder="URL da imagem (opcional)"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Adicionar Produto
        </button>
      </form>

      {/* Lista de produtos */}
      {loading ? (
        <p className="text-center text-gray-500">Carregando...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Nenhum produto cadastrado.</p>
      )}
    </div>
  );
}

export default CatalogPage;
