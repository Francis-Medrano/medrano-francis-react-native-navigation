export interface Item {
  name: string;
  price: number;
  image: string;
}

const items: Item[] = [
  { name: "Apple", price: 25, image: "apple" },
  { name: "Banana", price: 15, image: "banana" },
  { name: "Orange", price: 30, image: "orange" },
  { name: "Milk", price: 55, image: "milk" },
  { name: "Bread", price: 45, image: "bread" },
  { name: "Eggs", price: 80, image: "eggs" },
  { name: "Rices", price: 60, image: "rice" },
  { name: "Coffee", price: 120, image: "coffee" },
  { name: "Sugar", price: 40, image: "sugar" },
  { name: "Butter", price: 90, image: "butter" },
];

export const getImageSource = (imageName: string) => {
  const imageMap: { [key: string]: any } = {
    apple: require('../../assets/apple.jpeg'),
    banana: require('../../assets/banana.jpeg'),
    orange: require('../../assets/orange.jpeg'),
    milk: require('../../assets/milk.jpeg'),
    bread: require('../../assets/bread.jpeg'),
    eggs: require('../../assets/eggs.jpeg'),
    rice: require('../../assets/rice.jpeg'),
    coffee: require('../../assets/coffee.jpeg'),
    sugar: require('../../assets/sugar.jpeg'),
    butter: require('../../assets/butter.jpeg'),
  };
  return imageMap[imageName] || null;
};

export default items;
