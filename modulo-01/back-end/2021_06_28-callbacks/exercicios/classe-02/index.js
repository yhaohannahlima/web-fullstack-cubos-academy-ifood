const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];


function localizaCep (cep) {
    
    endereços.find(x => {

        if (x.cep === cep) {
            console.log(`O endereço referente ao CEP informado fica na ${x.rua}.`);        
        }
    });

}

localizaCep(00111222);
