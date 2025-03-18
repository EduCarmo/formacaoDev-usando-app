export default function layout(props: any) {
  return (
    <div className="flex flex-col gap-10">
        <div>{props.children}</div>
      <div className="grid grid-cols-3 gap-5">
        {props.verde}
        {props.amarela}
        {props.vermelha}
      </div>
    </div>
  );
}
