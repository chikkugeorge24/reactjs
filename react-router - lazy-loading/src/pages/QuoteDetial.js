import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighLighedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learn Well" },
  { id: "q2", author: "MaxMill", text: "Learn Great" }
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { path, url } = match;
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if (!quote) {
    return <p>No valid quote found!</p>;
  }
  return (
    <>
      <HighLighedQuote author={quote.author} text={quote.text} />
      <Route path={path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
