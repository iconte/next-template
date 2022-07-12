export const GlobalStyle = () => {
  return (
    <style>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Rawline', sans-serif;
      }
      html,
      body,
      #__next {
        min-height: 100vh;
      }
      body {
        position: relative;
      }
    `}</style>
  );
};
