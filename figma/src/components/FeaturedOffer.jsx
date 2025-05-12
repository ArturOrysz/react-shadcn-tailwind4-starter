export default function FeaturedOffer({ title, description, buttonText, reverse }) {
  return (
    <section className={`container mx-auto px-4 py-16 flex flex-col ${ reverse ? 'md:flex-row-reverse' : 'md:flex-row' } items-center md:space-x-8`}>
      <div className="md:w-1/2 h-[250px] bg-gray-200 mb-6 md:mb-0"></div>
      <div className="md:w-1/2">
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <button className="px-6 py-3 border rounded">{buttonText}</button>
      </div>
    </section>
);
}
