var shopping = [];


shopping[0] = 'Sandwich';
shopping[1] = 'Jitomastes';
shopping[2] = 'Cebolla';
shopping[3] = 'Cereal';
shopping[4] = 'Leche';
shopping[5] = 'Catsup';
shopping[6] = 'Carne';
shopping[7] = 'Pan';
shopping[8] = 'Yogurth';
shopping[9] = 'Cerveza';
shopping[10] = 'Shampoo';
shopping[11] = 'Limones';
shopping[12] = 'Café';
shopping[13] = 'Queso';
shopping[14] = 'Azúcar';
shopping[15] = 'Té';

// $('#agregar').on('click',function(){})

function escribeLista(){
  var elemento = prompt('Ingresa el nuevo ingrediente');
  if( elemento ){
    shopping.push( elemento );
  }

  var indice = 0;
  var indice_maximo = shopping.length;

document.getElementById('lista').innerHTML = '';
  while( indice < indice_maximo ){
    //Escribir en la lista
document.getElementById('lista').innerHTML =
  document.getElementById('lista').innerHTML +
  '<li>' + shopping[ indice ] + '</li>'


    indice++;
  }

}

document.getElementById('agregar').addEventListener('click', escribeLista);
escribeLista();
