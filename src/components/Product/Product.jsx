
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const Product = ({ items }) => {
    const { img } = items;
    
    return (
        <>
       <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={img} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
           
    </>
    );
};

export default Product;