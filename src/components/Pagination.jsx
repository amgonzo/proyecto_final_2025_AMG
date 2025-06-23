import Pagination from 'react-bootstrap/Pagination';

function Paginacion ({cantidad, itemsporpagina, paginaactual, setPagina}) {
 
    const items = [];
    let ultimo = 0;
    const primero = 1;
    let ponerEliprimero = true;
    let ponereliultimo = true; 

    if( cantidad % itemsporpagina == 0)
        {ultimo = cantidad/itemsporpagina; }
    else{ultimo = parseInt(cantidad/itemsporpagina) + 1;}
    4 % 2

    //si hay hasta 5 paginas
    if (ultimo <= 5)
        {
            for (let number = 1; number <= ultimo; number++) 
                {
                    items.push(
                        <Pagination.Item key={number} active={number === paginaactual}  onClick={() => setPagina(number)}>
                        {number}
                        </Pagination.Item>,		
                        );
                }
        }
        else
        {
        //si hay mas de 5 pagonas

        let desde = 1;
        if (paginaactual - 2 < 1){desde = 1;}else{desde = paginaactual-1;}
        let hasta = 0;
        if ( paginaactual + 3 >= ultimo) {hasta=ultimo; if(paginaactual <= ultimo - 3){desde = paginaactual - 1;}else{desde = ultimo - 3;}}else{hasta = paginaactual + 3;}
        for (let number = desde; number <= hasta; number++) 
            {
                if(paginaactual == primero || !ponerEliprimero)
                    {
                        if( number ==  paginaactual + 3  && ponereliultimo){
                            items.push(<Pagination.Ellipsis />);
                            ponereliultimo = false;
                        }
                        else
                        {
                            items.push(
                            <Pagination.Item key={number} active={number === paginaactual} onClick={() => setPagina(number)}>
                            {number}
                            </Pagination.Item>,		
                            );
                        }
                    }
                    else
                    {
                        items.push(<Pagination.Ellipsis />);
                        ponerEliprimero = false;
                    }
            }
        }

        
/*
        if(primero + 2 >= paginaactual && primero + 2 >= number)
        {
            items.push(
            <Pagination.Item key={number} active={number === paginaactual} onClick={() => setPagina(number)}>
            {number}
            </Pagination.Item>,		
            );
        }
        if(paginaactual + 3 == number)
            {items.push(<Pagination.Ellipsis />);}
*/

    return(
 <div>
    <Pagination size="sm" >
    <Pagination.First onClick={() => setPagina(primero)}/>
    <Pagination.Prev onClick={() => {if(primero < (paginaactual - 1)){setPagina(paginaactual -1);} else{setPagina(primero);}}}/>
        {[items]}
    <Pagination.Next onClick={() => {if(ultimo > (paginaactual + 1)){setPagina(paginaactual + 1);} else{setPagina(ultimo);}}}/>
    <Pagination.Last onClick={() => setPagina(ultimo)}/>
    </Pagination>
  </div>
 )
}

export default Paginacion;