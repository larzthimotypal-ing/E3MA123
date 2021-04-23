import Photo1 from '../bird1.jpg' 
import Photo2 from '../bird2.jpg'
import Photo3 from '../bird3.jpg'
import Photo4 from '../bird4.jpg'

const Favourite = ({ line1, line2 }) => {
    return (
        <section className="favourite">
            <h1>{line1}</h1> 
            <h1>{line2}</h1>
            <div className="photos">
                <div className="row">
                    <img className="photo" src={Photo1}/>
                    <img className="photo" src={Photo2}/>
                </div>
                <div className="row">
                    <img className="photo" src={Photo3}/>
                    <img className="photo" src={Photo4}/>
                </div>
            </div>
        </section>
    )
}

export default Favourite
