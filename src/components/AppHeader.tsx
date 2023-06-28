interface AppHeaderProps {
  title: string;
}

function AppHeader({ title }: AppHeaderProps): JSX.Element {
 
  return <h1 onMouseOver={() => console.log(title.toUpperCase())}>{title}</h1>;
}

export default AppHeader;
