    const filterDonacion = (e) => {  
    const filtro = e.target.value === "efectivo" ? postFilter.filter((e) => e.type_of_donor === "EFECTIVO") : postFilter((e) => e.type_of_donor === "EN_ESPECIE") 
    const filtros = e.target.value === "all" ? postFilter : filtro;
    return () => filtros
  }


  // {/* {posts.map(p => <Card id={p.id} key={p.id} title={p.title} description={p.description} location={p.location}></Card>)} */}
  export default filterDonacion