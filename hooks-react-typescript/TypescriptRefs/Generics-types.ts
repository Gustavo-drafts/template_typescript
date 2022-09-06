
// Glosário de Genreics
/**
 * S => state
 * T => type
 * K => key
 * v => value
 * E => element
 */

function useState<T extends string | number = string >() { //... '= string' se o dev não escolher, o valor default será String 
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}  

let newState = useState<number | string>();
newState.get()
newState.set("Gustavo")
newState.set(123)
newState.set("Suzana")


// Generic - flexibilidade de definir tipo no ato da declaração
 
// Union - pode declarar entre um tipo ou outro