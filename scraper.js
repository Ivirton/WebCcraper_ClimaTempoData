const axios = require('axios')
const cheerio = require('cheerio')

//URL DO CLIMA TEMPO 
const url = 'https://www.climatempo.com.br/previsao-do-tempo/cidade/297/duquedecaxias-rj';
async function scraperPrevisaoCompleta() {
    try {
        //request 
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const weatherData = {
            regiao: $('meta[name="regiao"]').attr('content'),
            uf: $('meta[name="uf"]').attr('content'),
            idCidade: $('meta[name="idCidade"]').attr('content'),
            tmin: $('meta[name="tmin"]').attr('content'),
            tmax: $('meta[name="tmax"]').attr('content'),
            cmomento: $('meta[name="cmomento"]').attr('content'),
            tmomento: $('meta[name="tmomento"]').attr('content'),
            icoman: $('meta[name="icoman"]').attr('content'),
            icotar: $('meta[name="icotar"]').attr('content'),
            iconoi: $('meta[name="iconoi"]').attr('content'),
            icodia: $('meta[name="icodia"]').attr('content'),
            chuvamm: $('meta[name="chuvamm"]').attr('content'),
            urmax: $('meta[name="urmax"]').attr('content'),
            uvmax: $('meta[name="uvmax"]').attr('content'),
            agricola: $('meta[name="agricola"]').attr('content'),
            litoranea: $('meta[name="litoranea"]').attr('content'),
            turistica: $('meta[name="turistica"]').attr('content'),
            secao: $('meta[name="secao"]').attr('content'),
            website: $('meta[name="website"]').attr('content'),
            lancamento: $('meta[name="lancamento"]').attr('content'),
            vitaminaD: $('meta[name="vitaminaD"]').attr('content'),
            qualidadeAr: $('meta[name="qualidadeAr"]').attr('content'),
            resfriado: $('meta[name="resfriado"]').attr('content'),
            mosquito: $('meta[name="mosquito"]').attr('content'),
            raiosUV: $('meta[name="raiosUV"]').attr('content'),
            pele: $('meta[name="pele"]').attr('content'),
            cidade: $('span[itemprop="name"]').text().replace('Clima e Previsão do TempoCidadePrevisão do tempo hojeDuque de',"").trim()

            
        };

        console.log(weatherData['cidade'])

    } catch (error) {
        console.error(error ,"erro ")
    }
   
}
async function scraperPrevisaoAgora() {
    try {
        //request 
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const weatherData = {
            // <meta name="tmomento" content="30">
            // <meta name="cmomento" content="céu-limpo">
            tmomento: $('meta[name="tmomento"]').attr('content'),
            cmomento: $('meta[name="cmomento"]').attr('content'),
            
            

            
        };

        console.log(weatherData['cidade'])

    } catch (error) {
        console.error(error ,"erro ")
    }
   
}
scraperPrevisaoCompleta()