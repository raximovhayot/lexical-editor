import "./styles.css";
import Editor from "./Editor";

export default function App() {
  //const [editor] = useLexicalComposerContext();
  //const htmlString = $generateHtmlFromNodes(editor, null);
  console.log(Editor);
  return (
    <div className="App">
      <h1>Editor</h1>
      <Editor />
      <h1>Code</h1>
    </div>
  );
}
