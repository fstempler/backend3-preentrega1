import app, { initMongo } from './src/app.js';

await initMongo(); 

app.listen(3000, () => {
    console.log('Server running on port 3000')
});