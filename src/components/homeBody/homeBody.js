import './homeBody.css'
import stanL from './pictures/stanlee.JPG';
import retrato from './pictures/retrato.png';
import boda from './pictures/boda.png';
import paisaje from './pictures/paisaje.png';
import producto from './pictures/producto.png';

export const HomeBody = () => {
    
    return (
        <div className='homeBody'>
            <div className='homeCover'>
            </div>
            <div className='homeComments'>
                <h3>“Thank you for capturing our wedding in such incredible ways…”</h3>
                <div className='commentsContainer'>
                    <p className='commentsDetails'>Gracias por visitar mi sitio web. Soy Juan Vélez, un fotógrafo y videógrafo profesional en Bogotá a tiempo completo. Ofrezco fotografías y videos de bodas elegantes, retratos, fotografías de productos y videos panorámicos realizados con drone. También cubro todo el territorio colombiano, el caribe, Estados Unidos y europa.</p>
                    <p className='commentsDetails'>Mi enfoque relajado y sin prisas, combinado con muchos años de experiencia, garantizan que, sea cual sea su evento y donde sea, el resultado final será una colección natural y honesta de imágenes que reflejen el deseo de lo que buscabas.</p>
                    <p className='commentsDetails'>A lo largo de los años, he desarrollado mi propio estilo. Captaré tu día con la menor cantidad de poses posible. Mantener el flujo natural sin interrupciones, por lo tanto, ¡más desnudo que posado! Sin embargo, se recomienda tomarse un tiempo para tomar un par de fotos.</p>
                    <p className='commentsDetails'>La fotografía es una forma de vida para mí, un verdadero amor por la profesión y estoy encantado de brindar mis habilidades y experiencia para mi clientes: eche un vistazo a mi portafolio para una muestra de mi enfoque creativo y estilo.</p>
                </div>
            </div>
            <div className='personalidades'>
                <h3 className='subtitle'>PERSONALIDADES</h3>
                <div className='stanLee'>
                    <h4 className='spidaermanQuote'>"Un gran poder conlleva a una gran responsabilidad"</h4> 
                    <img src={stanL} className='stan' alt='Stan Lee'></img>
                </div>
            </div>
            <div className='textoIntroductorio'>
                <div className='textoIntroductorioTile'>
                    <p>I keep my pricing as straight forward as possible, all inclusive and no hidden charges. I offer 8, 10 or 12 hour coverage for an image only option which includes a no obligation sales chat, all personally edited images, digitally enhanced and print ready for your own use. Images supplied on a USB stick in both high resolution and low, ideal for Social Media. If you are looking for a shorter coverage, please ask for details.

                    If you are considering a wedding album and you are looking for sublime handcrafted quality then I have a range of Queensberry album options that have the “wow” factor. Booking the coverage and an album on the outset attracts special pricing, please enquire.

                    I hope you enjoy browsing through some of my work. Please get in touch if you’d like to speak with me about your wedding or special occasion, by telephone, email, Skype or via my Contact page! I’ll get back to you within 24 hours.</p>
                </div>
            </div>
            <div className='categorias'>
                <h3 className='subtitle'>CATEGORÍAS</h3>
                <div className='contenedorCategorias'>
                    <div className='itemCategorias'>
                        <h4 className='sutituloCategoria'>BODAS</h4> 
                        <img src={boda} className='stan' alt='Boda'></img>
                    </div>
                    <div className='itemCategorias'>
                        <h4 className='sutituloCategoria'>RETRATOS</h4> 
                        <img src={retrato} className='stan' alt='Retrato'></img>
                    </div>
                    <div className='itemCategorias'>
                        <h4 className='sutituloCategoria'>PRODUCTOS</h4> 
                        <img src={producto} className='stan' alt='Producto'></img>
                    </div>
                    <div className='itemCategorias'>
                        <h4 className='sutituloCategoria'>PAISAJES</h4> 
                        <img src={paisaje} className='stan' alt='Paisaje'></img>
                    </div>

                </div>
            </div>


        </div>
    )
}