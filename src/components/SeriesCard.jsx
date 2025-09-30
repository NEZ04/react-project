export const SeriesCard = (props) => {
     return(
            <li className="flex-col">
            <div className="shadow-2xl">
            <img src={props.currElem.img_url} width="40%" height="40%" />
            </div>
            <h2 className="text-3xl font-bold underline ">Name: {props.currElem.name}</h2>
            <h3 >Rating: {props.currElem.rating}</h3>
            <p>Summary: {props.currElem.description}</p>
            <p>Cast: {props.currElem.cast}</p>
            <a href={props.currElem.watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
            </li>
          )
}