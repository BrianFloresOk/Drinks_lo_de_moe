import { Col, Card, Button, Row } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import PropTypes from 'prop-types';
import { useCart } from '../../hooks/useCart';
import toast, { Toaster } from 'react-hot-toast';
import style from "./Card.module.css"

export default function DrinkCard({ drink }) {
    const { handleDrinkIdClick, handleModalClick, } = useDrinks();
    const { addToCart } = useCart();

    const notify = () => toast.success('Bebida al carrito');

    function handleAddToCart(data) {
        addToCart(data);
    }

    return (
        // md=6 columnas de pequeño, lg=3 columnas en grande
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    //Donde se ubica la imagen
                    variant='top'
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrinkThumb}`}
                />
                <Card.Body>
                    <Card.Title className='mb-2'>{drink.strDrink}</Card.Title>
                    <Card.Subtitle className='mb-2'>{drink.price}</Card.Subtitle>
                    <Row>
                        <Col>
                            <Button
                                variant='warning'
                                className={style.buttons}
                                onClick={
                                    () => {
                                        handleModalClick();
                                        handleDrinkIdClick(drink.idDrink);
                                    }
                                }
                            >ver receta
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant='primary'
                                className={style.buttons}
                                onClick={() => {
                                    handleAddToCart(drink);
                                    notify()
                                }}
                            >agregar al carrito
                            </Button>
                            <Toaster 
                                position="bottom-right"
                                reverseOrder={false}
                                toastOptions={{
                                    style: {
                                        boxShadow: '1px 1px 5px -5px rgba(0,0,0,0.12)',
                                        border: 'thin solid lightgray'
                                    }
                                }}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
};