// TestPage.jsx
import { Helmet } from "react-helmet";

export default function TestPage() {
  return (
    <>
      <Helmet>
        <title>Test Meta Page</title>
        <meta name="description" content="This is a test meta description" />
        <meta name="keywords" content="test, react, helmet" />
        <meta property="og:title" content="Helmet OG Title Test" />
      </Helmet>

      <h1>This is a Test Page</h1>
    </>
  );
}
