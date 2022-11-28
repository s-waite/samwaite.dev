export default function InfoBox({ children, title }) {
return (
<div className="h-full flex flex-col flex-grow gap-5 border bg-inherit pt-6 p-5 flex-wrap">
  <div className="absolute -translate-y-9 bg-background-color px-2 z-10 text-secondary-text-color ">
    {title}
  </div>
  {children}
</div>
)
}
