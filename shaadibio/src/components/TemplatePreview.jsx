function TemplatePreview() {
  return (

    <div className="py-16 bg-white">

      <h2 className="text-3xl text-center font-bold mb-10">
        Beautiful Biodata Templates
      </h2>

      <div className="grid md:grid-cols-2 gap-10 px-20">

        <div className="border p-6 rounded shadow">
          <h3 className="font-bold mb-2">Classic Template</h3>
          <p>Elegant traditional biodata format.</p>
        </div>

        <div className="border p-6 rounded shadow">
          <h3 className="font-bold mb-2">Modern Template</h3>
          <p>Stylish and clean modern biodata.</p>
        </div>

      </div>

    </div>

  );
}

export default TemplatePreview;