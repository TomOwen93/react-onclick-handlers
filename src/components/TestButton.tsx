function TestButton(): JSX.Element {
  return (
    <button onClick={() => window.alert("hello")}>
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;
