import stocksImg from './images/stocks.png'
import scatterbrainImg from './images/scatterbrain.png'

export const projects = [
    {
        name: 'Stock Market React App',
        description: 'Website for Stock Market price information and company data',
        toolsUsed: 'React, axios, JSX, CSS',
        image: stocksImg,
        liveUrl: 'http://dcstockmarket.surge.sh/',
        githubUrl: 'https://github.com/djclayton21/stock-market-react-app'
    },
    {
        name: 'Scatterbrain Study Tool',
        description: 'Full-stack CRUD web app to manage study topics using spaced learning.',
        toolsUsed: 'MongoDB, Express, React, Node',
        image: scatterbrainImg,
        liveUrl: 'https://scatterbrainstudytool.herokuapp.com/',
        githubUrl: 'https://github.com/bellmarc/scatterbrain-study-app'
    }
]
