'use strict';

const axios = require('axios');
const translate = require('translate');

const STAR_WARS_API = `https://swapi.py4e.com/api/people/schema`;

module.exports.hello = (event, context, callback) => {

    async function getTranslate(arg) {
        try {
            const text = await translate(arg, { to: "es", engine: "libre" });
            return text;
        } catch (e) {
            console.error(e.message);
        }
    }

    const getRequest = async () => {
        try {
            const result = await axios.get(STAR_WARS_API);
            return result.data
        } catch (e) {
            console.error(e.message);
        }
    }

    (async () => {
        // Obtenemos los atributos del modelo people
        const text_en = await getRequest();
        let keys = text_en.required;
        let str = keys.join(', ');
        str = str.replace(/_/g, " ");

        // Traducciendo al español los atributos del modelo people
        const text_es = await getTranslate(str);
        let spanish = text_es.split(", ");
        let arrayOfObject = keys.map(function (value, index) {
            return [value, spanish[index]]
        });

        // Lo guardamos en el objeto model
        let model = {}
        arrayOfObject.forEach((key) => {
            model[key[0]] = key[1];
        });

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: model
            }),
        };

        callback(null, response);

    })()

};
