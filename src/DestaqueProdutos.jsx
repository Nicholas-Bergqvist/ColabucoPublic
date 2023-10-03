import ContainerProdutos from "./ContainerProdutos";
import camisa from "./assets/camisa2.jpg";

export default function DestaqueProdutos() {
  return (
    <section className="pt-[64px] grid grid-cols-4 mx-[400px] gap-[32px]">
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
      <ContainerProdutos
        produto={{
          nome: "Camisa",
          preco: "R$100.00",
          linkIMG: { camisa },
        }}
        size={200}
      />
    </section>
  );
}
