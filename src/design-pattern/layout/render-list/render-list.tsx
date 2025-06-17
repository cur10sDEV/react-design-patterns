interface IRenderListProps {
  data: unknown[];
  resourceName: string;
  dataToRender: any;
}

const RenderList = ({
  data,
  resourceName,
  dataToRender: ItemToRender,
}: IRenderListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item, i) => (
        <ItemToRender key={i} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RenderList;
