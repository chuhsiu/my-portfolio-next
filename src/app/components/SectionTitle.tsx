export default function SectionTitle(props: { title: string}) {
  return (
    <h1 className="tracking-[1.2px] pl-8 pt-8 text-[24px] text-[#7284a1]">
      {props.title}
    </h1>
  );
}
