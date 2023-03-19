function CardDetail({ cardDetails }) {
    return (
        <>
            <p>Here is the price I found:</p>
            <p>{cardDetails.prices.usd != null ? cardDetails.prices.usd : 'Couldn\'t retrieve a price'}</p>
            <p>Here is the card name I found:</p>
            <p>{cardDetails.name}</p>
        </>
    )
}

export default CardDetail