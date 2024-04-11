const heading =React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:"heading1"},"I'm H1 tag"),
    React.createElement("h2",{id:"heading2"},"I'm H2 tag")]
),
React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"heading3"},"I'm H1 tag"),
    React.createElement("h2",{id:"heading4"},"I'm H2 tag")]
)]
);

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);