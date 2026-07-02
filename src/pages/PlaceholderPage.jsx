function PlaceholderPage({ title, description }) {
  return (
    <section className="mx-auto flex min-h-[420px] w-full max-w-[1340px] items-center justify-center rounded-[28px] bg-[#F4F4F4] px-6 py-16 text-center">
      <div className="max-w-[720px]">
        <h1 className="text-[42px] font-bold leading-tight text-[#231300]">{title}</h1>
        <p className="mt-5 text-[18px] leading-[1.7] text-[#4B4B4B]">{description}</p>
      </div>
    </section>
  );
}

export default PlaceholderPage;
