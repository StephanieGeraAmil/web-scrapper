const PORT=5000;
const url="https://www.theguardian.com/international";
const express= require ('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app= express();
axios(url)
    .then(response=>{
                const html=response.data;
                //console.log(html);
                const articles=[];
                const $= cheerio.load(html);
                $('.fc-item__title', html).each(function(){const title=$(this).text();
                                            const link=$(this).find('a').attr('href')
                                            articles.push({title,link});
                                        });
                console.log(articles);
                })
                    .catch(e=>console.log(e));
//<a href="https://www.elobservador.com.uy/suscripcion" class="btn--gold btn--small2" id="suscripcion_btn" style="display: inline-block;"><div class="eo_etiqueta_suscribite" id="eo_etiqueta_btn_suscribite"><div class="eo_etiqueta_suscribite_inner"><span class="eo_etiqueta_suscribite_span">por US$ 3<sup>45</sup></span></div></div>SUSCRIBITE</a>
app.listen(PORT,()=>console.log(`server running on port: ${PORT}`));