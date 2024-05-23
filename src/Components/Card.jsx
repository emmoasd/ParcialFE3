const Card = ({ banda, cancion }) => {
    return (
        <div>
            <h2>¡Vemos que tienes un excelente gusto por la música!</h2>
            <h4>Lo evidencia tu banda preferida</h4>
            <h3>{banda}</h3>
            <h4>Y ni hablar de este temazo :)</h4>
            <h3>{cancion}</h3>
        </div>
    );
};

export default Card;