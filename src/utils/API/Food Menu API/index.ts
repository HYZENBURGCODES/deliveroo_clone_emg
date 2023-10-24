const foodMenuUrl = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
const foodMenuOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '39e94e362emshd969735bf0b5a3cp1bbffdjsn95dc9b79c342',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    }
};

export default {foodMenuUrl,foodMenuOptions };