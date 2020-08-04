/*
what is the difference between collections created with Map and collections created with Object?
 */

//? 1) you can count the records in a Map with a single method call

//? 2) Keys in Maps can be strings

//? 3) you can iterate over values in a Map in their insertion order

// 4) you can access values in a Map without iterating over the whole collection


/*
Summary:
Object: A data structure in which data is stored as key value pairs. In an object the key has to be a number, string, or symbol. The value can be anything so also other objects, functions etc. A object is an non ordered data structure, i.e. the sequence of insertion of key value pairs is not remembered
ES6 Map: A data structure in which data is stored as key value pairs. In which a unique key maps to a value. Both the key and the value can be in any data type. A map is a iterable data structure, this means that the sequence of insertion is remembered and that we can access the elements in e.g. a for..of loop
Key differences:

A Map is ordered and iterable, whereas a objects is not ordered and not iterable

We can put any type of data as a Map key, whereas objects can only have a number, string, or symbol as a key.

A Map inherits from Map.prototype. This offers all sorts of utility functions and properties which makes working with Map objects a lot easier.

 */

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map
Объект Map содержит пары ключ-значение и сохраняет порядок вставки.
Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.

 Объекты исторически использовались как Map. Однако, у них есть ряд отличий, который дает преимущества Map в ряде случаев:

 - Ключами Объекта выступают Строки и Символы, в то время как любое значение может быть ключом Map, включая функции, объекты и примитивы.

 - В отличие от Объектов, ключи в Map упорядочены. Таким образом, во время итерации Map, ключи возвращаются в порядке вставки.

 - Вы легко можете получить количество элементов в Map с помощью свойства size,
 в то время как количество элементов Объекта может быть определено только вручную.

 - Map - итерируемый объект и может быть итерирован напрямую, в то время как Объект требует ручного получения списка ключей и их итерации.

 - Объект имеет прототип и поэтому имеет стандартный набор ключей, который, при неосторожности,
 может пересекаться с вашими ключами. С момента выхода ES5 это может быть изменено с помощью map = Object.create(null).

 - Map может иметь более высокую производительность в случаях частого добавления или удаления ключей.

 Map.length  - Значение свойства length всегда равно 0.
 Чтобы узнать количество элементов в Map - используйте Map.prototype.size.

 */

/*
Map и Set
https://learn.javascript.ru/map-set

Отличия от обычного объекта Object:

 - Что угодно может быть ключом, в том числе и объекты.
 - Есть дополнительные методы, свойство size.

 */