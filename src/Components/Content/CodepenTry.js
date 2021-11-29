import {
    PrefillEmbed,
    PrefillLang,
    useCodePenEmbed,
    stripIndent
} from 'react-codepen-prefill-embed';


const CodepenTry = () => {
    useCodePenEmbed();
    return (
        <PrefillEmbed
            className="codepen"
            penTitle="Deposits CodePen"
            embedHeight="400"
            themeId="31205"
            editable
            defaultTabs={['babel']}

            description="Deposits Playground"
            tags={['react', 'react-docs-demo']}
            htmlClasses={['loading', 'no-js']}
            head={
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            }
            scripts={[
                'https://unpkg.com/react@16.8.6/umd/react.development.js',
                'https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js',
            ]}
            stylesheets={['https://unpkg.com/normalize.css@8.0.1/normalize.css']}
        >
            <PrefillLang lang="babel">
                {stripIndent`
          const App = () => <h1>What else</h1>;
          ReactDOM.render(
            <App/>,
            document.getElementById('root')
          );
        `}
            </PrefillLang>
            {/* <PrefillLang lang="html">
                {stripIndent`
            <div id="root"></div>
        `}
            </PrefillLang>
            <PrefillLang lang="css">
                {stripIndent`
            : #eee;
            body {
              background: $bg; 
            }
        `}
            </PrefillLang> */}
        </PrefillEmbed>
    );
};

export default CodepenTry