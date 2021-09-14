type GreetProps = {
  name: string;
  messageCount: number;
  isloggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isloggedIn && (
        <h1>
          Welcome {props.name} to the world, You have {props.messageCount}{" "}
          unread messages!
        </h1>
      )}
    </>
  );
};

export default Greet;
