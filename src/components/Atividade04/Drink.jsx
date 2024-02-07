function Drink({ name }) {
    if (name === "Mojito") {
        return (
            <section className=" bg-slate-700 rounded-md px-4 py-6">
              <h1 className="text-3xl font-bold text-center text-white capitalize">{name}</h1>
              <dl>
            <dt>Base spirit:</dt>
            <dd>Rum</dd>
            <dt>Ingredientes:</dt>
            <dd>Hortelã, açucar, limão</dd>
            <dt>Teor Alcoólico:</dt>
            <dd>Moderado</dd>
            </dl>
            </section>
        )
} else {
    return (
        <section className=" bg-slate-700 rounded-md px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-white capitalize">{name}</h1>
          <dl>
            <dt>Base spirit:</dt>
            <dd>Gin</dd>
            <dt>Ingredientes:</dt>
            <dd>Vermute Seco, Azeitonas</dd>
            <dt>Teor Alcoólico:</dt>
            <dd>Alto</dd>
        </dl>
        </section>)

}
  }
  
export function DrinkList() {
    return (
    <div className='grid grid-cols-4 gap-4 my-3'>
        <Drink name="Mojito" />
        <Drink name="Martini" />
    </div>
    );
  }