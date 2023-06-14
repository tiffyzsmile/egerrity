import "./PortfolioItem.scss";
import Card from "../../../../Components/Card";
import Tag from "../../../../Components/Tag";
import Button from "../../../../Components/Button";

const PortfolioItem = ({ href = "", image, title, description, tags }) => {
  return (
    <div className="portfolio-item">
      <Card>
        <img className="feature-image" src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>

        <Button type="primary" target="_blank" href={href}>
          View Case Study
        </Button>
        <div className="tags">
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PortfolioItem;
