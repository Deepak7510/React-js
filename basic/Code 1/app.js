const root = ReactDOM.createRoot(document.getElementById("root"));

// react element 1
// const h1 = React.createElement("h1", { className: "heading" }, "Deepak");
// root.render(h1);

// react element 2

{
  /* <div id="container">
  <h1>I am heading 1</h1>
  <h2>I am heading 2</h2>
</div>; */
}

const containerDiv = React.createElement("div", { id: "container" }, [
  React.createElement("h1", {}, "I am heading 1"),
  React.createElement("h2", {}, "I am heading 2"),
]);

root.render(containerDiv);
