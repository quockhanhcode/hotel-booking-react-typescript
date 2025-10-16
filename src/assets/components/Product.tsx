type ProductProps = {
  name: string;
  des: string;
  price: number;
  discount?: number;
};

export default function Product(props: ProductProps) {
  const { name, des, price, discount } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{des}</p>
      <p>{price}</p>
      <p>{discount}</p>
    </div>
  );
}
