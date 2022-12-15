import "./Banner.css";
import BannerImg from "./../assets/Banner.jpg";

const Banner = (props:any) => {
    return ( 
        <>
            <div className={props.cName}>
                <img src={props.bannerImg} />

                <div className="banner-text">
                    <h1>{ props.titre }</h1>
                    <p>{ props.text }</p>
                    <a href={props.url} className={props.btnClass}>
                        Recette plan
                    </a>
                </div>
            </div>
        </>
    );
}
 
export default Banner;