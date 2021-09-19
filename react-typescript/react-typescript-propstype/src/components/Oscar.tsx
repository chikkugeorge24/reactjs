type OscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <h2>{props.children}</h2>;
};

export default Oscar;
