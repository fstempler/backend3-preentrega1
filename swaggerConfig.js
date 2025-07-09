import { version } from "mongoose";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Adoption API',
            version: '1.0.0',
            description: 'Endpoint documemtation for Backend 3 project',
        },
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, specs };