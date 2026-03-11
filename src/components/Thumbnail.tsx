type ThumbnailProps = {
  title: string;
  number: number;
  active: boolean;
  onClick: () => void;
};

function Thumbnail({ title, number, active, onClick }: ThumbnailProps) {
  return (
    <button
      className={`thumbnail ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="thumbnail-card">
        <div className="thumb-label">
          <span className="thumb-number">{number}</span>
          <span className="thumb-name">{title}</span>
        </div>

        <div className="thumbnail-mini-slide">
          <div className="mini-header"></div>
          <div className="mini-line short"></div>
          <div className="mini-line"></div>
          <div className="mini-line"></div>
        </div>
      </div>
    </button>
  );
}

export default Thumbnail;