import { useState } from "react";
import Card from './Components/Card';

const Form = () => {
    const [banda, setBanda] = useState('');
    const [cancion, setCancion] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validaciones
        if (banda.length < 3 || banda.startsWith(' ') || cancion.length < 6) {
            setError('Por favor chequea que la información sea correcta');
            setSubmitted(false);
        } else {
            setError('');
            setSubmitted(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombra a tu banda favorita:</label>
                    <input
                        id="banda"
                        type="text"
                        value={banda}
                        onChange={(e) => setBanda(e.target.value)}
                    />
                </div>
                <div>
                    <label>Tu canción favorita es:</label>
                    <input
                        id="cancion"
                        type="text"
                        value={cancion}
                        onChange={(e) => setCancion(e.target.value)}
                    />
                </div>
                <button type="submit">Ver resultado</button>
            </form>
            {error && <p>{error}</p>}
            {submitted && <Card banda={banda} cancion={cancion} />}
        </div>
    );
};

export default Form;