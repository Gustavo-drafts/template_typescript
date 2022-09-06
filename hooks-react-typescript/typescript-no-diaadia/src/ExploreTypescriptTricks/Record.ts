
type Key = "key" | "anotherkey";

type Value = {
  name: string;
  age: number;
}

const users Record<Key, Value> = {
  key: { name: "Juca", age: 12 },
  anotherkey: { name: "Jhon", age: 15 }
}