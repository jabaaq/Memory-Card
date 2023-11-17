import loading from "../../../../assets/img/200.gif";
import "./loadingPage.css";

function LoadingPage() {
  return (
    <div className="loading-page">
      <img
        className="pika-loading"
        src={loading}
        width={"250px"}
        alt="Loading..."
      />
      <p>Loading...</p>
    </div>
  );
}

export { LoadingPage };
